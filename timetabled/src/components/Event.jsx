import { useState } from 'react'
import '../App.css'

const Event = (props) => {
  const [count, setCount] = useState(0)

  return (
    <td className="Event">
        <h5>Test Event Name</h5>
    </td>
  )
}

export default Event;
