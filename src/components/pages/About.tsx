import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();

    const onBackClick = () => {
        navigate('/');
    }
    return (
        <>
        <h1>About Page</h1>
        <p>Welcome to the About Page</p>
        <button onClick={onBackClick}>Go to Home Page</button>
        </>
    )
}