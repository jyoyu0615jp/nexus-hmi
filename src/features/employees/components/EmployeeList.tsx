import EmployeeCard from './EmployeeCard'

import { employees } from '../data/employees'

import './employee-list.css'

function EmployeeList() {
  return (
    <section className="employee-list" aria-label="Employee directory">
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