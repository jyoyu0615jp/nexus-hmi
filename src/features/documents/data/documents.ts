export type DocumentType =
  | 'PDF'
  | 'Figma'
  | 'Excel'
  | 'PowerPoint'
  | 'Specification'

export interface ProjectDocument {
  id: number
  projectId: number
  clientId: number
  vehicleModelId: number
  name: string
  type: DocumentType
  size: string
  updatedAt: string
  owner: string
}

export const documents: ProjectDocument[] = [
  {
    id: 1,
    projectId: 1,
    clientId: 1,
    vehicleModelId: 1,
    name: 'HMI Requirement Specification',
    type: 'PDF',
    size: '2.4 MB',
    updatedAt: '2026-08-10',
    owner: 'Yuki Tanaka',
  },
  {
    id: 2,
    projectId: 1,
    clientId: 1,
    vehicleModelId: 1,
    name: 'IVI Design System',
    type: 'Figma',
    size: '18.6 MB',
    updatedAt: '2026-08-09',
    owner: 'Haruto Sato',
  },
  {
    id: 3,
    projectId: 2,
    clientId: 2,
    vehicleModelId: 2,
    name: 'Meter Function List',
    type: 'Excel',
    size: '860 KB',
    updatedAt: '2026-08-08',
    owner: 'Mei Chen',
  },
  {
    id: 4,
    projectId: 3,
    clientId: 3,
    vehicleModelId: 3,
    name: '3D Model Review Report',
    type: 'PowerPoint',
    size: '6.8 MB',
    updatedAt: '2026-08-07',
    owner: 'Ken Ito',
  },
  {
    id: 5,
    projectId: 4,
    clientId: 4,
    vehicleModelId: 4,
    name: 'Meter UI Specification',
    type: 'Specification',
    size: '1.7 MB',
    updatedAt: '2026-08-06',
    owner: 'Alex Wong',
  },
  {
    id: 6,
    projectId: 2,
    clientId: 2,
    vehicleModelId: 2,
    name: 'Design Review Minutes',
    type: 'PDF',
    size: '740 KB',
    updatedAt: '2026-08-05',
    owner: 'Rina Suzuki',
  },
]