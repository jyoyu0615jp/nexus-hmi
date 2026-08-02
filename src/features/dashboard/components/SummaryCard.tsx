import './summary-card.css'

interface SummaryCardProps {
  title: string
  value: string | number
}

function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <article className="summary-card">
      <p className="summary-card__title">
        {title}
      </p>

      <h2 className="summary-card__value">
        {value}
      </h2>
    </article>
  )
}

export default SummaryCard