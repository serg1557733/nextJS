'use client';

import SearchPost from '@/components/SearchPost';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePosts } from '../../store/index';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Posts() {
  const [posts, getAllPosts, loading] = usePosts((state) => [
    state.posts,
    state.getData,
    state.loading,
  ]);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);
  return (
    <div className="text-center">
      <h1>Posts main page</h1>
      <div className="mx-auto my-2 p-2 border w-fit ">
        <SearchPost />
      </div>

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
