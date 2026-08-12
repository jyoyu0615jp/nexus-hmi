export const roleLabels: Record<
  string,
  string
> = {
  'Project Manager':
    'プロジェクトマネージャー',

  'UI Designer':
    'UIデザイナー',

  'UX Designer':
    'UXデザイナー',

  'Frontend Engineer':
    'フロントエンドエンジニア',

  'QA Engineer':
    'QAエンジニア',

  '3D Artist':
    '3Dアーティスト',
}

export const departmentLabels: Record<
  string,
  string
> = {
  'Project Management':
    'プロジェクト管理',

  'HMI Design':
    'HMIデザイン',

  'Experience Design':
    'エクスペリエンスデザイン',

  '3D Production':
    '3D制作',

  Engineering:
    'エンジニアリング',

  'Quality Assurance':
    '品質保証',
}

export function getRoleLabel(
  role: string,
) {
  return roleLabels[role] ?? role
}

export function getDepartmentLabel(
  department: string,
) {
  return (
    departmentLabels[department] ??
    department
  )
}