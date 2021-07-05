import React, { useEffect, useState } from "react";
import { ArticleTile } from "../index";
import "../../App.css";

interface IArticle {
  title: string;
  body: string;
  userId: number;
  id: number;
  favorite: boolean;
}

export default function ArticlesList() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "GET",
        });

        const articles = await res.json();

        articles.forEach((item: any) => {
          item.favorite = false;
        });
        setArticles(articles);
        setLoaded(true);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="container">
      {loaded && (
        <>
          {" "}
          {articles.map((article) => (
            <ArticleTile
              title={article.title}
              content={article.body}
              id={article.id}
              key={article.id}
              favorite={article.favorite}
            />
          ))}
        </>
      )}
    </section>
  );
}
