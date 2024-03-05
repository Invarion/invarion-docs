import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";

import styles from "./index.module.css";
import { Divider } from "../components/Divider";
import { PopularDocsLinks } from "../components/PopularDocsLinks";
import WhatsNewSection from "../components/WhatsNew";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

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
