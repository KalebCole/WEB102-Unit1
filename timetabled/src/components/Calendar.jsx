import { useState } from "react";
import "../App.css";
import Event from "./Event";

const Calendar = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {/* Each row in the timetable will represent a 1 hour block for the week */}
          <tr>
            <td className="time">8 am</td>
            <Event event="Breakfast 🍳" color="green" />
            <Event event="Breakfast 🍳" color="green" />
            <Event event="Breakfast 🍳" color="green" />
            <Event event="Breakfast 🍳" color="green" />
            <Event event="Breakfast 🍳" color="green" />
            <Event event="Breakfast 🍳" color="green" />
            <Event event="Breakfast 🍳" color="green" />
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event event="Meeting 📅" color="pink" />
            <Event event="Meeting 📅" color="pink" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <Event event="Important Lunch 💼🤝" color="green" />
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <Event event="Subway 🚊" color="pink" />
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <Event event="The Bean 🫘" color="pink" />
            <Event event="Class 🤓" color="blue" />
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <Event event="The Bean 🫘" color="pink" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <Event event="The Bean 🫘" color="pink" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <td></td>
            <Event event="Class 🤓" color="blue" />
            <Event event="The Bean 🫘" color="blue" />
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event="Workout 🏋️" color="yellow" />
            <Event event="Workout 🏋️" color="yellow" />
            <Event event="Workout 🏋️" color="yellow" />
            <Event event="Workout 🏋️" color="yellow" />
            <Event event="Workout 🏋️" color="yellow" />
            <Event event="Workout 🏋️" color="yellow" />
            <Event event="Workout 🏋️" color="yellow" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
