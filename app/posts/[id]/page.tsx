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

const getData = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) throw new Error(`error load post`);
  return response.json();
};

export default async function Post({ params: { id } }: PostProps) {
  const post: PostType = await getData(id);
  if (!post) return <>Not found posts</>;
  return (
    <div className="text-center">
      <div className="bg-slate-700 m-2b [*&]:border">
        <span>{post.id}</span>
        <p>{post.title}</p>
        <p>{post.userId}</p>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
