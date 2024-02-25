import { useState } from 'react'
import './App.css'
import Post from './components/Post'

function App() {
  const [count, setCount] = useState(0)


  const students = [
    {
      name: 'Kaleb Cole',
      description: 'I want to learn how to create beautiful web apps efficiently.',
      likes: "19981"
    },
    {
      name: 'dsfdsf Cole',
      description: 'dsfdsfds',
      likes: "-1232"
    },
    {
      name: '33454545dfsgd',
      description: '343243243dfgdf',
      likes: "5454"
    }
  ]
  return (
    // this is wrapped in a React fragment
    <>
    <h1>Welcome to Web 102</h1>
    <h2>Write a post about what you're excited to learn about :P</h2>
    {/* map iterates over a collection and i is the incrementer */}
    {
      students.map((student, i) =>{
        return(<Post
          name={student.name}
          key={i}
          description={student.description}
          likes={student.likes}
          />)
        })
      }
      </>
  )
}

export default App
