import './timeline.css'

interface TimelineProps {
  startDate: string
  dueDate: string
  progress: number
}

function parseDateOnly(dateString: string) {
  const [year, month, day] = dateString
    .split('-')
    .map(Number)

  return new Date(year, month - 1, day)
}

function getMarkerEdgeClass(value: number) {
  if (value <= 8) {
    return 'timeline__marker--start-edge'
  }

  if (value >= 92) {
    return 'timeline__marker--end-edge'
  }

  return ''
}

function Timeline({
  startDate,
  dueDate,
  progress,
}: TimelineProps) {
  const start = parseDateOnly(startDate)
  const due = parseDateOnly(dueDate)

  const now = new Date()

  const today = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  )

  const totalDuration =
    due.getTime() - start.getTime()

  const elapsedDuration =
    today.getTime() - start.getTime()

  const rawTodayPercent =
    totalDuration > 0
      ? (elapsedDuration / totalDuration) * 100
      : 0

  const todayPercent = Math.min(
    100,
    Math.max(0, rawTodayPercent),
  )

  const safeProgress = Math.min(
    100,
    Math.max(0, progress),
  )

  const formattedToday =
    today.toLocaleDateString('en-CA')

  return (
    <div className="timeline">
      <div className="timeline__header">
        <div>
          <p className="timeline__label">
            Start
          </p>

          <strong>{startDate}</strong>
        </div>

        <div className="timeline__date-end">
          <p className="timeline__label">
            Due
          </p>

          <strong>{dueDate}</strong>
        </div>
      </div>

      <div
        className="timeline__track"
        role="img"
        aria-label={`Project timeline from ${startDate} to ${dueDate}. Today is at ${Math.round(
          todayPercent,
        )} percent and project progress is ${safeProgress} percent.`}
      >
        <div
          className="timeline__elapsed"
          style={{
            width: `${todayPercent}%`,
          }}
        />

        <div
          className="timeline__progress"
          style={{
            width: `${safeProgress}%`,
          }}
        />

        <span
          className="
            timeline__endpoint
            timeline__endpoint--start
          "
        />

        <span
          className="
            timeline__endpoint
            timeline__endpoint--due
          "
        />

        <div
          className={`
            timeline__marker
            timeline__marker--progress
            ${getMarkerEdgeClass(safeProgress)}
          `}
          style={{
            left: `${safeProgress}%`,
          }}
        >
          <span className="timeline__progress-dot" />

          <span className="timeline__marker-label">
            Progress
          </span>

          <span className="timeline__marker-value">
            {safeProgress}%
          </span>
        </div>

        <div
          className={`
            timeline__marker
            timeline__marker--today
            ${getMarkerEdgeClass(todayPercent)}
          `}
          style={{
            left: `${todayPercent}%`,
          }}
        >
          <span className="timeline__today-dot" />

          <span className="timeline__marker-label">
            Today
          </span>

          <span className="timeline__marker-value">
            {formattedToday}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Timeline