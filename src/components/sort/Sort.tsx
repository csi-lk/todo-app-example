import React from "react"

import { lang, TODO } from "../../lib/constants"

import styles from "./sort.css"

const Sort = ({
  sortBy,
  sortDirection,
  setSortBy,
  setSortDirection,
}: {
  sortBy: keyof TODO
  sortDirection: "ascending" | "decending"
  setSortBy: (sortGloballyBy: keyof TODO) => void
  setSortDirection: (sortGlobalDirection: "ascending" | "decending") => void
}): React.ReactElement => (
  <div className={styles.sort}>
    <label htmlFor="sort-todos">{lang.sortBy}</label>
    <select
      id="sort-todos"
      data-testid="sort-todos-by"
      value={sortBy}
      onChange={(event): void => {
        // NOTE: I don't know of a better way to do this...
        const value = event.target.value as keyof TODO
        setSortBy(value)
      }}
    >
      <option value="priority">Priority</option>
      <option value="todoText">Text</option>
    </select>
    <select
      data-testid="sort-todos-direction"
      value={sortDirection}
      onChange={(event): void => {
        // NOTE: I don't know of a better way to do this...
        const value = event.target.value as "ascending" | "decending"
        setSortDirection(value)
      }}
    >
      <option value="ascending">Ascending</option>
      <option value="decending">Decending</option>
    </select>
  </div>
)

export default Sort
