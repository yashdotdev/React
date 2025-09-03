import "./App.css";
import MyButton from "./components/MyButton";
import { useState } from "react";
import ShoppingList from "./components/ShoppingList";

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <div className="App">
        <h1>Counters that update separately</h1>

        <MyButton count={count} onClick={handleClick} />
        <br />
        <MyButton count={count} onClick={handleClick} />
      
        <ShoppingList/>
      </div>
    </>
  );
}