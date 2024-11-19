import styles from "./styles.module.css";

export function Layout({
  cards,
  createForm,
  title,
  isLoading,
}: {
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
      <div className={styles.list}>{cards}</div>
    </div>
  );
}
