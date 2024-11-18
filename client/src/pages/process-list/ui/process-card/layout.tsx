import styles from "./styles.module.css";

export function Layout({
  onDelete,
  name,
}: {
  name: string;
  onDelete?: () => void;
}) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{name}</div>
      <button className={styles.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
