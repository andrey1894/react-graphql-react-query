import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import NavBar from "./components/common/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
