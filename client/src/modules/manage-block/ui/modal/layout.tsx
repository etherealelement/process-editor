import React from "react";
import styles from "./styles.module.css";
export function Layout({
  body,
  title,
  footer,
}: {
  title: string;
  body: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className={styles.root}>
      <div className={styles.modal}>
        <button className={styles.close}>x</button>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
}
