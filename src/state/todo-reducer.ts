import { nanoid } from "nanoid"
import type { TODO_STATE } from "./todo-state"
import { TODO_ACTIONS } from "./todo-actions"
import { lang, TODO, TODO_ID } from "../lib/constants"

type StoreAction =
  | { type: TODO_ACTIONS.CREATE_TODO; payload: { todo: TODO } }
  | { type: TODO_ACTIONS.CREATE_EMPTY_TODO }
  | { type: TODO_ACTIONS.DELETE_TODO; payload: { id: TODO_ID } }
  | {
      type: TODO_ACTIONS.UPDATE_TODO_TEXT
      payload: { id: TODO_ID; todoText: string }
    }
  | { type: TODO_ACTIONS.TOGGLE_TODO_COMPLETION; payload: { id: TODO_ID } }

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
          },
        },
      }
    case TODO_ACTIONS.UPDATE_TODO_TEXT:
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [action.payload.id]: {
            ...state.todoItems[action.payload.id],
            todoText: action.payload.todoText,
          },
        },
      }
    case TODO_ACTIONS.TOGGLE_TODO_COMPLETION: {
      if (state.todoItems[action.payload.id]) {
        const newTodoItems = { ...state.todoItems }
        delete newTodoItems[action.payload.id]
        return {
          ...state,
          completedItems: {
            ...state.completedItems,
            [action.payload.id]: {
              ...state.todoItems[action.payload.id],
            },
          },
          todoItems: newTodoItems,
        }
      }
      const newTodoItems = { ...state.completedItems }
      delete newTodoItems[action.payload.id]
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [action.payload.id]: {
            ...state.completedItems[action.payload.id],
          },
        },
        completedItems: newTodoItems,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default todoReducer
