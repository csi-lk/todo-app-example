import React from "react"

import styles from "./task.css"

const Task = ({
  id,
  isCompleted = false,
  todoText,
}: {
  id: string
  isCompleted: boolean
  todoText: string
}): React.ReactElement => (
  <div className={styles.task} data-testid={id}>
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
