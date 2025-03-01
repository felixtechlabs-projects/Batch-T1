import React, { useEffect, useState } from 'react'

// object destructuring
const Demo = () => {
  // name is readonly, cannot change name 
  // component re-render
  const [name, setName] = useState('');

  useEffect(() => {
    console.log("Mounting Phase");
  }, []);


  useEffect(() => {
    console.log("Updating phase");
  }, [name]);


  useEffect(() => {
    return () => {
      console.log("Unmounting phase");
    }
  }, [])
  
  return (
   <>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
   </>
  )
}

export default Demo
