export type NotificationType =
  | 'risk'
  | 'project'
  | 'review'
  | 'system'

export interface NotificationItem {
  id: number
  title: string
  message: string
  time: string
  group: 'Today' | 'Earlier'
  type: NotificationType
  isRead: boolean
  path: string
}

export const initialNotifications: NotificationItem[] = [
  {
    id: 1,
    title: '納期リスクを検出',
    message:
      'Toyota Meter Project の進捗に遅延リスクが検出されました。状況を確認してください。',
    time: '10:32',
    group: 'Today',
    type: 'risk',
    isRead: false,
    path: '/projects/4',
  },
  {
    id: 2,
    title: 'デザインレビュー完了',
    message:
      'Honda Accord IVI Interface のデザインレビューが完了しました。',
    time: '09:15',
    group: 'Today',
    type: 'review',
    isRead: false,
    path: '/projects/1',
  },
  {
    id: 3,
    title: '担当メンバーを更新',
    message:
      'Nissan Project の担当チーム構成が更新されました。',
    time: '08:40',
    group: 'Today',
    type: 'project',
    isRead: true,
    path: '/projects/2',
  },
  {
    id: 4,
    title: 'プロジェクト進捗を更新',
    message:
      'ISUZU 3D Vehicle Model の進捗率が更新されました。',
    time: '昨日',
    group: 'Earlier',
    type: 'project',
    isRead: true,
    path: '/projects/3',
  },
]