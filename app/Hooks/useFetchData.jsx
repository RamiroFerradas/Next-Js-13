"use client";
import React, { useEffect, useState } from "react";

export default function useFetchData() {
  const [posts, setPosts] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const data = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        next: {
          revalidate: 60,
        },
      }).then((res) => res.json());
      setPosts(data);
    };
    fetchData()
      .then(() => setLoading(false))
      .catch(() => setLoading(true));
  }, []);

  return { posts, loading };
}
