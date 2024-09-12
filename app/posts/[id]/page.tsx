import React from 'react';

type PostProps = {
  params: {
    id: string;
  };
};

export default function Post({ params: { id } }: PostProps) {
  return (
    <div className="text-center">
      <p>Post {id}</p>
    </div>
  );
}
