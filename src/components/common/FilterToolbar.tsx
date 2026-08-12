import './filter-toolbar.css'

interface FilterToolbarProps {
  searchPlaceholder: string
  searchValue: string
  onSearchChange: (
    value: string,
  ) => void

  children?: React.ReactNode
}

function FilterToolbar({
  searchPlaceholder,
  searchValue,
  onSearchChange,
  children,
}: FilterToolbarProps) {
  return (
    <div className="filter-toolbar">
      <div className="filter-toolbar__field">
        <label
          className="filter-toolbar__label"
          htmlFor="toolbar-search"
        >
          Search
        </label>

        <div className="filter-toolbar__input-wrapper">
          <span
            className="filter-toolbar__icon"
          >
            ⌕
          </span>

          <input
            id="toolbar-search"
            className="filter-toolbar__input"
            type="search"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(event) =>
              onSearchChange(
                event.target.value,
              )
            }
          />
        </div>
      </div>

      {children}
    </div>
  )
}

export default FilterToolbar