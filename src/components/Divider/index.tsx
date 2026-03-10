import React from 'react';
import styles from './styles.module.css';

export const Divider: React.FC = () => {
  return (
    <div className="container">
      <hr className={styles.divider} />
    </div>
  );
};
