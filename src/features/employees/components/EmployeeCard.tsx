import type { Employee } from '../types/employee'

interface EmployeeCardProps {
  employee: Employee
}

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <article>
      <h2>{employee.name}</h2>
      <p>{employee.position}</p>
      <p>{employee.location}</p>
    </article>
  )
}

export default EmployeeCard