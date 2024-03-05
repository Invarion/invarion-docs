import React from "react";
import clsx from "clsx";

export interface FeatureCardProps {
  title: string;
  content: JSX.Element;
}

export const FeatureCard = ({ title, content }: FeatureCardProps) => {
  return (
    <div className={clsx("col col--5 card")}>
      <h3 className="text--center">{title}</h3>
      <div className={clsx("x padding-horiz--md")}>
        <div>{content}</div>
      </div>
    </div>
  );
};
