import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>Lista wszystkich postów</li>
        <li>Twoje ulubione posty</li>
      </ul>
    </nav>
  );
}
