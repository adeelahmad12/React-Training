import { Link } from "react-router-dom";
import posts from "../../data/data.json";

export default function PostList() {
    return (
        <div>
            <>
            <h1>Post List</h1>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <Link to={`/posts/${post.id}`}>{post.title}</Link>
                        <p>{post.content}</p>    
                    </li>
                ))}
            </ul>
            </>
        </div>
    );
}