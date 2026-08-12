import type { HmiProject } from '../types/project'

export const projects: HmiProject[] = [
  {
    id: 1,
    name: 'Accord IVI Interface',
    clientId: 1,
    vehicleModelId: 1,
    platform: 'IVI',
    market: 'Global',
    status: 'In Progress',
    progress: 72,
    startDate: '2026-06-01',
    dueDate: '2026-10-30',
    description:
      'IVI画面デザイン、インタラクションフロー設計、ビジュアル仕様策定を支援するプロジェクトです。',
  },
  {
    id: 2,
    name: 'PZ1A Meter Design',
    clientId: 2,
    vehicleModelId: 2,
    platform: 'Meter',
    market: 'Japan',
    status: 'Design Review',
    progress: 88,
    startDate: '2026-05-15',
    dueDate: '2026-09-15',
    description:
      'メーター画面のビジュアル設計、警告表示のレビュー、量産用アセット準備を行うプロジェクトです。',
  },
  {
    id: 3,
    name: 'ELF 3D Vehicle Model',
    clientId: 3,
    vehicleModelId: 3,
    platform: '3D Model',
    market: 'Japan',
    status: 'Completed',
    progress: 100,
    startDate: '2026-03-01',
    dueDate: '2026-07-31',
    description:
      'HMI表示環境向けの車両3Dモデリングおよびレンダリングアセットを制作するプロジェクトです。',
  },
  {
    id: 4,
    name: 'bZ4X ADAS Visualization',
    clientId: 4,
    vehicleModelId: 4,
    platform: 'ADAS',
    market: 'Global',
    status: 'Planning',
    progress: 24,
    startDate: '2026-09-01',
    dueDate: '2027-02-20',
    description:
      'ADAS表示コンセプトの検討と、ドライバー向け情報階層の設計を行うプロジェクトです。',
  },
]