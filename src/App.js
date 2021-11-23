import "./App.css";
import Dashboard from "./components/dashboard";
import Msg from "./components/props";
import Counter from "./components/status";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard></Dashboard>
        <Msg name="Juan"></Msg>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
