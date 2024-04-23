import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const onBackClick = () => {
    navigate("/");
  };
  return (
    <>
      <h1>404 Page</h1>
      <p>Oops Page Not Found</p>
      <button onClick={onBackClick}>Go to Home Page</button>
    </>
  );
}
