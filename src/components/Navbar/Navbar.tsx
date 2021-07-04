import React, { useRef } from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const topBunRef = useRef<HTMLDivElement>(document.createElement("div"));
  const meatRef = useRef<HTMLDivElement>(document.createElement("div"));
  const bottomBunRef = useRef<HTMLDivElement>(document.createElement("div"));

  const transformHamburger = () => {
    meatRef.current.classList.toggle(styles.hide);
    if (meatRef.current.classList.contains(styles.hide)) {
      topBunRef.current.style.transform = `translateY(7px) rotate(45deg)`;
      bottomBunRef.current.style.transform = `translateY(-7px) rotate(-45deg)`;
    } else {
      topBunRef.current.style.transform = `none`;
      bottomBunRef.current.style.transform = `none`;
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={transformHamburger}>
        <div ref={topBunRef} className={styles.bar}></div>
        <div ref={meatRef} className={styles.bar}></div>
        <div ref={bottomBunRef} className={styles.bar}></div>
      </div>
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
