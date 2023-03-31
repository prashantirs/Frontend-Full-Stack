import React from 'react'
import './Displayuser.css'
const Displayuser = (props) => {
  return (
    <div className='Eachuser'>{props.name} <br /> {props.email}</div>
  )
}

export default Displayuser