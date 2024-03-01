import { useState } from 'react'
import '../App.jsx'

function Event({image, title, time, location}) {
  const [count, setCount] = useState(0)

return (
    <>
        <img src={image} alt="" />
        <h4>{title}</h4>
        <h5>{time}</h5>
        <h5>{location}</h5>
        <button>I'm interested</button>
    </>
)
}

export default Event
