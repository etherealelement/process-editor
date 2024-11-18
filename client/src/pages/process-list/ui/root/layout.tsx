import styles from "./styles.module.css";

export function Layout({
  cards,
  createForm,
  title,
}: {
  createForm: React.ReactNode;
  cards: React.ReactNode;
  title: string;
}) {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>{title}</h1>
      {createForm}
      <div className={styles.list}>{cards}</div>
    </div>
  );
}
