/* eslint-disable import/prefer-default-export */
import { useMemo } from "react"
import { TODO_STATE } from "./todo-state"

export const getCompletedTodos = (state: TODO_STATE): number =>
  useMemo(() => Object.keys(state.completedItems).length, [
    state.completedItems,
  ])
