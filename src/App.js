import "./App.css";
import { About, Home } from "./components";

function App() {
  return (
    <div className="App">
      {/* home */}
      <Home />
      {/* about */}
      <About />
      {/* skils */}
      <div>skils</div>
      {/* projects */}
      <div>projects</div>
      {/* contact */}
      <div>contact</div>
    </div>
  );
}

export default App;
