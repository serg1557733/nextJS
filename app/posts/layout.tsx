import Link from 'next/link';
import React, { ReactNode } from 'react';

export default function PostLayout({ children }: { children: ReactNode }) {
  return (
    <section className="w-1/2 m-auto">
      <div className="text-center bg-slate-600 font-mono p-2">
        <ul className="flex justify-around [&_*]:rounded-full [&_*]:px-4 [&_*]:bg-slate-900">
          <li>
            <Link href="/posts/new"> Create new post</Link>
          </li>
          <li>
            <Link href={`/posts/`}> Posts</Link>
          </li>
        </ul>
      </div>
      {children}
    </section>
  );
}
