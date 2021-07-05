import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Article.module.css";
import "../../App.css";
import { Button } from "../index";

interface IParams {
  id: string;
}

interface IArticle {
  title: string;
  body: string;
  id: number;
  userId: number;
}

interface IComment {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

export default function Article() {
  const commentFieldRef = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  const userFieldRef = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  const { id } = useParams<IParams>();
  const [article, setArticle] = useState<IArticle>({
    title: "",
    body: "",
    id: 0,
    userId: 0,
  });
  const [comments, setComments] = useState<IComment[]>([
    { body: "", email: "", id: 0, name: "", postId: 0 },
  ]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const addComment = () => {
    commentFieldRef.current.value = "";
  };

  useEffect(() => {
    (async () => {
      try {
        const articleRes = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const commentsRes = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        );
        setArticle(articleRes.data);
        setComments(commentsRes.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>czekaj</p>
      ) : (
        <section className="container">
          <h1>{article.title}</h1>
          <p className={styles.body}>{[...Array(6)].map(() => article.body)}</p>
          <div className={styles.commentsContainer}>
            <h2>Komentarze</h2>
            <input
              placeholder="Nazwa użytkownika"
              type="text"
              name="comment"
              id="comment"
              ref={userFieldRef}
              className={styles.userField}
            />
            <input
              placeholder="Treść komentarza"
              type="text"
              name="comment"
              id="comment"
              ref={commentFieldRef}
              className={styles.commentField}
            />
            <div className={styles.button}>
              <Button
                value="Dodaj komentarz"
                backgroundColor="#9DD6FF"
                handleClick={addComment}
              />
            </div>

            <div className={styles.comments}>
              {comments.map((a) => (
                <div className={styles.comment}>
                  <h3 className={styles.name}>{a.name}</h3>
                  <p className={styles.commentBody}>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
