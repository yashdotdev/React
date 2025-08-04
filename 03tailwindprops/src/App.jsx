/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";

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

      <div className="Cards flex items-center gap-10">
        <Card username="chaiaurcode" btnText="click me" myObj={myObj} newArr={newArr}/>
        <Card username="hitesh" btnText="visit me"/>
      </div>
    </>
  );
}

export default App;
