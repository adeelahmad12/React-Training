import { useParams, useNavigate } from "react-router-dom";
import Posts from "../../data/data.json";
import { useEffect } from "react";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = Posts.find((post) => post.id.toString() === id);

  const onBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!post) {
      navigate("/NotFound");
    }
  }, []);

  return (
    <>
      <h1>Post Detail</h1>
      {post && (
        <>
          <p>Post ID : {post.id}</p>
          <h2>Post Title : {post.title}</h2>
          <p>Post Author : {post.author}</p>
          <p>Post Content : {post.content}</p>
        </>
      )}
      <br />
      <button onClick={onBackClick}>Go Back</button>
    </>
  );
}
