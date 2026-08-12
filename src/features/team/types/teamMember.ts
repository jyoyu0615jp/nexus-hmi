export type TeamRole =
  | 'Project Manager'
  | 'UI Designer'
  | 'UX Designer'
  | '3D Artist'
  | 'Frontend Engineer'
  | 'QA Engineer'

export type MemberStatus =
  | 'Available'
  | 'Busy'
  | 'On Leave'

export interface TeamMember {
  id: number
  name: string
  role: TeamRole
  department: string
  status: MemberStatus
}