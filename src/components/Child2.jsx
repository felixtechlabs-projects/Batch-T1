import React, { useContext } from 'react'
import { nameContext } from '../App'

const Child2 = () => {
    const name = useContext(nameContext);

  return (
   <>
   
   <div>Child2</div>
    <p> name: {name}</p>
   </>
  )
}

export default Child2