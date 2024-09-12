import Link from 'next/link';
import React from 'react';

async function getData() {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/`,
      {
        next: {
          revalidate: 20,
        },
      }
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export type PostType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function Posts() {
  const posts: PostType[] = await getData();

  return (
    <div className="text-center">
      <h1>Posts main page</h1>
      <ul>
        {posts.map((post, i) => (
          <li
            key={i + post.id}
            className="flex [&_*]:rounded-full m-auto [&_*]:p-2 w-fit [*&]:border [&_*]:bg-slate-900"
          >
            <span>{post.id}</span>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
