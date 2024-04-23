import { Link } from "react-router-dom";

export default function Navbar() {
    const five = 5;
  return (
    <nav className="flex flex-wrap flex-col">
      <ul className="flex flex-wrap">
        <li className={`mr-${five}`}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
