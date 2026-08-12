import type { TeamRole } from './teamMember'

export interface ProjectAssignment {
  id: number
  projectId: number
  memberId: number
  role: TeamRole
}