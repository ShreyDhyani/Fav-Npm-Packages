import Chooser from "./pages/Chooser";
import Welcome from "./pages/Welcome";
import Test from "./pages/Test/Test";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Test />} /> */}
        <Route path="/" element={<Welcome />} />
        <Route path="/choose" element={<Chooser />} />
      </Routes>
    </Router>
  );
}

export default App;
