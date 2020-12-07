import { nanoid } from "nanoid"
import type { TODO_STATE } from "./todo-state"
import { TODO_ACTIONS } from "./todo-actions"
import { lang, TODO } from "../lib/constants"

type StoreAction =
  | { type: TODO_ACTIONS.CREATE_TODO; payload: { todo: TODO } }
  | { type: TODO_ACTIONS.CREATE_EMPTY_TODO }
  | { type: TODO_ACTIONS.DELETE_TODO }
  | { type: TODO_ACTIONS.UPDATE_TODO }
  | { type: TODO_ACTIONS.COMPLETE_TODO }

const todoReducer = (state: TODO_STATE, action: StoreAction): TODO_STATE => {
  switch (action.type) {
    case TODO_ACTIONS.CREATE_TODO:
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            ...action.payload.todo,
            id: nanoid(),
          },
        ],
      }
    case TODO_ACTIONS.CREATE_EMPTY_TODO:
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            id: nanoid(),
            priority: "medium",
            todoText: lang.newTodo,
            isCompleted: false,
          },
        ],
      }
    default:
      return {
        ...state,
      }
  }
}

export default todoReducer
