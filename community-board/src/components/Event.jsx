import { useState } from "react";
import "../App.jsx";

function Event({ image, title, time, location, link }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="Event">
        <img src={image} alt="" />

        <h4>{title}</h4>
        <h5>Time: {time}</h5>
        <h5>
          <span>Location:</span> {location}
        </h5>
        <button className="interested-button"><a href={link}>I'm interested</a></button>
      </div>
    </>
  );
}

export default Event;
