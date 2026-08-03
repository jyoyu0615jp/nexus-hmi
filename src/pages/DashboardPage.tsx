import RecentProjects from '../features/dashboard/components/RecentProjects'
import SummarySection from '../features/dashboard/components/SummarySection'

function DashboardPage() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">Dashboard</h1>

        <p className="page__description">
          Monitor current HMI project activity and delivery progress.
        </p>
      </header>

      <SummarySection />

      <RecentProjects />
    </div>
  )
}

export default DashboardPage