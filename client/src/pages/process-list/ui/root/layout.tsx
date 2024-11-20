import React from "react";
import styles from "./styles.module.css";

export function Layout({
  cards,
  filters,
  createForm,
  title,
  isLoading,
}: {
  filters: React.ReactNode;
  createForm: React.ReactNode;
  cards: React.ReactNode;
  title: string;
  isLoading: boolean;
}) {
  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      {createForm}
      {filters}
      <div className={styles.list}>{cards}</div>
    </div>
  );
}
