import { useState } from 'react'

import {
  Plus,
} from 'lucide-react'

import {
  Link,
} from 'react-router'

import ProjectList from '../features/projects/components/ProjectList'
import { projects } from '../features/projects/data/projects'
import { clients } from '../features/clients/data/clients'

import type {
  ProjectStatus,
} from '../features/projects/types/project'

import '../features/projects/components/project-toolbar.css'

type StatusFilter =
  | 'All'
  | ProjectStatus

function ProjectsPage() {
  const [
    searchTerm,
    setSearchTerm,
  ] = useState('')

  const [
    statusFilter,
    setStatusFilter,
  ] = useState<StatusFilter>('All')

  const filteredProjects =
    projects.filter((project) => {
      const keyword =
        searchTerm
          .trim()
          .toLowerCase()

      const client = clients.find(
        (client) =>
          client.id === project.clientId,
      )

      const clientName =
        client?.name
          .toLowerCase() ?? ''

      const matchesSearch =
        project.name
          .toLowerCase()
          .includes(keyword) ||
        clientName.includes(keyword) ||
        project.platform
          .toLowerCase()
          .includes(keyword)

      const matchesStatus =
        statusFilter === 'All' ||
        project.status === statusFilter

      return (
        matchesSearch &&
        matchesStatus
      )
    })

  const hasActiveFilters =
    searchTerm !== '' ||
    statusFilter !== 'All'

  function clearFilters() {
    setSearchTerm('')
    setStatusFilter('All')
  }

  return (
    <div className="page">
      <header className="page__header projects-page__header">
        <div>
          <h1 className="page__title">
            HMIプロジェクト
          </h1>

          <p className="page__description">
            車載HMIデザインプロジェクトの
            プラットフォーム、市場、
            進捗状況を管理します。
          </p>
        </div>

        <Link
          className="projects-create-button"
          to="/projects/new"
        >
          <Plus
            size={18}
            aria-hidden="true"
          />

          新規プロジェクト
        </Link>
      </header>

      <div className="project-toolbar">
        <div className="project-toolbar__field">
          <label
            className="project-toolbar__label"
            htmlFor="project-search"
          >
            プロジェクト検索
          </label>

          <div className="project-toolbar__input-wrapper">
            <span
              className="project-toolbar__search-icon"
              aria-hidden="true"
            >
              ⌕
            </span>

            <input
              id="project-search"
              className="project-toolbar__input"
              type="search"
              placeholder="プロジェクト名、クライアント、プラットフォームで検索"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(
                  event.target.value,
                )
              }
            />
          </div>
        </div>

        <div className="project-toolbar__field">
          <label
            className="project-toolbar__label"
            htmlFor="status-filter"
          >
            ステータス
          </label>

          <select
            id="status-filter"
            className="project-toolbar__select"
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(
                event.target
                  .value as StatusFilter,
              )
            }
          >
            <option value="All">
              すべて
            </option>

            <option value="Planning">
              計画中
            </option>

            <option value="In Progress">
              進行中
            </option>

            <option value="Design Review">
              デザインレビュー
            </option>

            <option value="Completed">
              完了
            </option>
          </select>
        </div>

        {hasActiveFilters && (
          <button
            className="project-toolbar__clear"
            type="button"
            onClick={clearFilters}
          >
            フィルターをクリア
          </button>
        )}
      </div>

      <ProjectList
        projects={filteredProjects}
      />
    </div>
  )
}

export default ProjectsPage