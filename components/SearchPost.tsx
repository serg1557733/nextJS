import { PostType } from '@/app/posts/page';
import React, { useState } from 'react';

type SearchProps = {
  onSearch: (posts: PostType[]) => void;
};

async function getpostBySearch(search: string): Promise<PostType[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  if (!response.ok) throw new Error(`error load post`);
  return response.json();
}

export default function SearchPost({ onSearch }: SearchProps) {
  const [search, setSearch] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const posts = await getpostBySearch(search);
    onSearch(posts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit"> Search </button>
    </form>
  );
}
