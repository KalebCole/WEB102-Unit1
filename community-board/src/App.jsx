import { useState } from "react";
import "./App.css";
import Event from "./components/Event";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>WVU Tech Association for Computing Machinery (ACM) Events</h1>
        <Event image="public/icpc.png" title="International Collegiate Programming Contest (ICPC)" time="Feb 26-27: Leaving at 5:00 PM" location="Virginia Tech: Blacksburg, VA 24061" />
      </div>
    </>
  );
}

export default App;
