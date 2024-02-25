import { useState } from 'react'
import '../App.css'

// hoisting in JS is when you can use a function before it's declared
// we use a const here so we don't use it before it's declared
// Post is a function!! 
const Post = ({name, description, likes}) => {
  const [count, setCount] = useState(0)

//   removing our logic from our presentation --> modularity
  

  return (
    // to add styles, add using a double curly brace because it's an object
    // the first curly brace is for the JSX, the second is for the object
    // it's like saying "this is a JS object, and it's for the JSX"
    <section style={{border: '3px solid white', marginBottom: '8px'}}>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <p>Likes: {likes}</p>
    </section>
    
  )
}

export default Post
