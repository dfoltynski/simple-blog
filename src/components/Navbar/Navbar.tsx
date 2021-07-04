import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link to="/">Lista wszystkich postów</Link>
        </li>
        <li className={styles.link}>
          <Link to="/ulubione">Twoje ulubione posty</Link>
        </li>
      </ul>
    </nav>
  );
}
