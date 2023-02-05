"use client";

import useFetchData from "app/Hooks/useFetchData";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";

import LikeButton from "./LikeButton";

export default function ListOfPosts() {
  const { posts, loading } = useFetchData();
  const userOptions = [...new Set(posts?.map(({ userId }) => userId))];
  const [usersId, setUsersId] = useState([0]);

  const [postUser, setPostUser] = useState([]);

  useEffect(() => {
    if (parseInt(usersId) !== 0) {
      const postsFilter = posts?.filter(
        (ele) => ele.userId === parseInt(usersId)
      );
      setPostUser(postsFilter);
    } else {
      setPostUser(posts);
    }
  }, [usersId, posts]);

  const handleSelect = (e) => {
    setUsersId([e.target.value]);
  };

  if (loading) {
    return <h1>CARGANDO POSTS...</h1>;
  }

  return (
    <>
      <marquee>App diseñada por Ramiro Ferradas</marquee>
      <select onChange={(e) => handleSelect(e)}>
        <option value="0">Todos</option>

        {userOptions.map((ele) => (
          <option value={ele}>
            <span>Usuario {ele}</span>
          </option>
        ))}
      </select>
      {postUser?.map(({ title, body, id }) => (
        <article>
          <Link href={`/posts/[id]`} as={`/posts/${id}`}>
            <h2 key={id}>{title}</h2>
            <p>{body}</p>
          </Link>
          <LikeButton />
        </article>
      ))}
    </>
  );
}
