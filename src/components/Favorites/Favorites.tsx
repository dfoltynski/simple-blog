import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import axios from "axios";
import "../../App.css";
import { ArticleTile } from "../index";
import styles from "./Favorites.module.css";

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
      let res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${articleID}`
      );

      setFavoriteArticles((prevState) => [...prevState, res.data]);
    });
  }, []);
  return (
    <div className={`container ${styles.favoriteArticles}`}>
      {favoriteArticles.map((article) => (
        <ArticleTile
          title={article.title}
          content={article.body}
          id={article.id}
          key={article.id}
        />
      ))}
    </div>
  );
}
