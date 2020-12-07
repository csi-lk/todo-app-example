/* eslint-disable import/prefer-default-export */
import { useMemo } from "react"
import { TODO_ID } from "../lib/constants"
import { TODO_STATE } from "./todo-state"

export const getOpenTodos = (state: TODO_STATE): number =>
  useMemo(() => Object.keys(state.todoItems).length, [state.todoItems])

export const getCompletedTodos = (state: TODO_STATE): number =>
  useMemo(() => Object.keys(state.completedItems).length, [
    state.completedItems,
  ])

export const getOpenTodoIdsSorted = (state: TODO_STATE): TODO_ID[] =>
  useMemo(
    () =>
      Object.keys(state.todoItems).sort((a, b) =>
        state.todoItems[a][state.sortBy].localeCompare(
          state.todoItems[b][state.sortBy]
        )
      ),
    [state.todoItems]
  )
