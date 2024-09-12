export default function NewPost({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>New Post Page {id} </div>;
}
