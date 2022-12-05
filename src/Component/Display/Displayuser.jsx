import React from 'react'
import './Displayuser.css'
const Displayuser = (props) => {
  return (
    <div className='Eachuser'>{props.name}</div>
  )
}

export default Displayuser