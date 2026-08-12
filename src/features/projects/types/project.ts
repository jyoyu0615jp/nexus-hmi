export type HmiPlatform =
  | 'IVI'
  | 'Meter'
  | 'HVAC'
  | 'ADAS'
  | '3D Model'

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
  clientId: number
  vehicleModelId: number
  platform: HmiPlatform
  market: TargetMarket
  status: ProjectStatus
  progress: number
  startDate: string
  dueDate: string
  description: string
}