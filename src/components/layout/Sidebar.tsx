import { NavLink } from 'react-router'

const navigationItems = [
  {
    label: 'Dashboard',
    path: '/',
  },
  {
    label: 'HMI Projects',
    path: '/projects',
  },
]

function Sidebar() {
  return (
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
  )
}

export default Sidebar