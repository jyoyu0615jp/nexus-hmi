import SummaryCard from './SummaryCard'

import { projects } from '../../projects/data/projects'
import { getProjectSummary } from '../utils/projectSummary'

import './summary-section.css'

function SummarySection() {
  const summary = getProjectSummary(projects)

  return (
    <section className="summary-section">
      <SummaryCard
        title="総プロジェクト数"
        value={summary.total}
      />

      <SummaryCard
        title="進行中プロジェクト"
        value={summary.active}
      />

      <SummaryCard
        title="完了プロジェクト"
        value={summary.completed}
      />

      <SummaryCard
        title="平均進捗率"
        value={`${summary.averageProgress}%`}
      />
    </section>
  )
}

export default SummarySection