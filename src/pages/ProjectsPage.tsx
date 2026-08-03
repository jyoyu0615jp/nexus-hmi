import { useState } from 'react'

import ProjectList from '../features/projects/components/ProjectList'
import { projects } from '../features/projects/data/projects'
import type { ProjectStatus } from '../features/projects/types/project'

type StatusFilter = 'All' | ProjectStatus

function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] =
    useState<StatusFilter>('All')

  const filteredProjects = projects.filter((project) => {
    const keyword = searchTerm.toLowerCase()

    const matchesSearch =
      project.name.toLowerCase().includes(keyword) ||
      project.client.toLowerCase().includes(keyword) ||
      project.platform.toLowerCase().includes(keyword)

    const matchesStatus =
      statusFilter === 'All' ||
      project.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const hasActiveFilters =
    searchTerm !== '' || statusFilter !== 'All'

  function clearFilters() {
    setSearchTerm('')
    setStatusFilter('All')
  }

  return (
    <section>
      <h1>HMI Projects</h1>

      <p>
        Track automotive HMI design projects across different platforms,
        markets and delivery stages.
      </p>

      <div>
        <div>
          <label htmlFor="project-search">
            Search projects
          </label>

          <input
            id="project-search"
            type="search"
            placeholder="Search by project, client or platform"
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="status-filter">
            Project status
          </label>

          <select
            id="status-filter"
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(
                event.target.value as StatusFilter,
              )
            }
          >
            <option value="All">All statuses</option>
            <option value="Planning">Planning</option>
            <option value="In Progress">
              In Progress
            </option>
            <option value="Design Review">
              Design Review
            </option>
            <option value="Completed">
              Completed
            </option>
          </select>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
          >
            Clear filters
          </button>
        )}
      </div>

      <ProjectList projects={filteredProjects} />
    </section>
  )
}

export default ProjectsPage