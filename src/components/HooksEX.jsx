import React, { useMemo, useState } from 'react'

const HooksEX = () => {
    const [count, setCount] = useState(0);
    // const calculation = heavyCode(count);

    const memoCalculation = useMemo(() => {
        return heavyCode(count);
    }, [count])

  return (
    <>
        <h1>Hooks Example</h1>
        <input type="number" value={count} onChange={(e) => setCount(e.target.valueAsNumber)} />
        <p> { memoCalculation } </p>
    
    </>
  )
}

function heavyCode(num) {
    console.log("inside heavy code");
    for(let i = 0; i<1000000000; i++) {}
    return num;
 }


export default HooksEX
/**
 * UseEffect -> for achieving life cycle methods of functional component
 * useState -> for state management
 * useLayoutEffect -> alternative to useEffect
 * useMemo -> Memoization
 * useReducer -> Global State management + Redux toolkit
 * action, store, dispatch, reducer
 * useContext -> avoid prop drilling -> Firebase(backend as a service)
 */