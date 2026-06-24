/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import {useLocation} from '@docusaurus/router';
import {useThemeConfig, ErrorCauseBoundary} from '@docusaurus/theme-common';
import routes from '@generated/routes';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';

import styles from './styles.module.css';

type NavbarItemWithSection = NavbarItemConfig & {
  isActive?: (match: unknown, location: {pathname: string}) => boolean;
};

type RouteWithSidebar = {
  path?: string;
  sidebar?: string;
  routes?: RouteWithSidebar[];
};

const sectionSidebarsByPath: Record<string, string> = {
  '/rapidplan/Welcome': 'rapidPlanSidebar',
  '/rapidpath/Welcome': 'rapidPathSidebar',
  '/rapidplan-online/Welcome': 'rapidPlanOnlineSidebar',
  '/rapidpath-online/Welcome': 'rapidPathOnlineSidebar',
  '/accounts-setup/Welcome': 'accountSetupSidebar',
};

const sectionPathPrefixesBySidebar: Record<string, string> = {
  rapidPlanSidebar: '/rapidplan',
  rapidPathSidebar: '/rapidpath',
  rapidPlanOnlineSidebar: '/rapidplan-online',
  rapidPathOnlineSidebar: '/rapidpath-online',
  accountSetupSidebar: '/accounts-setup',
};

function normalizePath(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

function findRouteSidebar(
  pathname: string,
  routeItems: RouteWithSidebar[],
): string | undefined {
  const normalizedPathname = normalizePath(pathname);

  for (const route of routeItems) {
    if (
      route.path &&
      normalizePath(route.path) === normalizedPathname &&
      typeof route.sidebar === 'string'
    ) {
      return route.sidebar;
    }

    const childSidebar = route.routes
      ? findRouteSidebar(normalizedPathname, route.routes)
      : undefined;

    if (childSidebar) {
      return childSidebar;
    }
  }

  return undefined;
}

function isSectionNavbarItem(item: NavbarItemConfig): boolean {
  return (
    typeof item.className === 'string' &&
    item.className.split(/\s+/).includes('helpCenterSectionLink') &&
    typeof item.to === 'string'
  );
}

function getSectionSidebar(item: NavbarItemConfig): string | undefined {
  return typeof item.to === 'string'
    ? sectionSidebarsByPath[normalizePath(item.to)]
    : undefined;
}

function isSectionPathMatch(pathname: string, sidebar: string): boolean {
  const prefix = sectionPathPrefixesBySidebar[sidebar];
  const normalizedPathname = normalizePath(pathname);

  return (
    !!prefix &&
    (normalizedPathname === prefix || normalizedPathname.startsWith(`${prefix}/`))
  );
}

function useNavbarItems() {
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): JSX.Element {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              {cause: error},
            )
          }>
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

export default function NavbarContent(): JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();
  const {pathname} = useLocation();

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const activeSidebar = findRouteSidebar(pathname, routes as RouteWithSidebar[]);
  const leftItemsWithSectionActiveState = leftItems.map((item) => {
    const sectionSidebar = isSectionNavbarItem(item)
      ? getSectionSidebar(item)
      : undefined;

    if (!sectionSidebar) {
      return item;
    }

    return {
      ...item,
      isActive: (_match, location) =>
        activeSidebar
          ? activeSidebar === sectionSidebar
          : isSectionPathMatch(location.pathname, sectionSidebar),
    } satisfies NavbarItemWithSection;
  });

  const searchBarItem = items.find((item) => item.type === 'search');
  const isHomepage = pathname === '/';

  return (
    <NavbarContentLayout
      left={
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItemsWithSectionActiveState} />
        </>
      }
      right={
        <>
          {!searchBarItem && !isHomepage && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </>
      }
    />
  );
}
