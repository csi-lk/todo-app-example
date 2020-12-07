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
      // NOTE: Just convert values to string and localeCompare them for an easy sort
      Object.keys(state.todoItems).sort((a, b) => {
        const firstItem = state.todoItems[a][state.sortBy].toString()
        const secondItem = state.todoItems[b][state.sortBy].toString()
        if (state.sortDirection === "ascending")
          return firstItem.localeCompare(secondItem)
        return secondItem.localeCompare(firstItem)
      }),
    [state.todoItems, state.sortBy, state.sortDirection]
  )
