import { useState } from "react";
import "./App.css";
import Event from "./components/Event";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>WVU Tech Association for Computing Machinery (ACM) Events</h1>
        <Event image="" title="test" time="testing" location="" />
      </div>
    </>
  );
}

export default App;
