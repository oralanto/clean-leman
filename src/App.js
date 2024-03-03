import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main></main>
      <Footer />
    </div>
  );
};

export default App;
