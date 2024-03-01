import { useState } from "react";
import "./App.css";
import Event from "./components/Event";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>WVU Tech Association for Computing Machinery (ACM) Events</h1>
        <div className="Events">
          <Event
            image="acm-chapter.png"
            title="ACM Club Meeting"
            time="January 30th: 1:00 PM - 1:50 PM"
            location="Benedum Blue Room 209A"
          />
          <Event
            image="hackatdavidson.png"
            title="Hack@Davidson"
            time="February 2nd-4th: Leaving at 4:00 PM"
            location="Benedum Blue Room 209A"
          />
          <Event
            image="acm-chapter.png"
            title="ACM Club Meeting"
            time="February 13th: 1:00 PM - 1:50 PM"
            location="Benedum Blue Room 209A"
          />
          <Event
            image="icpc.png"
            title="International Collegiate Programming Contest (ICPC)"
            time="Feb 23rd-24th: Leaving at 5:00 PM"
            location="Virginia Tech: Blacksburg, VA 24061"
          />
          <Event
            image="acm-chapter.png"
            title="ACM Club Meeting"
            time="February 27th: 1:00 PM - 1:50 PM"
            location="Benedum Blue Room 209A"
          />
          <Event
            image="acm-chapter.png"
            title="ACM Club Meeting"
            time="March 5th: 1:00 PM - 1:50 PM"
            location="Benedum Blue Room 209A"
          />
          <Event
            image="acm-chapter.png"
            title="ACM Club Meeting"
            time="March 19th: 1:00 PM - 1:50 PM"
            location="Benedum Blue Room 209A"
          />
        </div>
      </div>
    </>
  );
}

export default App;
