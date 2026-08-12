import { useState } from 'react'

import ScheduleCalendar from '../features/schedule/components/ScheduleCalendar'
import ScheduleList from '../features/schedule/components/ScheduleList'
import { scheduleEvents } from '../features/schedule/data/scheduleEvents'

function formatSelectedDate(
  date: string,
) {
  return new Intl.DateTimeFormat(
    'ja-JP',
    {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'short',
    },
  ).format(
    new Date(`${date}T00:00:00`),
  )
}

function SchedulePage() {
  const [
    selectedDate,
    setSelectedDate,
  ] = useState<string | null>(null)

  const sortedEvents = [
    ...scheduleEvents,
  ].sort(
    (a, b) =>
      new Date(a.date).getTime() -
      new Date(b.date).getTime(),
  )

  const visibleEvents =
    selectedDate === null
      ? sortedEvents
      : sortedEvents.filter(
          (event) =>
            event.date === selectedDate,
        )

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">
          スケジュール
        </h1>

        <p className="page__description">
          今後のレビュー、マイルストーン、
          納品予定を確認できます。
        </p>
      </header>

      <section className="page__section">
        <ScheduleCalendar
          events={sortedEvents}
          selectedDate={selectedDate}
          onSelectDate={
            setSelectedDate
          }
        />
      </section>

      <section className="page__section">
        <h2 className="page__section-title">
          {selectedDate
            ? formatSelectedDate(
                selectedDate,
              )
            : '今後の予定'}
        </h2>

        <ScheduleList
          events={visibleEvents}
        />
      </section>
    </div>
  )
}

export default SchedulePage