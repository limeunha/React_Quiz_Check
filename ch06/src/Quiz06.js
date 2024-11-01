import React, { useState } from 'react'
import { useCallback } from 'react'

function Quiz06() {
   const [count, setCount] = useState(0)

   const increment = useCallback(() => {
      setCount((prevState) => prevState + 1)
   }, [])

   // const increment = useCallback(() => {
   //    setCount(count + 1)
   // }, [count])

   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
      </div>
   )
}

export default Quiz06
