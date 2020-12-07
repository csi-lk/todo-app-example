import React from "react"
import { TODO_ID, lang } from "../../lib/constants"

import styles from "./task.css"

const Task = ({
  id,
  isCompleted = false,
  todoText,
  createEmptyTodo,
  updateTodoText,
  toggleTaskCompletion,
}: {
  id: string
  isCompleted?: boolean
  todoText: string
  createEmptyTodo?: () => void
  updateTodoText?: (todoId: TODO_ID, text: string) => void
  toggleTaskCompletion: (todoId: TODO_ID) => void
}): React.ReactElement => (
  <div className={styles.task} data-testid={id}>
    <label className={styles.visuallyHidden} htmlFor={`${id}-checkbox`}>
      {lang.checkboxInputLabel}
    </label>
    <input
      id={`${id}-checkbox`}
      type="checkbox"
      className={styles.checkbox}
      checked={isCompleted}
      onChange={(): void => toggleTaskCompletion(id)}
    />
    {!isCompleted ? (
      <>
        <label className={styles.visuallyHidden} htmlFor={id}>
          {lang.todoInputLabel}
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
          disabled={updateTodoText === undefined}
        />
      </>
    ) : (
      <div className={styles.completedTodo}>{todoText}</div>
    )}
  </div>
)

export default Task
