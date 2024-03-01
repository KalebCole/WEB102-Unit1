import { useState } from "react";
import "./App.css";
import Event from "./components/Event";
import events from "./events.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="heading">
          <img src="bear.png" alt="" />
          <h1>WVU Tech Association for Computing Machinery (ACM) Events</h1>
        </div>

        <div className="Events">
          {events.map((event, index) => (
            <Event
              key={index}
              image={event.image}
              title={event.title}
              time={event.time}
              location={event.location}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
