import './progress-bar.css'

interface ProgressBarProps {
  value: number
}

function ProgressBar({
  value,
}: ProgressBarProps) {
  const safeValue = Math.min(100, Math.max(0, value))

  return (
    <div className="progress-bar">
      <div
        className="progress-bar__track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={safeValue}
        aria-label={`Progress ${safeValue}%`}
      >
        <div
          className="progress-bar__value"
          style={{
            width: `${safeValue}%`,
          }}
        />

        <div
          className="progress-bar__marker"
          style={{
            left: `${safeValue}%`,
          }}
        >
          <span className="progress-bar__dot" />

          <span className="progress-bar__text">
            {safeValue}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar