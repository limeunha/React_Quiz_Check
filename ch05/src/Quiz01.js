import React, { useState } from 'react'

function Quiz01() {
   const [employees, setEmployees] = useState([
      { id: 1, name: '김도도', dept: '개발부' },
      { id: 2, name: '이레레', dept: '개발부' },
      { id: 3, name: '박미미', dept: '인사부' },
      { id: 4, name: '강파파', dept: '마케팅부' },
   ])

   //return 생략가능
   const employeesList = employees.map((employee) => (
      <li key={employee.id}>
         사원명:{employee.name}, 부서: {employee.dept}
      </li>
   ))
}
return <ul>{employeesList}</ul>

export default Quiz01
