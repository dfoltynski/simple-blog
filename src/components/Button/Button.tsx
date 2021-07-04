import React, { useEffect, useRef } from "react";
import styles from "./Button.module.css";

interface IProps {
  value: string;
  backgroundColor: string;
}

export default function Button({ value, backgroundColor }: IProps) {
  const buttonRef = useRef<HTMLButtonElement>(document.createElement("button"));
  useEffect(() => {
    buttonRef.current.style.setProperty("--background", backgroundColor);
  });

  return (
    <button ref={buttonRef} className={styles.button}>
      {value}
    </button>
  );
}
