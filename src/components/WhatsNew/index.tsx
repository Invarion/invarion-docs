import React from 'react';
import { LinksList } from '../LinksList';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import { SectionTitle } from '../SectionTitle';

export default function WhatsNewSection(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { changelogsLinks }: any = siteConfig.customFields;
  return (
    <section>
      <div className="container">
        <div className="row" style={{ justifyContent: 'space-around' }}>
          <div className={clsx('col col--4')}>
            <SectionTitle text="What's New" />
          </div>
          <div className={clsx('col col--4')}></div>
        </div>

        <div className="row" style={{ justifyContent: 'space-around' }}>
          <div className={clsx('col col--4')}>
            <LinksList links={changelogsLinks} />
          </div>
          <div className={clsx('col col--4')}></div>
        </div>
      </div>
    </section>
  );
}
