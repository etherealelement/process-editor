import styles from "./styles.module.css";

export function Layout({
  onQChange,
  q,
}: {
  q: string;
  onQChange: (name: string) => void;
}) {
  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        placeholder="process name search..."
        type="text"
        name="name"
        value={q}
        onChange={(e) => onQChange(e.target.value)}
        required={true}
      />
    </div>
  );
}
