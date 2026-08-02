import type { HmiProject } from '../types/project'

export const projects: HmiProject[] = [
  {
    id: 1,
    name: 'Global EV SUV IVI',
    client: 'Global OEM A',
    platform: 'IVI',
    market: 'Global',
    status: 'In Progress',
    progress: 72,
  },
  {
    id: 2,
    name: 'Premium Sedan Meter',
    client: 'Japanese OEM B',
    platform: 'Meter',
    market: 'Japan',
    status: 'Design Review',
    progress: 88,
  },
  {
    id: 3,
    name: 'China Market HVAC UI',
    client: 'Automotive Supplier C',
    platform: 'HVAC',
    market: 'China',
    status: 'Completed',
    progress: 100,
  },
  {
    id: 4,
    name: 'ADAS Visualization Concept',
    client: 'Mobility Company D',
    platform: 'ADAS',
    market: 'Global',
    status: 'Planning',
    progress: 24,
  },
]