import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import TermsPrivacity from "../src/pages/terms-privacity/TermsPrivacity";
import FindMe from "../src/pages/find-me/FindMe";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/termsprivacity" element={<TermsPrivacity />} />
        <Route path="/findme" element={<FindMe />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
