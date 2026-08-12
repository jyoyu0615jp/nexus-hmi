import {
  Bell,
  CheckCheck,
  CircleAlert,
  ClipboardCheck,
  FolderKanban,
  X,
} from 'lucide-react'

import { useNavigate } from 'react-router'

import type {
  NotificationItem,
  NotificationType,
} from '../data/notifications'

import './notification-popup.css'

interface NotificationPopupProps {
  notifications: NotificationItem[]
  onClose: () => void
  onMarkAllRead: () => void
  onMarkRead: (
    notificationId: number,
  ) => void
}

function getNotificationIcon(
  type: NotificationType,
) {
  if (type === 'risk') {
    return (
      <CircleAlert
        size={17}
        aria-hidden="true"
      />
    )
  }

  if (type === 'review') {
    return (
      <ClipboardCheck
        size={17}
        aria-hidden="true"
      />
    )
  }

  if (type === 'project') {
    return (
      <FolderKanban
        size={17}
        aria-hidden="true"
      />
    )
  }

  return (
    <Bell
      size={17}
      aria-hidden="true"
    />
  )
}

function NotificationPopup({
  notifications,
  onClose,
  onMarkAllRead,
  onMarkRead,
}: NotificationPopupProps) {
  const navigate =
    useNavigate()

  const todayNotifications =
    notifications.filter(
      (notification) =>
        notification.group ===
        'Today',
    )

  const earlierNotifications =
    notifications.filter(
      (notification) =>
        notification.group ===
        'Earlier',
    )

  function handleNotificationClick(
    notification: NotificationItem,
  ) {
    onMarkRead(notification.id)

    onClose()

    navigate(notification.path)
  }

  function renderNotification(
    notification: NotificationItem,
  ) {
    return (
      <article
        key={notification.id}
        className={`notification-item ${
          notification.isRead
            ? ''
            : 'notification-item--unread'
        }`}
        role="button"
        tabIndex={0}
        onClick={() =>
          handleNotificationClick(
            notification,
          )
        }
        onKeyDown={(event) => {
          if (
            event.key === 'Enter' ||
            event.key === ' '
          ) {
            event.preventDefault()

            handleNotificationClick(
              notification,
            )
          }
        }}
      >
        <div className="notification-item__icon">
          {getNotificationIcon(
            notification.type,
          )}
        </div>

        <div className="notification-item__content">
          <div className="notification-item__heading">
            <strong>
              {notification.title}
            </strong>

            <span>
              {notification.time}
            </span>
          </div>

          <p>
            {notification.message}
          </p>
        </div>
      </article>
    )
  }

  return (
    <aside
      className="notification-popup"
      aria-label="通知センター"
    >
      <div className="notification-popup__header">
        <div>
          <h2>
            通知
          </h2>

          <p>
            プロジェクトの最新情報を確認できます。
          </p>
        </div>

        <button
          className="notification-popup__close"
          type="button"
          aria-label="通知を閉じる"
          onClick={onClose}
        >
          <X
            size={18}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="notification-popup__toolbar">
        <button
          type="button"
          onClick={onMarkAllRead}
        >
          <CheckCheck
            size={16}
            aria-hidden="true"
          />

          すべて既読にする
        </button>
      </div>

      <div className="notification-popup__content">
        <section>
          <h3>
            今日
          </h3>

          <div className="notification-list">
            {todayNotifications.map(
              renderNotification,
            )}
          </div>
        </section>

        {earlierNotifications.length >
          0 && (
          <section>
            <h3>
              以前
            </h3>

            <div className="notification-list">
              {earlierNotifications.map(
                renderNotification,
              )}
            </div>
          </section>
        )}
      </div>
    </aside>
  )
}

export default NotificationPopup