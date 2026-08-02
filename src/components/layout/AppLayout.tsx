import { Outlet } from 'react-router'

import Header from './Header'
import Sidebar from './Sidebar'

import '../../styles/layout.css'

function AppLayout() {
  return (
    <div className="app-layout">
      <header className="header">
        <Header />
      </header>

      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}

export default AppLayout