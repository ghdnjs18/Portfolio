import "./App.css";
import { About, Home, Skils } from "./components";

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
      <div>projects</div>
      {/* contact */}
      <div>contact</div>
    </div>
  );
}

export default App;
