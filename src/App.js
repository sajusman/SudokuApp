import './App.css';
import Sudoku from "./Components/Sudoku";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sudoku</h1>
      </header>
      <div>
        <Sudoku></Sudoku>
      </div>
    </div>
  );
}

export default App;
