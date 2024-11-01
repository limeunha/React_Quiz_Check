import React, { useEffect } from 'react'

function Quiz01() {
   useEffect(() => {
      console.log('Effect triggered')
   }, [])

   return <div>Hello World</div>
}

export default Quiz01

//맨처음 에만 출력
