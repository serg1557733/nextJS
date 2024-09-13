import { usePosts } from '@/store';
import React, { useState } from 'react';

export default function SearchPost() {
  const [search, setSearch] = useState('');

  const getPostBySearch = usePosts((state) => state.getPostBySearch);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await getPostBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="px-2 m-2"
        type="search"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit"> Search </button>
    </form>
  );
}
