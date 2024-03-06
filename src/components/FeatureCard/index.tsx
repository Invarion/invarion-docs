import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export interface FeatureCardProps {
  title: string;
  content: JSX.Element;
}

export const FeatureCard = ({ title, content }: FeatureCardProps) => {
  return (
    <div className={clsx("card", styles["feature-card"])}>
      <h2 className={clsx(styles["title"])}>{title}</h2>
      <div className={clsx("padding-horiz--md")}>
        <div>{content}</div>
      </div>
    </div>
  );
};
