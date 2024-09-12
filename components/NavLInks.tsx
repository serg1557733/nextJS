import Link from 'next/link';

export function NavLinks() {
  return (
    <nav className="flex justify-around [&_*]:rounded-full p-5 [&_*]:px-4 [&_*]:bg-slate-900">
      <Link href="/">Home</Link>
      <Link href="/posts/">Posts</Link>
      <Link href="/forum">Forum</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
