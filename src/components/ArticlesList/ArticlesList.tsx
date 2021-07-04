import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ArticlesList.module.css";
import { ArticleTile } from "../index";

interface IArticle {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export default function ArticlesList() {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(res.data);
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className={styles.articlesList}>
      {articles.map((article) => (
        <ArticleTile title={article.title} content={article.body} />
      ))}
    </section>
  );
}
