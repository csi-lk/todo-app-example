import React from "react"

import styles from "./task.css"

const Task = ({
  isCompleted = false,
  todoText,
}: {
  isCompleted: boolean
  todoText: string
}): React.ReactElement => (
  <div className={styles.task}>
    <label>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isCompleted}
      />
      <div className={styles.fakeCheckbox} />
    </label>
    <input
      type="text"
      className={styles.input}
      value={todoText}
      placeholder="Create a new todo item"
    />
  </div>
)

export default Task
