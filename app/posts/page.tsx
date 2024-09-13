'use client';

import SearchPost from '@/components/SearchPost';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) throw new Error(`error load post`);
  return response.json();
}

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);

  // const posts: PostType[] = getData();

  console.log(posts);

  useEffect(() => {
    getData()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="text-center">
      <h1>Posts main page</h1>
      <SearchPost onSearch={setPosts} />

      {loading ? (
        <h2 className="bg-green-400 ">Loading</h2>
      ) : (
        <ul>
          {posts &&
            posts.map((post, i) => (
              <li
                key={i + post.id}
                className="flex [&_*]:rounded-full m-auto [&_*]:p-2 w-fit [*&]:border [&_*]:bg-slate-900"
              >
                <span>{post.id}</span>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
