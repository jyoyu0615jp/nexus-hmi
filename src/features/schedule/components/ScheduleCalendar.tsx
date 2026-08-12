import {
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import type { ScheduleEvent } from '../data/scheduleEvents'

import './schedule-calendar.css'

interface ScheduleCalendarProps {
  events: ScheduleEvent[]
  selectedDate: string | null
  onSelectDate: (date: string | null) => void
}

interface CalendarDay {
  date: Date
  dateKey: string
  isCurrentMonth: boolean
}

const weekDays = [
  '日',
  '月',
  '火',
  '水',
  '木',
  '金',
  '土',
]

function createDateKey(date: Date) {
  const year = date.getFullYear()

  const month = String(
    date.getMonth() + 1,
  ).padStart(2, '0')

  const day = String(
    date.getDate(),
  ).padStart(2, '0')

  return `${year}-${month}-${day}`
}

function createCalendarDays(
  year: number,
  month: number,
): CalendarDay[] {
  const firstDay =
    new Date(year, month, 1)

  const startDay =
    new Date(year, month, 1)

  startDay.setDate(
    firstDay.getDate() -
      firstDay.getDay(),
  )

  return Array.from(
    { length: 42 },
    (_, index) => {
      const date = new Date(startDay)

      date.setDate(
        startDay.getDate() + index,
      )

      return {
        date,
        dateKey: createDateKey(date),
        isCurrentMonth:
          date.getMonth() === month,
      }
    },
  )
}

function ScheduleCalendar({
  events,
  selectedDate,
  onSelectDate,
}: ScheduleCalendarProps) {
  const initialDate =
    events.length > 0
      ? new Date(
          `${events[0].date}T00:00:00`,
        )
      : new Date()

  const year = initialDate.getFullYear()
  const month = initialDate.getMonth()

  const calendarDays =
    createCalendarDays(
      year,
      month,
    )

  const eventDates = new Set(
    events.map((event) => event.date),
  )

  const monthLabel =
    new Intl.DateTimeFormat(
      'ja-JP',
      {
        year: 'numeric',
        month: 'long',
      },
    ).format(
      new Date(year, month, 1),
    )

  function handleDateClick(
    dateKey: string,
  ) {
    if (selectedDate === dateKey) {
      onSelectDate(null)
      return
    }

    onSelectDate(dateKey)
  }

  return (
    <section className="schedule-calendar">
      <div className="schedule-calendar__header">
        <div>
          <p className="schedule-calendar__eyebrow">
            月間スケジュール
          </p>

          <h2>
            {monthLabel}
          </h2>
        </div>

        <div className="schedule-calendar__controls">
          <button
            type="button"
            aria-label="前の月"
            disabled
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            aria-label="次の月"
            disabled
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div className="schedule-calendar__weekdays">
        {weekDays.map((day) => (
          <span key={day}>
            {day}
          </span>
        ))}
      </div>

      <div className="schedule-calendar__grid">
        {calendarDays.map((day) => {
          const hasEvent =
            eventDates.has(day.dateKey)

          const isSelected =
            selectedDate === day.dateKey

          return (
            <button
              key={day.dateKey}
              className={[
                'schedule-calendar__day',
                !day.isCurrentMonth
                  ? 'schedule-calendar__day--outside'
                  : '',
                hasEvent
                  ? 'schedule-calendar__day--event'
                  : '',
                isSelected
                  ? 'schedule-calendar__day--selected'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
              type="button"
              aria-pressed={isSelected}
              aria-label={
                hasEvent
                  ? `${day.dateKey} 予定あり`
                  : day.dateKey
              }
              onClick={() =>
                handleDateClick(
                  day.dateKey,
                )
              }
            >
              <span>
                {day.date.getDate()}
              </span>

              {hasEvent && (
                <span
                  className="schedule-calendar__event-dot"
                  aria-hidden="true"
                />
              )}
            </button>
          )
        })}
      </div>

      <div className="schedule-calendar__footer">
        <div className="schedule-calendar__legend">
          <span
            className="schedule-calendar__legend-dot"
            aria-hidden="true"
          />

          予定あり
        </div>

        {selectedDate && (
          <button
            className="schedule-calendar__show-all"
            type="button"
            onClick={() =>
              onSelectDate(null)
            }
          >
            すべて表示
          </button>
        )}
      </div>
    </section>
  )
}

export default ScheduleCalendar