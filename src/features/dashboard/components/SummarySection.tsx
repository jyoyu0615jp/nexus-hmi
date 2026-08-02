import SummaryCard from './SummaryCard'

import { projects } from '../../projects/data/projects'
import { getProjectSummary } from '../utils/projectSummary'
import './summary-section.css'

function SummarySection() {
  const summary = getProjectSummary(projects)

  return (
    <section className="summary-section">
      <SummaryCard
        title="Total Projects"
        value={summary.total}
      />

      <SummaryCard
        title="Active Projects"
        value={summary.active}
      />

      <SummaryCard
        title="Completed"
        value={summary.completed}
      />

      <SummaryCard
        title="Average Progress"
        value={`${summary.averageProgress}%`}
      />
    </section>
  )
}

export default SummarySection