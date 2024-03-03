import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Domicile from "./pages/Domicile";
import Voiture from "./pages/Voiture";
import Tarifs from "./pages/Tarifs";
import About from "./pages/About";
// import Contact from "./pages/Contact";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/service-domicile" element={<Domicile />} />
            <Route path="/service-voiture" element={<Voiture />} />
            <Route path="/service-tarifs" element={<Tarifs />} />
            <Route path="/a-propos" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
