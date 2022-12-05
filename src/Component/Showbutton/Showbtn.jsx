import React from 'react'
import { Link } from 'react-router-dom'
import './Showbtn.css'
const Showbtn = () => {

  return (
    <Link to="showuser">
        <div className="btn">
          <button className='click-btn'>Click Me!</button>
        </div>
    </Link>
  )
}

export default Showbtn