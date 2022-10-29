import logo from './logo.svg';
import './App.css';
import Section1 from './Section1'
import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Section1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
