export type ScheduleEventType =
  | 'Review'
  | 'Milestone'
  | 'Delivery'
  | 'Meeting'

export type ScheduleEventStatus =
  | 'Upcoming'
  | 'Today'
  | 'Completed'

export interface ScheduleEvent {
  id: number
  projectId: number
  title: string
  projectName: string
  date: string
  time: string
  type: ScheduleEventType
  status: ScheduleEventStatus
}

export const scheduleEvents: ScheduleEvent[] = [
  {
    id: 1,
    projectId: 1,
    title: 'UIデザインレビュー',
    projectName: 'Accord IVI Interface',
    date: '2026-08-12',
    time: '10:00',
    type: 'Review',
    status: 'Upcoming',
  },
  {
    id: 2,
    projectId: 2,
    title: 'メーター仕様確認',
    projectName: 'PZ1A Meter Design',
    date: '2026-08-14',
    time: '14:00',
    type: 'Meeting',
    status: 'Upcoming',
  },
  {
    id: 3,
    projectId: 4,
    title: 'デザイン納品マイルストーン',
    projectName: 'bZ4X ADAS Visualization',
    date: '2026-08-18',
    time: '17:00',
    type: 'Milestone',
    status: 'Upcoming',
  },
  {
    id: 4,
    projectId: 3,
    title: '3Dモデルレビュー',
    projectName: 'ELF 3D Vehicle Model',
    date: '2026-08-22',
    time: '13:30',
    type: 'Review',
    status: 'Upcoming',
  },
  {
    id: 5,
    projectId: 1,
    title: 'プロトタイプ納品',
    projectName: 'Accord IVI Interface',
    date: '2026-08-28',
    time: '16:00',
    type: 'Delivery',
    status: 'Upcoming',
  },
]