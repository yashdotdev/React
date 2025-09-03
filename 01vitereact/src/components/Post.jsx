import PostBody from "./PostBody";
import PostTitle from "./PostTitle";


export default function Post({ title, body }) {
  return (
    <>
      <PostTitle title={title} />
      <PostBody body={body} />
    </>
  );
}
