import React from "react";
import styles from "./styles.module.css";
export function Layout({
  body,
  title,
  footer,
  onClose,
}: {
  title: string;
  onClose: () => void;
  body: React.ReactNode;
  footer: React.ReactNode;
}) {
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className={styles.root}>
      <div className={styles.overlay} onClick={handleClose}></div>
      <div className={styles.modal}>
        <button className={styles.close} onClick={handleClose}>
          x
        </button>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.body}>{body}</div>
        <div className={styles.footer}>{footer}</div>
      </div>
    </div>
  );
}
