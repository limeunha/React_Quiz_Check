import React, { useState } from 'react'

function Quiz06() {
   const [count, setCount] = useState(0)

   return (
      <div>
         <p>카운트: {count}</p>
         <button onClick={() => setCount(count + 1)}>1씩 증가</button>

         {/* setCount(count++) 증감연산자는 count값 자체를 바꾸므로 사용할수X->count는 const로 선언돠어있음 -> count는 setCount로 */}
      </div>
   )
}

export default Quiz06
