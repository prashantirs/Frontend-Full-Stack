import React from 'react'
import loading from '../Assets/loading.gif'
import './Loading.css'
const Loading = () => {
  return (
    <div className='load'>
        <img src={loading} alt="loading"/>
    </div>
  )
}

export default Loading