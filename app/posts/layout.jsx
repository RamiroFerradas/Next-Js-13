import React from "react";
import { Counter } from "./Counter";

export default async function PostsLayout({ children }) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      <h1>Este es el Layout de los posts</h1>
      <Counter />
      {children}
    </div>
  );
}
