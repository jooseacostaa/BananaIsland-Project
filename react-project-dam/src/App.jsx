import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import Projects from "../src/pages/Projects/Projects";
import TermsPrivacity from "../src/pages/TermsPrivacity/TermsPrivacity";
import FindMe from "../src/pages/FindMe/FindMe";

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
