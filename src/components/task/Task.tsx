import React from "react"
import { TODO_ID } from "../../lib/constants"

import styles from "./task.css"

const Task = ({
  id,
  isCompleted = false,
  todoText,
  createEmptyTodo,
  updateTodoText,
}: {
  id: string
  isCompleted: boolean
  todoText: string
  createEmptyTodo: () => void
  updateTodoText: (todoId: TODO_ID, text: string) => void
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
    <label className={styles.visuallyHidden} htmlFor={id}>
      New Todo
    </label>
    <input
      id={id}
      autoFocus
      type="text"
      className={styles.input}
      value={todoText}
      placeholder="Create a new todo item"
      onKeyDown={({ key }: { key: string }): void => {
        if (key === "Enter") createEmptyTodo()
      }}
      onChange={(event): void => {
        updateTodoText(id, event.target.value)
      }}
    />
  </div>
)

export default Task
