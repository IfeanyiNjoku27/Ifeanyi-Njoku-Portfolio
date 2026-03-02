import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

//Routes
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
