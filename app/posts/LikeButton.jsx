"use client";
import React, { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState();
  return (
    <button onClick={() => setLiked(!liked)}>{liked ? `🧡` : `🤍`}</button>
  );
}
