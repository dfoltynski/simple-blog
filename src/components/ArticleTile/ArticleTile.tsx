import React, { useEffect, useState } from "react";
import styles from "./ArticleTile.module.css";
import { Button } from "../index";
import { AiFillHeart } from "react-icons/ai";

interface IProps {
  title: string;
  content: string;
}

export default function ArticleTile({ title, content }: IProps) {
  const [randomDate, setRandomDate] = useState<string>("");

  const generateRandomDate = (start: Date, end: Date): string => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
      .toISOString()
      .split("T")[0]
      .trim();
  };

  useEffect(() => {
    setRandomDate(generateRandomDate(new Date(2010, 0, 1), new Date()));
  }, []);

  return (
    <div className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{content}</p>
      <div className={styles.footer}>
        <AiFillHeart className={styles.favorite} />
        <p className={styles.articleDate}>{randomDate}</p>
        <Button value="Zobacz cały artykuł" backgroundColor="#FDFF9D" />
      </div>
    </div>
  );
}
