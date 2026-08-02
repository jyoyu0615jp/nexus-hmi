export type HmiPlatform =
  | 'IVI'
  | 'Meter'
  | 'HVAC'
  | 'ADAS'
  | 'Mobile App'

export type ProjectStatus =
  | 'Planning'
  | 'In Progress'
  | 'Design Review'
  | 'Completed'

export type TargetMarket =
  | 'Japan'
  | 'China'
  | 'Global'

export interface HmiProject {
  id: number
  name: string
  client: string
  platform: HmiPlatform
  market: TargetMarket
  status: ProjectStatus
  progress: number
}