import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Environment from "./components/Environment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
      <div className="App">
        <Header />
        <About />
        <Portfolio />
        <Skills />
        <Environment />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
