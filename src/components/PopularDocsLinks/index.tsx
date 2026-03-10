import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './styles.module.css';

import { LinksList } from '../LinksList';
import { SectionTitle, SubsectionTitle } from '../Title';

export const PopularDocsLinks = ({}): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  const { whatsNewLinks, accountManagementLinks, gettingStartedLinks }: any =
    siteConfig.customFields;

  return (
    <section className={styles['links-container']}>
      <div className="container">
        <SectionTitle text="Popular Docs" />

        <div className="row" style={{ justifyContent: 'space-around' }}>
          <div className={clsx('col col--3')}>
            <SubsectionTitle text="Account management" />
            <LinksList links={accountManagementLinks} />
          </div>
          <div className={clsx('col col--3')}>
            <SubsectionTitle text="Getting started" />
            <LinksList links={gettingStartedLinks} />
          </div>
          <div className={clsx('col col--3')}>
            <SubsectionTitle text="What's new?" />
            <LinksList links={whatsNewLinks} />
          </div>
        </div>
      </div>
    </section>
  );
};
