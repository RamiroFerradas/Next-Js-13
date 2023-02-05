import Link from "next/link";
import React, { use } from "react";
import styles from "./comments.module.css";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default function Post({ params }) {
  const { id } = params;
  const comments = use(fetchComments(id));

  return (
    <ul className={styles.comments}>
      {comments?.map(({ name, body, id }) => (
        <li key={id}>
          <h2>{name}</h2>
          <small>{body}</small>
        </li>
      ))}
    </ul>
  );
}
