import "./App.css";
import Animal from "./components/animal";
function App() {
  return (
    <div className="App">
      <Animal animal="dog" age="4" color="red" isHas/>
      <Animal animal="cat" age="5" color="blue"/>
      <Animal animal="horse" age="6" color="orange"/>
    </div>
  );
}

export default App;
