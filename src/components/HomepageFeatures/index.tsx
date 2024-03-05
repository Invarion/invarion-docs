import React from "react";
import styles from "./styles.module.css";
import { FeatureCard } from "../FeatureCard";
import { LinksList } from "../LinksList";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function HomepageFeatures(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { faqsLinks }: any = siteConfig.customFields;
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <FeatureCard
            title="Getting Started"
            content={<LinksList links={faqsLinks} />}
          />
          <FeatureCard title="FAQs" content={<LinksList links={faqsLinks} />} />
        </div>
      </div>
    </section>
  );
}
