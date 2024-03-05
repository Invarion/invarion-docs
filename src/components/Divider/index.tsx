import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export const Divider: React.FC = () => {
  return (
    <div className="container">
      <hr className={styles.divider} />
    </div>
  );
};
