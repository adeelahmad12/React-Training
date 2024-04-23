import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap flex-col">
      <ul className="flex flex-wrap">
        <li className="mr-5">
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
