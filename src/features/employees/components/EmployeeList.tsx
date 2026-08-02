import EmployeeCard from './EmployeeCard'

import { employees } from '../data/employees'

function EmployeeList() {
  return (
    <section>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </section>
  )
}

export default EmployeeList