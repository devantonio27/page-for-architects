import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

// UTILS
import ScrollToTop from "./utils/ScrollTop";
import { AppContext } from "./contexts/AppContext";

function App() {
  const appContext = useContext(AppContext);

  if (appContext.loading) {
    return <LoadingSpinner />;
  }
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
