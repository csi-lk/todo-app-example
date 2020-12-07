import { nanoid } from "nanoid"
import type { TODO_STATE } from "./todo-state"
import { TODO_ACTIONS } from "./todo-actions"
import { lang, TODO, TODO_ID, TODO_PRIORITIES } from "../lib/constants"

type StoreAction =
  | { type: TODO_ACTIONS.CREATE_TODO; payload: { todo: TODO } }
  | { type: TODO_ACTIONS.CREATE_EMPTY_TODO }
  | { type: TODO_ACTIONS.DELETE_TODO; payload: { id: TODO_ID } }
  | {
      type: TODO_ACTIONS.UPDATE_TODO_TEXT
      payload: { id: TODO_ID; todoText: string }
    }
  | { type: TODO_ACTIONS.TOGGLE_TODO_COMPLETION; payload: { id: TODO_ID } }
  | {
      type: TODO_ACTIONS.SET_TODO_PRIORITY
      payload: { id: TODO_ID; priority: keyof typeof TODO_PRIORITIES }
    }
  | {
      type: TODO_ACTIONS.SET_SORT_BY
      payload: { sortBy: keyof TODO }
    }
  | {
      type: TODO_ACTIONS.SET_SORT_DIRECTION
      payload: { sortDirection: "ascending" | "decending" }
    }

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
            priority: 1,
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
    case TODO_ACTIONS.SET_TODO_PRIORITY: {
      return {
        ...state,
        todoItems: {
          ...state.todoItems,
          [action.payload.id]: {
            ...state.todoItems[action.payload.id],
            priority: action.payload.priority,
          },
        },
      }
    }
    case TODO_ACTIONS.SET_SORT_BY:
      return {
        ...state,
        sortBy: action.payload.sortBy,
      }
    case TODO_ACTIONS.SET_SORT_DIRECTION:
      return {
        ...state,
        sortDirection: action.payload.sortDirection,
      }
    default:
      return {
        ...state,
      }
  }
}

export default todoReducer
