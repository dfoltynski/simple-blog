import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./ArticlesList.module.css";
import { ArticleTile } from "../index";
import "../../App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../reducers";

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

  // const favorites = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        res.data.forEach((item: any) => {
          item.favorite = false;
        });
        setArticles(res.data);
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
