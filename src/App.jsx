import "./App.scss";
import { GermanNouns } from "./components/GermanNouns";

function App() {
  return (
    <div className="App">
      <h1>Test Site</h1>
      <GermanNouns article="das" />
      <GermanNouns article="der" />
      <GermanNouns article="die" />
    </div>
  );
}
export default App;
