import {
  useEffect,
  useState,
} from 'react'

import {
  Bell,
  Bot,
  Languages,
  Moon,
} from 'lucide-react'

import {
  loadSettings,
  saveSettings,
  type AppSettings,
} from '../features/settings/utils/settingsStorage'

import '../styles/settings.css'

function SettingsPage() {
  const [
    settings,
    setSettings,
  ] = useState<AppSettings>(
    loadSettings,
  )

  useEffect(() => {
    saveSettings(settings)

    document.documentElement.dataset.theme =
      settings.theme

    window.dispatchEvent(
      new Event(
        'app-settings-change',
      ),
    )
  }, [settings])

  function updateSetting<
    K extends keyof AppSettings,
  >(
    key: K,
    value: AppSettings[K],
  ) {
    setSettings(
      (currentSettings) => ({
        ...currentSettings,
        [key]: value,
      }),
    )
  }

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">
          設定
        </h1>

        <p className="page__description">
          表示設定、通知、
          AIアシスタントの利用設定を管理します。
        </p>
      </header>

      <div className="settings-layout">
        <section className="settings-section">
          <div className="settings-section__header">
            <div className="settings-section__icon">
              <Moon
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <h2>
                表示設定
              </h2>

              <p>
                アプリケーションの
                表示テーマを設定します。
              </p>
            </div>
          </div>

          <div className="settings-row">
            <div>
              <strong>
                テーマ
              </strong>

              <p>
                ライトモードまたは
                ダークモードを使用します。
              </p>
            </div>

            <select
              aria-label="テーマ"
              value={settings.theme}
              onChange={(event) =>
                updateSetting(
                  'theme',
                  event.target
                    .value as AppSettings['theme'],
                )
              }
            >
              <option value="dark">
                ダーク
              </option>

              <option value="light">
                ライト
              </option>
            </select>
          </div>
        </section>

        <section className="settings-section">
          <div className="settings-section__header">
            <div className="settings-section__icon">
              <Languages
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <h2>
                言語設定
              </h2>

              <p>
                アプリケーションの
                表示言語を設定します。
              </p>
            </div>
          </div>

          <div className="settings-row">
            <div>
              <strong>
                表示言語
              </strong>

              <p>
                現在の言語設定を保存します。
              </p>
            </div>

            <select
              aria-label="表示言語"
              value={settings.language}
              onChange={(event) =>
                updateSetting(
                  'language',
                  event.target
                    .value as AppSettings['language'],
                )
              }
            >
              <option value="ja">
                日本語
              </option>

              <option value="en">
                English
              </option>

              <option value="zh">
                中文
              </option>
            </select>
          </div>
        </section>

        <section className="settings-section">
          <div className="settings-section__header">
            <div className="settings-section__icon">
              <Bell
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <h2>
                通知設定
              </h2>

              <p>
                プロジェクト通知の
                利用設定を管理します。
              </p>
            </div>
          </div>

          <label className="settings-toggle-row">
            <div>
              <strong>
                プロジェクト通知
              </strong>

              <p>
                プロジェクト更新や
                レビュー完了の通知を受け取ります。
              </p>
            </div>

            <input
              type="checkbox"
              checked={
                settings.projectNotifications
              }
              onChange={(event) =>
                updateSetting(
                  'projectNotifications',
                  event.target.checked,
                )
              }
            />
          </label>

          <label className="settings-toggle-row">
            <div>
              <strong>
                納期リスク通知
              </strong>

              <p>
                納期リスクを検出した場合に
                通知を受け取ります。
              </p>
            </div>

            <input
              type="checkbox"
              checked={
                settings.riskNotifications
              }
              onChange={(event) =>
                updateSetting(
                  'riskNotifications',
                  event.target.checked,
                )
              }
            />
          </label>
        </section>

        <section className="settings-section">
          <div className="settings-section__header">
            <div className="settings-section__icon">
              <Bot
                size={20}
                aria-hidden="true"
              />
            </div>

            <div>
              <h2>
                AIアシスタント
              </h2>

              <p>
                NEXUS//HMI Copilot の
                表示設定を管理します。
              </p>
            </div>
          </div>

          <label className="settings-toggle-row">
            <div>
              <strong>
                AIアシスタントを表示
              </strong>

              <p>
                右下のフローティング
                AIボタンを表示します。
              </p>
            </div>

            <input
              type="checkbox"
              checked={
                settings.aiAssistantEnabled
              }
              onChange={(event) =>
                updateSetting(
                  'aiAssistantEnabled',
                  event.target.checked,
                )
              }
            />
          </label>
        </section>
      </div>
    </div>
  )
}

export default SettingsPage