import React from "react";
import "../../App.css";
import styles from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div className={styles.emptyContainer}>
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>Nie ma takiej strony</h2>
          <Link to="/">
            <h3>Wróć do domu 😁</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
