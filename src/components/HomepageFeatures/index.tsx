import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import RPIcon from '../../assets/rapidplan-logo-e1600826183832.webp';
import ROIcon from '../../assets/rapidplan-online-logo.webp';
import RAIcon from '../../assets/RapidPath-Horizontal4x-e1600826210395.webp';
import RAOIcon from '../../assets/RapidPathOnlineCropped-300x97.webp';

const productIcons = [RPIcon, ROIcon, RAIcon, RAOIcon];

export default function HomepageFeatures(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { docsLinks }: any = siteConfig.customFields;
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'space-around' }}>
          {docsLinks.map((link, index) => {
            return (
              <Link to={link.to} key={index}>
                <img src={productIcons[index]} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
