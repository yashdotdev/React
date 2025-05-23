import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    if (counter <= 20) {
      // setCounter(counter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      setCounter((prevCounter) => prevCounter + 1);
      console.log("clicked", counter);
    }
  };

  const removeValue = () => {
    if (counter >= 0) {
      // setCounter(counter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <div className="buttons">
        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>remove value</button>
      </div>
    </>
  );
}

export default App;
