import { useState } from "react";



import "./App.css";

function App() {
  return (
    <div
      className=" min-h-screen
bg-gradient-to-b from-gray-400 to-gray-500
"
    >
      <h1
        className="h-32 
      bg-gray-600 
      text-center
      text-6xl
      text-primary
      my-16 "
      >
        This is tailwind practise
      </h1>
      <div className="text-left">
        <button
          className="h-20 
           w-[500px]

      rounded-t-[50px]
      rounded-b-[50px]
      text-lg

      transition ease-in-out delay-500 bg-blue-500 hover:-translate-y-1 hover:scale-130 hover:bg-indigo-500
      hover:border-8 border-green
      duration-300 
      "
        >
          this is a button{" "}
        </button>
        <button
          className="h-20 
           w-[500px]
          
          bg-blue-600 
      rounded-t-[50px]
      rounded-b-[50px]
      text-lg
      border-8 border-red-600

      "
        >
          this is a button{" "}
        </button>
        <button className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ...">
          Hover me
        </button>
      </div>
    </div>
  );
}

export default App;
