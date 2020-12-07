import { TODO } from "../lib/constants"

export type TODO_STATE = {
  todoItems: TODO[]
  completedItems: TODO[]
}

export const initialState = {
  todoItems: [],
} as TODO_STATE
