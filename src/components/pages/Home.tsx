import { Link, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
        <h1>Home Page</h1>
        <Link to="/add">Add Post</Link>
        <Outlet />
        </>
    )
}