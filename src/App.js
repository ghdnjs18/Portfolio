import "./App.css";
import { About, Contact, Home, Projects, Skils } from "./components";

function App() {
  return (
    <div className="App">
      {/* home */}
      <Home />
      {/* about */}
      <About />
      {/* skils */}
      <Skils />
      {/* projects */}
      <Projects />
      {/* contact */}
      <Contact />
    </div>
  );
}

export default App;
