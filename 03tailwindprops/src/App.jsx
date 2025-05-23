/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Card from "./Components/Card.jsx";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "yash",
    age: 21,
  };

  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind is working! 🎉
      </h1>

      <div class="Cards">
        <Card username="chaiaurcode" btnText="click me" />
        <Card username="hitesh" />
      </div>
    </>
  );
}

export default App;
