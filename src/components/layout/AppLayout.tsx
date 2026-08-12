import {
  useEffect,
  useRef,
} from 'react'

import { Outlet } from 'react-router'

import ScrollToTop from '../common/ScrollToTop'
import Header from './Header'
import Sidebar from './Sidebar'

import FloatingAI from '../../features/ai/components/FloatingAI'

import {
  loadSettings,
} from '../../features/settings/utils/settingsStorage'

import '../../styles/layout.css'

function AppLayout() {
  const contentRef =
    useRef<HTMLElement | null>(null)

  useEffect(() => {
    const settings =
      loadSettings()

    document.documentElement.dataset.theme =
      settings.theme
  }, [])

  return (
    <div className="app-layout">
      <ScrollToTop
        container={contentRef}
      />

      <header className="header">
        <Header />
      </header>

      <aside className="sidebar">
        <Sidebar />
      </aside>

      <main
        ref={contentRef}
        className="content"
      >
        <Outlet />
      </main>

      <FloatingAI />
    </div>
  )
}

export default AppLayout