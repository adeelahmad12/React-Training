import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page</p>
      <Link to="/about">Go to About Page</Link>
    </>
  );
}
