import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Lesson from "./pages/Lesson.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Copyright from "./pages/Copyright.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lektion" element={<Lesson />} />
          <Route path="/projekt" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/copyright" element={<Copyright />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
