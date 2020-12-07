import { nanoid } from "nanoid"
import type { TODO_STATE } from "./todo-state"
import { TODO_ACTIONS } from "./todo-actions"
import { lang, TODO, TODO_ID } from "../lib/constants"

type StoreAction =
  | { type: TODO_ACTIONS.CREATE_TODO; payload: { todo: TODO } }
  | { type: TODO_ACTIONS.CREATE_EMPTY_TODO }
  | { type: TODO_ACTIONS.DELETE_TODO; payload: { id: TODO_ID } }
  | { type: TODO_ACTIONS.UPDATE_TODO; payload: { id: TODO_ID; todo: TODO } }
  | { type: TODO_ACTIONS.COMPLETE_TODO; payload: { id: TODO_ID } }

const todoReducer = (state: TODO_STATE, action: StoreAction): TODO_STATE => {
  switch (action.type) {
    case TODO_ACTIONS.CREATE_TODO:
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [nanoid()]: {
            ...action.payload.todo,
          },
        },
      }
    case TODO_ACTIONS.CREATE_EMPTY_TODO:
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [nanoid()]: {
            priority: "medium",
            todoText: lang.newTodo,
            isCompleted: false,
          },
        },
      }
    case TODO_ACTIONS.UPDATE_TODO:
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [action.payload.id]: {
            ...action.payload.todo,
          },
        },
      }
    default:
      return {
        ...state,
      }
  }
}

export default todoReducer
