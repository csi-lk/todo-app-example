import { TODO, lang } from "../lib/constants"

export type TODO_STATE = {
  todoItems: TODO[]
  completedItems: TODO[]
}

export const initialState = {
  todoItems: [
    {
      id: "V1StGXR8_Z5jdHi6B-myT",
      priority: "medium",
      todoText: lang.exampleTodo,
      isCompleted: false,
    },
  ],
} as TODO_STATE
