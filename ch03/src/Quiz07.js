import { useState } from 'react'

function Quiz07() {
   const [isOn, setIsOn] = useState(false)
   return (
      <div>
         <p>{isOn ? 'ON' : 'OFF'}</p>
         <button onClick={() => setIsOn(!isOn)}>토글</button>
      </div>
   )
}

export default Quiz07
