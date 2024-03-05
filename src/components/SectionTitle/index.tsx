import React from "react";
import styles from "./styles.module.css";

export const SectionTitle: React.FC<{ text: string }> = ({ text }) => (
  <h2 className={styles["section-title"]}>{text}</h2>
);
