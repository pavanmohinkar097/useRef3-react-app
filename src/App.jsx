import { useEffect, useReducer, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// useState 👑
// useEffect 👑

// useRef 🔥
// useReducer 🔥

/** Second use :
 */

const App = () => {
  const inputNameRef = useRef();
  const inputEmailRef = useRef();

  return (
    <main>
      <input ref={inputNameRef} type="text" placeholder="Name" />
      <br />
      <br />
      <input ref={inputEmailRef} type="email" placeholder="Email" />
      <br />
      <br />
      <div>
        <button
          onClick={() => {
            inputNameRef.current.focus();
          }}
        >
          Focus Name
        </button>
        <button
          onClick={() => {
            inputEmailRef.current.focus();
          }}
        >
          Focus Email
        </button>
      </div>
    </main>
  );
};

// const input = document.querySelector("input");
// input.focus();

// Named Export

export default App;
