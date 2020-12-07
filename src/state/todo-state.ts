import { TODO, TODO_ID, lang } from "../lib/constants"

export type TODO_STATE = {
  todoItems: Record<TODO_ID, TODO>
  completedItems: Record<TODO_ID, TODO>
}

export const initialState = {
  todoItems: {
    "V1StGXR8_Z5jdHi6B-myT": {
      priority: "medium",
      todoText: lang.exampleTodo,
      isCompleted: false,
    },
  },
  completedItems: {},
} as TODO_STATE
