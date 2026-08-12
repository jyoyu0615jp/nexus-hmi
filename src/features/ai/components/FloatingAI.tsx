import {
  useEffect,
  useState,
} from 'react'

import {
  Bot,
  X,
} from 'lucide-react'

import {
  loadSettings,
} from '../../settings/utils/settingsStorage'

import AIAssistantDrawer from './AIAssistantDrawer'

import './floating-ai.css'

function FloatingAI() {
  const [
    isOpen,
    setIsOpen,
  ] = useState(false)

  const [
    isEnabled,
    setIsEnabled,
  ] = useState(
    () =>
      loadSettings()
        .aiAssistantEnabled,
  )

  useEffect(() => {
    function handleSettingsChange() {
      const settings =
        loadSettings()

      setIsEnabled(
        settings.aiAssistantEnabled,
      )

      if (
        !settings.aiAssistantEnabled
      ) {
        setIsOpen(false)
      }
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

  if (!isEnabled) {
    return null
  }

  return (
    <>
      {isOpen && (
        <button
          className="floating-ai-backdrop"
          type="button"
          aria-label="AIアシスタントを閉じる"
          onClick={() =>
            setIsOpen(false)
          }
        />
      )}

      <AIAssistantDrawer
        isOpen={isOpen}
        onClose={() =>
          setIsOpen(false)
        }
      />

      <button
        className={`floating-ai-button ${
          isOpen
            ? 'floating-ai-button--open'
            : ''
        }`}
        type="button"
        aria-label={
          isOpen
            ? 'AIアシスタントを閉じる'
            : 'AIアシスタントを開く'
        }
        aria-expanded={isOpen}
        onClick={() =>
          setIsOpen(
            (current) => !current,
          )
        }
      >
        {isOpen ? (
          <X
            size={22}
            aria-hidden="true"
          />
        ) : (
          <Bot
            size={22}
            aria-hidden="true"
          />
        )}
      </button>
    </>
  )
}

export default FloatingAI