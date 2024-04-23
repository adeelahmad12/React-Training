import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../Button/Button";
import InputField from "../InputField/InputField";
import blogPosts from "../../data/data.json";

export default function Add() {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [posts, setPosts] = useState<any[]>([]);
   
    const handleSubmit = (event: any) => {
        event.preventDefault();
        addPost();
    };

    useEffect(() => {
        setPosts(blogPosts);
    } , [title && author && content]);

    const addPost = () => {
        if (!title || !author || !content) {
            alert('All fields are mandatory');
            return;
        }
        const newPost = {
            id: posts.length + 1,
            title: title,
            author: author,
            content: content,
        };
        posts.push(newPost);
        setPosts(posts);
        navigate('/');
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'author') {
            setAuthor(value);
        } else if (name === 'content') {
            setContent(value);
        }
    };

    const onBackClick = () => {
      navigate('/');
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Enter Post Title"
          name="title"
          id="title"
          value={title}
          onchange={handleChange}
        />
        <br />
        <InputField
          type="text"
          placeholder="Enter Post Author"
          name="author"
          id="author"
          value={author}
          onchange={handleChange}
        />
        <br />
        <InputField
          type="text"
          placeholder="Enter Post Content"
          name="content"
          id="content"
          value={content}
          onchange={handleChange}
        />
        <br />
        <Button text="Add Post" type="submit" />
        <Button text="Go Back" type="button" onClick={onBackClick} />
      </form>
    </>
  );
}
