import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import NotFound from "../components/pages/NotFound";
import PostList from "../components/pages/PostList";
import PostDetails from "../components/pages/PostDetails";
import Add from "../components/pages/Add";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} >
        <Route index element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetails />} />
      </Route>
      <Route path="/add" element={<Add />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
