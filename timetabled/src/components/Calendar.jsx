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
            <Event event="Breakfast 🍳" color="green" location="📍 School cafeteria"/>
            <Event event="Breakfast 🍳" color="green" location="📍 School cafeteria"/>
            <Event event="Breakfast 🍳" color="green" location="📍 School cafeteria"/>
            <Event event="Breakfast 🍳" color="green" location="📍 School cafeteria"/>
            <Event event="Breakfast 🍳" color="green" location="📍 School cafeteria"/>
            <Event event="Breakfast 🍳" color="green" location="📍 School cafeteria"/>
            <Event event="Breakfast 🍳" color="green" location="📍 School cafeteria"/>
            <Event event="Breakfast 🍳" color="green" location="📍 School cafeteria"/>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event="Class 🤓" color="blue" location="📍 Innovation Building"/>
            <td></td>
            <Event event="Class 🤓" color="blue" location="📍 Innovation Building"/>
            <td></td>
            <Event event="Class 🤓" color="blue" location="📍 Innovation Building"/>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event event="Meeting 📅" color="pink" location="📍It's a secret" />
            <Event event="Meeting 📅" color="pink" location="📍It's a secret" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <Event event="Class 🤓" color="blue" location={'📍Carter Hall'}/>
            <td></td>
            <Event event="Class 🤓" color="blue" location={'📍 Carter Hall'}/>
            <td></td>
            <Event event="Class 🤓" color="blue" location={'📍 Carter Hall'}/>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <Event event="Important Lunch 💼🤝" color="green" location="📍It's a secret" />
            <Event event="Class 🤓" color="blue" location={'📍 Carter Hall'}/>
            <td></td>
            <Event event="Class 🤓" color="blue" location={'📍 Carter Hall'}/>
            <td></td>
            <Event event="Class 🤓" color="blue" location={'📍 Carter Hall'}/>
            <Event event="Subway 🚊" color="pink" location={'📍 Carter Hall'}/>
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <Event event="Class 🤓" color="blue" location="📍 Innovation Building"/>
            <td></td>
            <Event event="Class 🤓" color="blue" location="📍 Innovation Building"/>
            <Event event="The Bean 🫘" color="pink" location="📍 Innovation Building"/>
            <Event event="Class 🤓" color="blue" location="📍 Innovation Building"/>
            <td></td>
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <Event event="The Bean 🫘" color="pink" location="📍It's a secret" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <Event event="The Bean 🫘" color="pink" location="📍It's a secret" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <Event event="Class 🤓" color="blue" location="📍It's a secret" />
            <td></td>
            <Event event="Class 🤓" color="blue" location="📍It's a secret" />
            <td></td>
            <Event event="Class 🤓" color="blue" location="📍It's a secret" />
            <Event event="The Bean 🫘" color="blue" location="📍It's a secret" />
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <Event event="Workout 🏋️" color="yellow" location="📍It's a secret" />
            <Event event="Workout 🏋️" color="yellow" location="📍It's a secret" />
            <Event event="Workout 🏋️" color="yellow" location="📍It's a secret" />
            <Event event="Workout 🏋️" color="yellow" location="📍It's a secret" />
            <Event event="Workout 🏋️" color="yellow" location="📍It's a secret" />
            <Event event="Workout 🏋️" color="yellow" location="📍It's a secret" />
            <Event event="Workout 🏋️" color="yellow" location="📍It's a secret" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
