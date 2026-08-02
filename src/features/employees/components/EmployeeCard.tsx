import type { Employee } from '../types/employee'

import './employee-card.css'

interface EmployeeCardProps {
  employee: Employee
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article className="employee-card">
      <h2 className="employee-card__name">{employee.name}</h2>
      <p className="employee-card__position">{employee.position}</p>
      <p className="employee-card__location">{employee.location}</p>
    </article>
  )
}

export default EmployeeCard