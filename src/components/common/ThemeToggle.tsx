import {
  useEffect,
  useState,
} from 'react'

import {
  loadSettings,
  saveSettings,
  type AppTheme,
} from '../../features/settings/utils/settingsStorage'

import './theme-toggle.css'

function ThemeToggle() {
  const [isDark, setIsDark] =
    useState(
      () =>
        loadSettings().theme ===
        'dark',
    )

  useEffect(() => {
    function handleSettingsChange() {
      const settings =
        loadSettings()

      setIsDark(
        settings.theme === 'dark',
      )
    }

    window.addEventListener(
      'app-settings-change',
      handleSettingsChange,
    )

    return () => {
      window.removeEventListener(
        'app-settings-change',
        handleSettingsChange,
      )
    }
  }, [])

  function toggleTheme() {
    const nextTheme: AppTheme =
      isDark
        ? 'light'
        : 'dark'

    const currentSettings =
      loadSettings()

    const nextSettings = {
      ...currentSettings,
      theme: nextTheme,
    }

    saveSettings(nextSettings)

    document.documentElement.dataset.theme =
      nextTheme

    setIsDark(
      nextTheme === 'dark',
    )

    window.dispatchEvent(
      new Event(
        'app-settings-change',
      ),
    )
  }

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={
        isDark
          ? 'ライトモードに切り替える'
          : 'ダークモードに切り替える'
      }
      onClick={toggleTheme}
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}

export default ThemeToggle