import { useState } from 'react'

import {
  Building2,
  CalendarDays,
  ChevronRight,
  FileText,
  FolderKanban,
  Home,
  MoreHorizontal,
  Settings,
  Users,
  X,
} from 'lucide-react'

import {
  NavLink,
  useLocation,
} from 'react-router'

const primaryNavigationItems = [
  {
    label: 'ダッシュボード',
    mobileLabel: 'ホーム',
    icon: Home,
    path: '/',
  },
  {
    label: 'プロジェクト',
    mobileLabel: '案件',
    icon: FolderKanban,
    path: '/projects',
  },
  {
    label: 'クライアント',
    mobileLabel: '顧客',
    icon: Building2,
    path: '/clients',
  },
  {
    label: 'チーム',
    mobileLabel: 'チーム',
    icon: Users,
    path: '/team',
  },
]

const secondaryNavigationItems = [
  {
    label: 'スケジュール',
    mobileLabel: '予定',
    icon: CalendarDays,
    path: '/schedule',
  },
  {
    label: 'ドキュメント',
    mobileLabel: '資料',
    icon: FileText,
    path: '/documents',
  },
  {
    label: '設定',
    mobileLabel: '設定',
    icon: Settings,
    path: '/settings',
  },
]

function Sidebar() {
  const [isMoreOpen, setIsMoreOpen] =
    useState(false)

  const location = useLocation()

  const isSecondaryActive =
    secondaryNavigationItems.some(
      (item) =>
        location.pathname === item.path ||
        location.pathname.startsWith(
          `${item.path}/`,
        ),
    )

  function closeMoreMenu() {
    setIsMoreOpen(false)
  }

  return (
    <>
      <nav
        className="sidebar-navigation"
        aria-label="メインナビゲーション"
      >
        <ul>
          {[
            ...primaryNavigationItems,
            ...secondaryNavigationItems,
          ].map((item) => (
            <li
              key={item.path}
              className="sidebar-navigation__item"
            >
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={closeMoreMenu}
              >
                <span className="sidebar__icon">
                  <item.icon
                    size={18}
                    aria-hidden="true"
                  />
                </span>

                <span className="sidebar__label">
                  {item.label}
                </span>

                <span className="sidebar__mobile-label">
                  {item.mobileLabel}
                </span>
              </NavLink>
            </li>
          ))}

          <li className="sidebar-more">
            <button
              className={
                isSecondaryActive
                  ? 'sidebar-more__button active'
                  : 'sidebar-more__button'
              }
              type="button"
              aria-label="その他のメニューを開く"
              aria-expanded={isMoreOpen}
              onClick={() =>
                setIsMoreOpen(
                  (current) => !current,
                )
              }
            >
              <span className="sidebar__icon">
                {isMoreOpen ? (
                  <X
                    size={18}
                    aria-hidden="true"
                  />
                ) : (
                  <MoreHorizontal
                    size={18}
                    aria-hidden="true"
                  />
                )}
              </span>

              <span className="sidebar__mobile-label">
                その他
              </span>
            </button>
          </li>
        </ul>
      </nav>

      {isMoreOpen && (
        <>
          <button
            className="mobile-more-backdrop"
            type="button"
            aria-label="メニューを閉じる"
            onClick={closeMoreMenu}
          />

          <div className="mobile-more-menu">
            <div className="mobile-more-menu__header">
              <div>
                <p>MORE</p>

                <h2>
                  その他のメニュー
                </h2>
              </div>

              <button
                className="mobile-more-menu__close"
                type="button"
                aria-label="メニューを閉じる"
                onClick={closeMoreMenu}
              >
                <X
                  size={18}
                  aria-hidden="true"
                />
              </button>
            </div>

            <nav
              className="mobile-more-menu__navigation"
              aria-label="追加ナビゲーション"
            >
              {secondaryNavigationItems.map(
                (item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMoreMenu}
                  >
                    <span className="mobile-more-menu__icon">
                      <item.icon
                        size={20}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="mobile-more-menu__content">
                      <strong>
                        {item.label}
                      </strong>

                      {item.path ===
                        '/schedule' && (
                        <small>
                          予定・レビュー・納期を確認
                        </small>
                      )}

                      {item.path ===
                        '/documents' && (
                        <small>
                          プロジェクト資料を確認
                        </small>
                      )}

                      {item.path ===
                        '/settings' && (
                        <small>
                          アプリ設定を変更
                        </small>
                      )}
                    </span>

                    <ChevronRight
                      className="mobile-more-menu__arrow"
                      size={17}
                      aria-hidden="true"
                    />
                  </NavLink>
                ),
              )}
            </nav>
          </div>
        </>
      )}
    </>
  )
}

export default Sidebar