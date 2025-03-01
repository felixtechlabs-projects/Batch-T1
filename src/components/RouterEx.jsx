import React from 'react'
import { useNavigate } from 'react-router-dom'

const RouterEx = () => {
    const navigate = new useNavigate();
    const handleClick = () => {
        navigate("/nested/45");
    }

  return (
    <>
     <br />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        onClick={handleClick}
        > 
            Open another View 
        </button>
    </>
  )
}

export default RouterEx