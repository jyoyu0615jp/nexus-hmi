import { NavLink } from 'react-router'

const navigationItems = [
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'Employees',
    path: '/employees',
  },
]

function Sidebar() {
  return (
    <nav>
      <nav aria-label="Main navigation">
        <ul>
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  )
}

export default Sidebar