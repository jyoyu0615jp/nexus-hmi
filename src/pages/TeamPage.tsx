import { useState } from 'react'

import FilterToolbar from '../components/common/FilterToolbar'
import TeamMemberList from '../features/team/components/TeamMemberList'
import { teamMembers } from '../features/team/data/teamMembers'

import type {
  MemberStatus,
  TeamMember,
} from '../features/team/types/teamMember'

type DepartmentFilter =
  | 'All'
  | TeamMember['department']

type StatusFilter =
  | 'All'
  | MemberStatus

function TeamPage() {
  const [searchTerm, setSearchTerm] =
    useState('')

  const [
    departmentFilter,
    setDepartmentFilter,
  ] =
    useState<DepartmentFilter>('All')

  const [
    statusFilter,
    setStatusFilter,
  ] =
    useState<StatusFilter>('All')

  const filteredMembers =
    teamMembers.filter((member) => {
      const keyword =
        searchTerm.trim().toLowerCase()

      const matchesSearch =
        member.name
          .toLowerCase()
          .includes(keyword) ||
        member.role
          .toLowerCase()
          .includes(keyword) ||
        member.department
          .toLowerCase()
          .includes(keyword)

      const matchesDepartment =
        departmentFilter === 'All' ||
        member.department ===
          departmentFilter

      const matchesStatus =
        statusFilter === 'All' ||
        member.status === statusFilter

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      )
    })

  const hasActiveFilters =
    searchTerm !== '' ||
    departmentFilter !== 'All' ||
    statusFilter !== 'All'

  function clearFilters() {
    setSearchTerm('')
    setDepartmentFilter('All')
    setStatusFilter('All')
  }

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">
          チーム
        </h1>

        <p className="page__description">
          プロジェクトメンバーの役割、
          所属部署、稼働状況を確認します。
        </p>
      </header>

      <FilterToolbar
        searchPlaceholder="氏名、役割、部署で検索"
        searchValue={searchTerm}
        onSearchChange={setSearchTerm}
      >
        <div className="filter-toolbar__field">
          <label
            className="filter-toolbar__label"
            htmlFor="department-filter"
          >
            部署
          </label>

          <select
            id="department-filter"
            className="filter-toolbar__select"
            value={departmentFilter}
            onChange={(event) =>
              setDepartmentFilter(
                event.target
                  .value as DepartmentFilter,
              )
            }
          >
            <option value="All">
              すべての部署
            </option>

            <option value="Project Management">
              プロジェクト管理
            </option>

            <option value="HMI Design">
              HMIデザイン
            </option>

            <option value="Experience Design">
              エクスペリエンスデザイン
            </option>

            <option value="3D Production">
              3D制作
            </option>

            <option value="Engineering">
              エンジニアリング
            </option>

            <option value="Quality Assurance">
              品質保証
            </option>
          </select>
        </div>

        <div className="filter-toolbar__field">
          <label
            className="filter-toolbar__label"
            htmlFor="member-status-filter"
          >
            稼働状況
          </label>

          <select
            id="member-status-filter"
            className="filter-toolbar__select"
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

            <option value="Available">
              対応可能
            </option>

            <option value="Busy">
              稼働中
            </option>

            <option value="On Leave">
              休暇中
            </option>
          </select>
        </div>

        {hasActiveFilters && (
          <button
            className="filter-toolbar__clear"
            type="button"
            onClick={clearFilters}
          >
            フィルターをクリア
          </button>
        )}
      </FilterToolbar>

      <TeamMemberList
        members={filteredMembers}
      />
    </div>
  )
}

export default TeamPage