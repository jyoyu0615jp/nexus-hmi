import RecentProjects from '../features/dashboard/components/RecentProjects'
import SummarySection from '../features/dashboard/components/SummarySection'

function DashboardPage() {
  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">
          ダッシュボード
        </h1>

        <p className="page__description">
          HMIプロジェクトの進捗状況と
          デリバリー状況を確認します。
        </p>
      </header>

      <SummarySection />

      <RecentProjects />
    </div>
  )
}

export default DashboardPage