import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

import { LinksList } from "../LinksList";
import { SectionTitle } from "../SectionTitle";

export const PopularDocsLinks = ({}): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  const { popularDocsLinks }: any = siteConfig.customFields;

  return (
    <section className={styles["links-container"]}>
      <div className="container">
        <SectionTitle text="Popular Docs" />
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className={clsx("col col--5 ")}>
            <LinksList
              links={popularDocsLinks.filter((_, index) => index % 2 === 0)}
            />
          </div>
          <div className={clsx("col col--5")}>
            <LinksList
              links={popularDocsLinks.filter((_, index) => index % 2 !== 0)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
