
import './App.css';
import Form from './componen/Form';

function App() {
  function kachalka(t) {
    console.log(t, "App");
    alert(t)
  }
  return (
    <div className="App">
     <Form inputType="text" x={kachalka}/>
     <Form inputType="password"/>
    </div>
  );
}

export default App;
