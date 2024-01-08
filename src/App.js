import logo from "./logo.svg";
import "./App.css";
import { Clock } from "./components/Clock";
import { mainStyles } from "./components/Clock/styles";

function App() {
  return (
    <div style={mainStyles}>
      <Clock />;
    </div>
  );
}

export default App;
