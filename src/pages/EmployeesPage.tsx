import EmployeeList from '../features/employees/components/EmployeeList'

function EmployeesPage() {
  return (
    <section>
      <h1>Employees</h1>
      <p>Browse the current employee directory.</p>

      <EmployeeList />
    </section>
  )
}

export default EmployeesPage