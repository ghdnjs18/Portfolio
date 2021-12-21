import "./App.css";
import { About, Contact, Home, Projects, Skills } from "./components";

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
