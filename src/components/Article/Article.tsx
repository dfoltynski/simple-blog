import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import styles from "./Article.module.css";
import "../../App.css";
import { Button } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { addComment, deleteComment } from "../../actions/commentsAction";
import { RootState } from "../../reducers";

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
  name?: string;
  postId?: number;
  isUserAnAuthor?: boolean;
}

export default function Article() {
  const dispatch = useDispatch();
  const userComments = useSelector((state: RootState) => state.comments);
  const commentFieldRef = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  const userFieldRef = useRef<HTMLInputElement>(
    document.createElement("input")
  );
  const commentRef = useRef<HTMLDivElement>(document.createElement("div"));
  const userRef = useRef<HTMLHeadingElement>(document.createElement("h3"));

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

  const handleAddComment = () => {
    const user = userFieldRef.current.value;
    const content = commentFieldRef.current.value;

    dispatch(addComment({ email: user, body: content, id: Number(id) }));

    commentFieldRef.current.value = "";
    userFieldRef.current.value = "";
  };

  useEffect(() => {
    (async () => {
      try {
        const articleRes = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
          { method: "GET" }
        );
        const commentsRes = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
          {
            method: "GET",
          }
        );

        const article = await articleRes.json();
        const comments = await commentsRes.json();
        setArticle(article);
        setComments(comments);
        setIsLoading(false);

        userComments.forEach((userComment) => {
          if (Number(userComment.id) == Number(id)) {
            setComments([
              {
                email: userComment.email,
                body: userComment.body,
                id: userComment.id,
                isUserAnAuthor: true,
              },
              ...comments,
            ]);
          }
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    userComments.forEach((userComment) => {
      if (Number(userComment.id) == Number(id)) {
        setComments([
          {
            email: userComment.email,
            body: userComment.body,
            id: userComment.id,
            isUserAnAuthor: true,
          },
          ...comments,
        ]);
      }
    });
  }, [userComments]);

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
              name="user"
              id="user"
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
                handleClick={handleAddComment}
              />
            </div>

            <div className={styles.comments}>
              {comments.map((comment) => (
                <div className={styles.comment} ref={commentRef}>
                  <h3 className={styles.name} ref={userRef}>
                    {comment.email.split("@")[0]}
                  </h3>
                  <p className={styles.commentBody}>{comment.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
