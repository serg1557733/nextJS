import { PostType } from '@/app/posts/page';

export async function getData() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  if (!response.ok) throw new Error(`error load post`);
  return response.json();
}

export async function getPostBy(search: string): Promise<PostType[]> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${search}`
  );
  if (!response.ok) throw new Error(`error load post`);
  return response.json();
}
