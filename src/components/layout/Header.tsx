import { useState } from 'react'

import {
  Bell,
  Search,
} from 'lucide-react'

import ThemeToggle from '../common/ThemeToggle'
import nexusLogo from '../../assets/nexus-hmi-logo.png'
import NotificationPopup from '../../features/notifications/components/NotificationPopup'
import {
  initialNotifications,
  type NotificationItem,
} from '../../features/notifications/data/notifications'

import './header.css'

function Header() {
  const [
    isNotificationOpen,
    setIsNotificationOpen,
  ] = useState(false)

  const [
    notifications,
    setNotifications,
  ] = useState<NotificationItem[]>(
    initialNotifications,
  )

  const unreadCount = notifications.filter(
    (notification) =>
      !notification.isRead,
  ).length

  function handleMarkAllRead() {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        isRead: true,
      })),
    )
  }

  function handleMarkRead(
    notificationId: number,
  ) {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === notificationId
          ? {
              ...notification,
              isRead: true,
            }
          : notification,
      ),
    )
  }

  return (
    <>
      <div className="app-header">
        <div className="app-header__brand">
          <img
            className="app-header__logo"
            src={nexusLogo}
            alt="NEXUS//HMI Project Operations"
          />
        </div>

        <div className="app-header__search">
          <Search
            size={18}
            aria-hidden="true"
          />

          <input
            type="search"
            placeholder="プロジェクト、クライアント、メンバーを検索..."
            aria-label="全体検索"
          />
        </div>

        <div className="app-header__actions">
          <ThemeToggle />

          <button
            className="app-header__action"
            type="button"
            aria-label="通知を開く"
            aria-expanded={
              isNotificationOpen
            }
            onClick={() =>
              setIsNotificationOpen(
                (current) => !current,
              )
            }
          >
            <Bell size={19} />

            {unreadCount > 0 && (
              <span
                className="app-header__notification-badge"
                aria-label={`${unreadCount}件の未読通知`}
              >
                {unreadCount}
              </span>
            )}
          </button>

          <button
            className="app-header__avatar"
            type="button"
            aria-label="ユーザーメニューを開く"
          >
            CY
          </button>
        </div>
      </div>

      {isNotificationOpen && (
        <NotificationPopup
          notifications={notifications}
          onClose={() =>
            setIsNotificationOpen(false)
          }
          onMarkAllRead={
            handleMarkAllRead
          }
          onMarkRead={
            handleMarkRead
          }
        />
      )}
    </>
  )
}

export default Header