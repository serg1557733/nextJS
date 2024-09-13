'use client';

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1> Oh... {error.message}</h1>;
}
