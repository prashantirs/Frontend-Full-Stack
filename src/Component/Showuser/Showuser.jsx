import React from 'react'
import './Showuser.css'
import Displayuser from '../Display/Displayuser'

import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Loading/Loading'

const Showuser = (props) => {
  
  

  const [userData, setuserData] = useState([])
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const onShowuserHandler = async () => {
    const data = await fetch('/showuser'); // fetch returns a promise
    const user = await data.json(); // data.json() also returns a promise
    setuserData(user); 
    setloading(false);
  }
    setTimeout(() => {
      setloading(true);
      onShowuserHandler();
    }, 1500);

  
  }, [])

  return (
    <div className='EachUser'>
      <h4>{props.name}</h4>

      {loading ? <Loading/>: userData.map((user) =>{
            return <Displayuser name={user.name} />
        })}

    </div>
  )
}

export default Showuser