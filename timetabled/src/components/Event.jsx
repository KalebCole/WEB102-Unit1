import { useState } from 'react'
import '../App.css'

const Event = ({event, color, location}) => {
  const [count, setCount] = useState(0)

  return (
    <td className={`Event ${color}`}>
        <h5>{event}</h5>
        <h6>{location}</h6>
    </td>
  )
}

export default Event;
