import { Metadata } from 'next';

import React from 'react';
import { PostType } from '../page';

type PostProps = {
  params: {
    id: string;
  };
};

export const metadata: Metadata = {
  title: 'Post',
};

async function getData(id: string) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    return response.json();
  } catch {
    throw new Error(`error load post`);
  }
}

export default async function Post({ params: { id } }: PostProps) {
  const post: PostType = await getData(id);
  if (!post) return;
  return (
    <div className="text-center">
      <div className="bg-slate-700 m-2b [*&]:border">
        <span>{post.id}</span>
        <p>{post.title}</p>
        <p>{post.userId}</p>
        <p>{post.completed ? 'Hurra' : 'Scheisse'}</p>
      </div>
    </div>
  );
}
