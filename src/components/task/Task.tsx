import React from "react"
import { DebounceInput } from "react-debounce-input"
import { TODO_ID, TODO_PRIORITIES, lang } from "../../lib/constants"

import styles from "./task.css"

const Task = ({
  id,
  isCompleted = false,
  todoText,
  priority,
  createEmptyTodo,
  updateTodoText,
  toggleTaskCompletion,
  setTaskPriority,
}: {
  id: string
  isCompleted?: boolean
  todoText: string
  priority: keyof typeof TODO_PRIORITIES
  createEmptyTodo?: () => void
  updateTodoText?: (todoId: TODO_ID, text: string) => void
  toggleTaskCompletion: (todoId: TODO_ID) => void
  setTaskPriority?: (
    todoId: TODO_ID,
    todoPriority: keyof typeof TODO_PRIORITIES
  ) => void
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
        <DebounceInput
          id={id}
          autoFocus
          type="text"
          className={styles.input}
          value={todoText}
          minLength={2}
          debounceTimeout={300}
          placeholder="Create a new todo item"
          onKeyDown={({ key }: { key: string }): void => {
            if (key === "Enter") createEmptyTodo()
          }}
          onChange={(event): void => {
            updateTodoText(id, event.target.value)
          }}
          disabled={updateTodoText === undefined}
        />
        <label className={styles.visuallyHidden} htmlFor={id}>
          {lang.todoPriorityLabel}
        </label>
        <select
          value={priority}
          className={styles.priority}
          onChange={(event): void => {
            // NOTE: I don't know of a better way to do this...
            const value = +event.target.value as keyof typeof TODO_PRIORITIES
            setTaskPriority(id, value)
          }}
        >
          {Object.keys(TODO_PRIORITIES).map((todoPriority) => (
            <option key={TODO_PRIORITIES[todoPriority]} value={todoPriority}>
              {TODO_PRIORITIES[todoPriority]}
            </option>
          ))}
        </select>
      </>
    ) : (
      <>
        <div className={styles.completedTodoText}>{todoText}</div>
        <div className={styles.completedTodoPriority}>
          {TODO_PRIORITIES[priority]}
        </div>
      </>
    )}
  </div>
)

export default Task
