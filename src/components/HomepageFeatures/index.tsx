import React from 'react';
import styles from './styles.module.css';
import { FeatureCard } from '../FeatureCard';
import { LinksList } from '../LinksList';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';

export default function HomepageFeatures(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { faqsLinks, gettingStartedLinks }: any = siteConfig.customFields;
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'space-around' }}>
          <FeatureCard
            title="Getting Started"
            content={<LinksList links={gettingStartedLinks} color="#fff" />}
          />
          <FeatureCard
            title="FAQs"
            content={<LinksList links={faqsLinks} color="#fff" />}
          />
        </div>
      </div>
    </section>
  );
}
