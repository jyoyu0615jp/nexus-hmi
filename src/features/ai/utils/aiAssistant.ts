import { projects } from '../../projects/data/projects'
import { projectAssignments } from '../../team/data/projectAssignments'
import { teamMembers } from '../../team/data/teamMembers'

export type AILanguage = 'en' | 'ja' | 'zh'

export type AIIntent =
  | 'summary'
  | 'risks'
  | 'members'
  | 'report'

export function detectLanguage(
  text: string,
): AILanguage {
  const japanesePattern =
    /[\u3040-\u30ff]/

  const chinesePattern =
    /[\u3400-\u4dbf\u4e00-\u9fff]/

  if (japanesePattern.test(text)) {
    return 'ja'
  }

  if (chinesePattern.test(text)) {
    return 'zh'
  }

  return 'en'
}

export function detectIntent(
  text: string,
): AIIntent {
  const normalized = text.toLowerCase()

  const riskKeywords = [
    'risk',
    'delay',
    'delivery',
    'late',
    '遅延',
    'リスク',
    '納期',
    '延期',
    '風險',
    '风险',
  ]

  const memberKeywords = [
    'team',
    'member',
    'available',
    'capacity',
    'assign',
    'メンバー',
    '担当',
    'チーム',
    '空き',
    '成員',
    '成员',
    '團隊',
    '团队',
    '人手',
  ]

  const reportKeywords = [
    'report',
    'weekly',
    'status report',
    'レポート',
    '週報',
    '報告',
    '周报',
  ]

  if (
    riskKeywords.some((keyword) =>
      normalized.includes(keyword),
    )
  ) {
    return 'risks'
  }

  if (
    memberKeywords.some((keyword) =>
      normalized.includes(keyword),
    )
  ) {
    return 'members'
  }

  if (
    reportKeywords.some((keyword) =>
      normalized.includes(keyword),
    )
  ) {
    return 'report'
  }

  return 'summary'
}

function generateSummary(
  language: AILanguage,
): string {
  const activeProjects = projects.filter(
    (project) =>
      project.status !== 'Completed',
  )

  const completedProjects = projects.filter(
    (project) =>
      project.status === 'Completed',
  )

  const averageProgress =
    projects.length > 0
      ? Math.round(
          projects.reduce(
            (total, project) =>
              total + project.progress,
            0,
          ) / projects.length,
        )
      : 0

  if (language === 'ja') {
    return (
      `現在、プロジェクトは合計${projects.length}件あります。` +
      `進行中は${activeProjects.length}件、` +
      `完了済みは${completedProjects.length}件です。` +
      `全体の平均進捗率は${averageProgress}%です。`
    )
  }

  if (language === 'zh') {
    return (
      `目前共有 ${projects.length} 個項目，` +
      `其中 ${activeProjects.length} 個正在進行，` +
      `${completedProjects.length} 個已完成。` +
      `整體平均進度為 ${averageProgress}%。`
    )
  }

  return (
    `There are ${projects.length} projects in total. ` +
    `${activeProjects.length} are currently active and ` +
    `${completedProjects.length} are completed. ` +
    `Average project progress is ${averageProgress}%.`
  )
}

function generateRisks(
  language: AILanguage,
): string {
  const riskyProjects = projects.filter(
    (project) =>
      project.status !== 'Completed' &&
      project.progress < 50,
  )

  if (riskyProjects.length === 0) {
    if (language === 'ja') {
      return '現在のプロジェクトデータを分析した結果、重大な納期遅延リスクは検出されませんでした。'
    }

    if (language === 'zh') {
      return '根據目前的項目數據分析，暫時沒有發現明顯的交付延期風險。'
    }

    return 'No major delivery risks were detected based on the current project data.'
  }

  const projectNames = riskyProjects
    .map(
      (project) =>
        `${project.name} (${project.progress}%)`,
    )
    .join(', ')

  if (language === 'ja') {
    return (
      `納期リスクの可能性があるプロジェクトは ` +
      `${projectNames} です。` +
      `進捗状況を優先的に確認することを推奨します。`
    )
  }

  if (language === 'zh') {
    return (
      `目前可能存在交付風險的項目包括：${projectNames}。` +
      `建議優先確認這些項目的進度及交付計劃。`
    )
  }

  return (
    `Potential delivery risks were detected in: ` +
    `${projectNames}. ` +
    `These projects may require closer monitoring.`
  )
}

function generateMembers(
  language: AILanguage,
): string {
  const memberProjectCounts =
    teamMembers.map((member) => {
      const assignmentCount =
        projectAssignments.filter(
          (assignment) =>
            assignment.memberId === member.id,
        ).length

      return {
        member,
        assignmentCount,
      }
    })

  const availableMembers =
    memberProjectCounts
      .filter(
        ({ member, assignmentCount }) =>
          member.status === 'Available' &&
          assignmentCount < 3,
      )
      .sort(
        (a, b) =>
          a.assignmentCount -
          b.assignmentCount,
      )
      .slice(0, 3)

  if (availableMembers.length === 0) {
    if (language === 'ja') {
      return '現在、新しいプロジェクトにアサイン可能なメンバーは見つかりませんでした。'
    }

    if (language === 'zh') {
      return '目前沒有找到有足夠空餘容量可以加入新項目的成員。'
    }

    return 'No team members currently have sufficient capacity for a new assignment.'
  }

  const recommendations =
    availableMembers
      .map(
        ({ member, assignmentCount }) =>
          `${member.name} (${member.role}, ${assignmentCount})`,
      )
      .join(', ')

  if (language === 'ja') {
    return (
      `現在のアサイン状況から、` +
      `${recommendations} を候補として推奨します。`
    )
  }

  if (language === 'zh') {
    return (
      `根據目前的工作分配情況，` +
      `建議考慮以下成員：${recommendations}。`
    )
  }

  return (
    `Based on current assignments, ` +
    `I recommend: ${recommendations}.`
  )
}

function generateReport(
  language: AILanguage,
): string {
  const activeProjects = projects.filter(
    (project) =>
      project.status !== 'Completed',
  )

  const highProgressProjects =
    activeProjects.filter(
      (project) =>
        project.progress >= 70,
    )

  const lowProgressProjects =
    activeProjects.filter(
      (project) =>
        project.progress < 40,
    )

  if (language === 'ja') {
    return (
      `今週のプロジェクト状況：` +
      `進行中は${activeProjects.length}件です。` +
      `${highProgressProjects.length}件が進捗70%以上、` +
      `${lowProgressProjects.length}件が40%未満です。` +
      `進捗の低いプロジェクトについて、次回マイルストーンと納期を確認することを推奨します。`
    )
  }

  if (language === 'zh') {
    return (
      `本週項目報告：目前有 ${activeProjects.length} 個進行中的項目。` +
      `${highProgressProjects.length} 個項目的進度已達 70% 以上，` +
      `${lowProgressProjects.length} 個低於 40%。` +
      `建議優先確認低進度項目的下一個里程碑及交付日期。`
    )
  }

  return (
    `Weekly report: ${activeProjects.length} active projects. ` +
    `${highProgressProjects.length} are above 70% progress, while ` +
    `${lowProgressProjects.length} are below 40%. ` +
    `Review lower-progress projects and confirm upcoming delivery milestones.`
  )
}

export function generateAIResponse(
  text: string,
): string {
  const language = detectLanguage(text)
  const intent = detectIntent(text)

  if (intent === 'risks') {
    return generateRisks(language)
  }

  if (intent === 'members') {
    return generateMembers(language)
  }

  if (intent === 'report') {
    return generateReport(language)
  }

  return generateSummary(language)
}