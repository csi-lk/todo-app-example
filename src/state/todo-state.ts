import { TODO, TODO_ID, lang } from "../lib/constants"

export type TODO_STATE = {
  todoItems: Record<TODO_ID, TODO>
  completedItems: Record<TODO_ID, TODO>
  sortBy: keyof TODO
  sortDirection: "ascending" | "decending"
}

export const initialState = {
  sortBy: "todoText",
  sortDirection: "decending",
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
