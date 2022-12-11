import { ReactNode, useState } from "react";
import Results from "./Components/SearchResults/SearchResults";
import Searchbar from "./Components/Searchbar/Searchbar";
import Chooser from "./pages/Chooser";
import Welcome from "./pages/Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/choose" element={<Chooser />} />
      </Routes>
    </Router>
  );
}

export default App;
