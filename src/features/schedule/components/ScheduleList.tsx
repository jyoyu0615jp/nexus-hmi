import {
  CalendarDays,
  Clock,
  Flag,
} from 'lucide-react'

import { useNavigate } from 'react-router'

import EmptyState from '../../../components/common/EmptyState'

import type {
  ScheduleEvent,
  ScheduleEventStatus,
  ScheduleEventType,
} from '../data/scheduleEvents'

import './schedule-list.css'

interface ScheduleListProps {
  events: ScheduleEvent[]
}

const eventTypeLabels: Record<
  ScheduleEventType,
  string
> = {
  Review: 'レビュー',
  Milestone: 'マイルストーン',
  Delivery: '納品',
  Meeting: '会議',
}

const eventStatusLabels: Record<
  ScheduleEventStatus,
  string
> = {
  Upcoming: '予定',
  Today: '本日',
  Completed: '完了',
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat(
    'ja-JP',
    {
      month: 'short',
      day: 'numeric',
      weekday: 'short',
    },
  ).format(
    new Date(`${date}T00:00:00`),
  )
}

function ScheduleList({
  events,
}: ScheduleListProps) {
  const navigate = useNavigate()

  if (events.length === 0) {
    return (
      <EmptyState
        icon={CalendarDays}
        title="予定はありません"
        description="選択した日付には、現在登録されているスケジュールがありません。"
      />
    )
  }

  function handleEventClick(
    event: ScheduleEvent,
  ) {
    navigate(
      `/projects/${event.projectId}`,
    )
  }

  return (
    <div
      className="schedule-list"
      aria-label="スケジュール一覧"
    >
      {events.map((event) => (
        <article
          key={event.id}
          className="schedule-card"
          role="button"
          tabIndex={0}
          aria-label={`${event.projectName} ${event.title}`}
          onClick={() =>
            handleEventClick(event)
          }
          onKeyDown={(keyboardEvent) => {
            if (
              keyboardEvent.key === 'Enter' ||
              keyboardEvent.key === ' '
            ) {
              keyboardEvent.preventDefault()

              handleEventClick(event)
            }
          }}
        >
          <div className="schedule-card__date">
            <CalendarDays
              size={18}
              aria-hidden="true"
            />

            <strong>
              {formatDate(event.date)}
            </strong>
          </div>

          <div className="schedule-card__content">
            <div className="schedule-card__header">
              <div>
                <p className="schedule-card__project">
                  {event.projectName}
                </p>

                <h3 className="schedule-card__title">
                  {event.title}
                </h3>
              </div>

              <span className="schedule-card__type">
                {eventTypeLabels[event.type]}
              </span>
            </div>

            <div className="schedule-card__meta">
              <span>
                <Clock
                  size={15}
                  aria-hidden="true"
                />

                {event.time}
              </span>

              <span>
                <Flag
                  size={15}
                  aria-hidden="true"
                />

                {eventStatusLabels[event.status]}
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default ScheduleList