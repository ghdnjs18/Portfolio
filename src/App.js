import React from "react";
import { About, Contact, Home, Projects, Skills } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* home */}
      <Home />
      {/* about */}
      <About />
      {/* skils */}
      <Skills />
      {/* projects */}
      <Projects />
      {/* contact */}
      <Contact />
    </div>
  );
}

export default App;
