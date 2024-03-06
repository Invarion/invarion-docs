import React from "react";

import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";

import { Divider } from "../components/Divider";
import { PopularDocsLinks } from "../components/PopularDocsLinks";
import WhatsNewSection from "../components/WhatsNew";
import { HomepageHeader } from "../components/HomepageHeader";

export default function Home(): JSX.Element {
  return (
    <Layout description="Help Venter for Invarion products.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Divider />
        <PopularDocsLinks />
        <Divider />
        <WhatsNewSection />
      </main>
    </Layout>
  );
}
