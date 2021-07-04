import axios from "axios";
import React, { useEffect } from "react";
import styles from "./ArticlesList.module.css";

export default function ArticlesList() {
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(res);
      } catch (error) {}
    })();
  }, []);

  return <section className={styles.articlesList}></section>;
}
