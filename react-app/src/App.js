import './App.css';
import React from "react";
import Title from "./Components/title";
import AddTodo from './Components/AddTodo';

function App() {
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;