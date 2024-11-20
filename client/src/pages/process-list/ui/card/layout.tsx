import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export function Layout({
  onDelete,
  name,
  id,
}: {
  id: string;
  name: string;
  onDelete?: () => void;
}) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{name}</div>
      <Link className={styles.link} to={`/process/${id}`}></Link>
      <button className={styles.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}
