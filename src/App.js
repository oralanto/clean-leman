import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Domicile from "./pages/Domicile";
import Voiture from "./pages/Voiture";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <div className="App flex flex-col justify-between h-screen w-screen">
      <Router>
        <Header />
        <main className="w-full font-mono">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/service-domicile" element={<Domicile />} />
            <Route path="/service-voiture" element={<Voiture />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
