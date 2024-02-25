import { useState } from 'react'
import '../App.css'

const Event = ({event, color}) => {
  const [count, setCount] = useState(0)

  return (
    <td className={`Event ${color}`}>
        <h5>{event}</h5>
    </td>
  )
}

export default Event;
