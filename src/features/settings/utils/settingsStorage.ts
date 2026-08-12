export type AppTheme =
  | 'dark'
  | 'light'

export type AppLanguage =
  | 'ja'
  | 'en'
  | 'zh'

export interface AppSettings {
  theme: AppTheme
  language: AppLanguage
  projectNotifications: boolean
  riskNotifications: boolean
  aiAssistantEnabled: boolean
}

export const defaultSettings: AppSettings = {
  theme: 'dark',
  language: 'ja',
  projectNotifications: true,
  riskNotifications: true,
  aiAssistantEnabled: true,
}

const SETTINGS_KEY =
  'hmi-operations-settings'

export function loadSettings(): AppSettings {
  try {
    const storedSettings =
      localStorage.getItem(
        SETTINGS_KEY,
      )

    if (!storedSettings) {
      return defaultSettings
    }

    const parsedSettings =
      JSON.parse(
        storedSettings,
      ) as Partial<AppSettings>

    return {
      ...defaultSettings,
      ...parsedSettings,
    }
  } catch {
    return defaultSettings
  }
}

export function saveSettings(
  settings: AppSettings,
) {
  localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify(settings),
  )
}