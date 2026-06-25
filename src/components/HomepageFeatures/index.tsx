import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

type ProductCardLink = {
  to: string;
  label: string;
};

type ProductCard = {
  title: string;
  titleLines?: string[];
  description: string;
  image?: string;
  imageClassName?: string;
  to: string;
  releaseNotesTo?: string;
  extraLinks?: ProductCardLink[];
  links?: ProductCardLink[];
  featured?: boolean;
};

const productCards: ProductCard[] = [
  {
    title: 'RapidPlan',
    description:
      'Create professional traffic control plans with desktop tools built for complex work zones, detours, road closures, events, and temporary traffic projects. RapidPlan Help Center documentation covers plan setup, workspace navigation, mapping, drawing tools, signs, markers, road tools, object editing, printing, exporting, preferences, and release notes.',
    image: '/img/rapidplan-symbol.svg',
    to: '/rapidplan/Welcome',
    releaseNotesTo: '/rapidplan/release-notes/official',
    extraLinks: [
      { to: '/rapidplan/release-notes/hotfix', label: 'Hotfix' },
      { to: '/rapidplan/release-notes/weekly', label: 'Weekly' },
    ],
    featured: true,
  },
  {
    title: 'Accounts & Setup',
    description:
      'Set up Launcher, accounts, licenses, and desktop application access.',
    to: '/accounts-setup/Welcome',
    links: [
      { to: '/accounts-setup/Welcome', label: 'Documentation' },
      {
        to: '/accounts-setup/desktop-applications/install-and-use-the-invarion-launcher',
        label: 'Install and use the Invarion Launcher',
      },
      {
        to: '/accounts-setup/desktop-applications/minimum-system-requirements',
        label: 'Minimum system requirements',
      },
      {
        to: '/accounts-setup/desktop-applications/troubleshoot-launcher-issues',
        label: 'Troubleshoot Launcher issues',
      },
    ],
  },
  {
    title: 'RapidPlan Online',
    titleLines: ['RapidPlan', 'Online'],
    description:
      'Draw detailed traffic control plans directly on integrated mapping through a web browser.',
    image: '/img/rapidplan-online-symbol.svg',
    imageClassName: styles.tallLogo,
    to: '/rapidplan-online/Welcome',
    releaseNotesTo: '/rapidplan-online/release-notes/release-notes-rapidplan-online',
  },
  {
    title: 'RapidPath',
    description:
      'Test vehicle swept path movements for road and site projects of any size with desktop analysis tools.',
    image: '/img/rapidpath-symbol.svg',
    to: '/rapidpath/Welcome',
    releaseNotesTo: '/rapidpath/release-notes/official',
  },
  {
    title: 'RapidPath Online',
    titleLines: ['RapidPath', 'Online'],
    description:
      'Check vehicle movements on integrated mapping in a browser without needing CAD software.',
    image: '/img/rapidpath-online-symbol.svg',
    to: '/rapidpath-online/Welcome',
    releaseNotesTo: '/rapidpath-online/release-notes/release-notes-rapidpath-online',
  },
];

const CardLinks = ({ card }: { card: ProductCard }) => {
  if (card.links) {
    const [primaryLink, ...secondaryLinks] = card.links;

    return (
      <div className={styles.accountsLinksBlock}>
        <Link to={primaryLink.to} className={styles.buttonLink}>
          {primaryLink.label}
        </Link>
        <div className={styles.accountsLinks}>
          {secondaryLinks.map((link) => (
            <Link key={link.to} to={link.to} className={styles.textLink}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.cardLinks}>
      <Link to={card.to} className={styles.buttonLink}>
        Documentation
      </Link>
      {card.releaseNotesTo && (
        <Link to={card.releaseNotesTo} className={styles.buttonLink}>
          Release notes
        </Link>
      )}
      {card.extraLinks?.map((link) => (
        <Link key={link.to} to={link.to} className={styles.buttonLink}>
          {link.label}
        </Link>
      ))}
    </div>
  );
};

const ProductTitle = ({ card }: { card: ProductCard }) => {
  const titleLines = card.titleLines ?? [card.title];

  return (
    <Link to={card.to} className={styles.cardTitle}>
      {titleLines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </Link>
  );
};

const ProductCard = ({ card }: { card: ProductCard }) => (
  <article
    className={clsx(
      styles.card,
      card.featured && styles.featuredCard,
      !card.image && styles.textOnlyCard,
    )}
  >
    <div className={styles.cardHeader}>
      {card.image && (
        <Link to={card.to} className={styles.logoLink} aria-label={`${card.title} documentation`}>
          <img src={card.image} className={clsx(styles.logo, card.imageClassName)} alt="" />
        </Link>
      )}
      <ProductTitle card={card} />
    </div>
    <div className={styles.cardBody}>
      <p className={styles.cardDescription}>{card.description}</p>
      <CardLinks card={card} />
    </div>
  </article>
);

export default function HomepageFeatures(): JSX.Element {
  const [featuredCard, ...secondaryCards] = productCards;

  return (
    <section className={styles.features}>
      <div className="container">
        <aside className={styles.helpCallout} aria-label="Contact Invarion">
          <div className={styles.helpItem}>
            <span className={styles.helpIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.31 0-6 1.57-6 3.5V20h12v-2.5c0-1.93-2.69-3.5-6-3.5z" />
              </svg>
            </span>
            <p className={styles.helpText}>
              Need a live demo?{' '}
              <Link to="https://invarion.com/contact/" className={styles.helpLink}>
                Let us know and book a time.
              </Link>
            </p>
          </div>
          <div className={styles.helpItem}>
            <span className={styles.helpIcon} aria-hidden="true">
              ?
            </span>
            <p className={styles.helpText}>
              Questions or technical issues?{' '}
              <Link to="https://invarion.com/support/" className={styles.helpLink}>
                Contact support.
              </Link>
            </p>
          </div>
        </aside>
        <div className={styles.productGrid}>
          <ProductCard card={featuredCard} />
          <div className={styles.secondaryGrid}>
            {secondaryCards.map((card) => (
              <ProductCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
