import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBar from '@theme/SearchBar';

import styles from './index.module.css';

export const HomepageHeader: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={styles.heroDescription}>
          Find product documentation, release notes, Launcher help, and setup guidance.
        </p>
        <div className={clsx(styles.heroSearch, 'homepageHeroSearch')}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};
