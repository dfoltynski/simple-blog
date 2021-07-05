import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import "../../App.css";
import { ArticleTile } from "../index";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";

interface IArticle {
  title: string;
  body: string;
  userId: number;
  id: number;
}

export default function Favorites() {
  const favorites = useSelector((state: RootState) => state.favorites);

  const [favoriteArticles, setFavoriteArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    favorites.forEach(async (articleID) => {
      let res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${articleID}`,
        { method: "GET" }
      );

      let favorite = await res.json();

      setFavoriteArticles((prevState) => [...prevState, favorite]);
    });
  }, []);
  return (
    <>
      <div className={`container ${styles.favoriteArticles}`}>
        {favoriteArticles.length ? (
          favoriteArticles.map((article) => (
            <ArticleTile
              title={article.title}
              content={article.body}
              id={article.id}
              key={article.id}
            />
          ))
        ) : (
          <div className={styles.emptyContainer}>
            <div className={styles.info}>
              <h2 className={styles.infoTitle}>
                Twoja lista ulubionych postów jest niestety pusta
              </h2>
              <p className={styles.infoBody}>
                Możesz dodać post do ulubionych klikając w serduszko obok niego
              </p>
              <Link to="/">
                <h3>Przejdź do listy postów 😁</h3>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
