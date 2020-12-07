import React from "react"

import { TODO } from "../../lib/constants"

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
    <label htmlFor="sort-todos">Sort by:</label>
    <select
      id="sort-todos"
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
