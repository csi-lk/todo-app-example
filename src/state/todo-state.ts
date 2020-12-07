import { TODO, TODO_ID, lang } from "../lib/constants"

export type TODO_STATE = {
  todoItems: Record<TODO_ID, TODO>
  completedItems: Record<TODO_ID, TODO>
}

export const initialState = {
  todoItems: {
    V1StGXR8Z5jdHi6BmyT: {
      priority: "medium",
      todoText: lang.exampleTodo,
    },
  },
  completedItems: {
    b1tXtSS28vJTVtZ8tn3de: {
      priority: "medium",
      todoText: lang.exampleCompletedTodo,
    },
  },
} as TODO_STATE
