import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import NotFound from "../components/pages/NotFound";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
