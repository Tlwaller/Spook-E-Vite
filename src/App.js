import "./App.css";
import Hero from "./components/Hero";
import RSVPForm from "./components/RSVPForm";
import Curtain from "./components/Curtain";

function App() {
  return (
    <div className="App" id="App">
      <Curtain />
      <Hero />
      <RSVPForm />
    </div>
  );
}

export default App;
