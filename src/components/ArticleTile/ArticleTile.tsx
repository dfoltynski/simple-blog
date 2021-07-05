import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../actions/favoritesAction";
import { activateHeart, deactivateHeart } from "../../actions/heartActions";
import styles from "./ArticleTile.module.css";
import { Button } from "../index";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RootState } from "../../reducers";

interface IProps {
  title: string;
  content: string;
  id: number;
  favorite?: boolean;
}

export default function ArticleTile({ title, content, id }: IProps) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  const [randomDate, setRandomDate] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(false);

  const heartRef = useRef<HTMLSpanElement>(document.createElement("span"));

  const generateRandomDate = (start: Date, end: Date): string => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
      .toISOString()
      .split("T")[0]
      .trim();
  };

  const handleClick = () => {
    console.log(heartRef.current.classList.contains("active"));

    if (heartRef.current.classList.contains("active")) {
      heartRef.current.classList.remove("active");
      console.log(heartRef.current.childNodes[0]);
      setFavorite(false);
      dispatch(removeFavorite(id));
    } else {
      heartRef.current.classList.add("active");
      console.log(heartRef.current.children[0]);
      setFavorite(true);

      dispatch(addFavorite(id));
    }
  };

  useEffect(() => {
    setRandomDate(generateRandomDate(new Date(2010, 0, 1), new Date()));
    favorites.map((articleID) => {
      if (articleID == id) {
        setFavorite(true);
      }
    });
  }, []);

  return (
    <div className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.content}>{content}</p>
      <div className={styles.footer}>
        <span
          style={{ alignSelf: "center" }}
          onClick={handleClick}
          ref={heartRef}
          id={id.toString()}
        >
          {/* {favorites.map((favoriteArticle) =>
            (favoriteArticle || -1) == id ? (
              <AiFillHeart className={styles.favorite} color="#FFA39D" />
            ) : (
              <AiFillHeart className={styles.favorite} color="#D6D6D6" />
            )
          )} */}
          <AiFillHeart
            className={styles.favorite}
            color={favorite ? "#FFA39D" : "#D6D6D6"}
          />
          {/* <AiFillHeart className={styles.favorite} color="#D6D6D6" /> */}
        </span>
        <p className={styles.articleDate}>{randomDate}</p>
        <Link to={`/artykul/${id}`}>
          <Button value="Zobacz cały artykuł" backgroundColor="#FDFF9D" />
        </Link>
      </div>
    </div>
  );
}
