import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  const [color, setColor] = useState("pink");

  // function changeColor(color){
  //   setColor(color)
  // }

  return (
    <div
      className="w-full h-screen duration-200 bg-pink-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl" style={{backgroundColor:"pink"}}>
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-blue-300" style={{backgroundColor:"red"}}
          >
            RED
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-blue-300" style={{backgroundColor:"blue"}}
          >
            BLUE
          </button>
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-blue-300" style={{backgroundColor:"yellow"}}
          >
            YELLOW
          </button>
          <button
            onClick={() => {
              setColor("olive");
            }}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-blue-300" style={{backgroundColor:"olive"}}
          >
            OLIVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
