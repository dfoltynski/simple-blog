import React, { useEffect, useRef } from "react";
import styles from "./Button.module.css";

interface IProps {
  value: string;
  backgroundColor: string;
  handleClick?: () => void;
}

export default function Button({
  value,
  backgroundColor,
  handleClick,
}: IProps) {
  const buttonRef = useRef<HTMLButtonElement>(document.createElement("button"));
  useEffect(() => {
    buttonRef.current.style.setProperty("--background", backgroundColor);
  });

  return (
    <button ref={buttonRef} className={styles.button} onClick={handleClick}>
      {value}
    </button>
  );
}
