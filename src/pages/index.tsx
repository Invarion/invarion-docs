import React from 'react';

import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';

import { PopularDocsLinks } from '../components/PopularDocsLinks';
import { HomepageHeader } from '../components/HomepageHeader';

export default function Home(): JSX.Element {
  return (
    <Layout description="Help Center for Invarion products.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <PopularDocsLinks />
      </main>
    </Layout>
  );
}
