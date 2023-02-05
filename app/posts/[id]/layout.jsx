"use client";
import Link from "next/link";
import React, { use, useState } from "react";

const fetchSinglePost = async (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default function Post({ children, params }) {
  const { id } = params;
  const { title, body } = use(fetchSinglePost(id));

  return (
    <article>
      <h1>{title}</h1>
      <p>{body}</p>
      <Link href={`/posts/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
}
