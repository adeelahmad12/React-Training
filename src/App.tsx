import { BrowserRouter } from "react-router-dom";
import Routing from "./routing/Routing";
import Navbar from "./components/molecule/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routing />
    </BrowserRouter>
  );
}

export default App;
