import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/serice-domicile" element={<Domicile />} />
          <Route path="/serice-voiture" element={<Voiture />} />
          <Route path="/serice-tarifs" element={<Tarifs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
