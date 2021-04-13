import React from 'react'

const Header = () => {
  const firstYears = 'First Year Class at Jujustsu High'
  return (
    <h1>{firstYears}</h1>
  )
}

const Student = (props) => {
  const student = 'Student Name - '
  return (
    <p>{student} {props.name}</p>
  )
}

const Teacher = (props) => {
  const teacher = 'Teacher Name - '
  return (
    <p>{teacher} {props.name}</p>
  )
}

const App = () => {
  return (
    <div>
      <Header/>
      <Student name="Itadori Yuuji"/>
      <Student name="Fushiguro Megumi"/>
      <Student name="Kugisaki Nobara"/>
      <Teacher name="Gojo Satoru"/>
    </div>
  )
}

export default App