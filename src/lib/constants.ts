export type TODO_PRIORITIES = "low" | "medium" | "high"

export type TODO_ID = string

export type TODO = {
  priority: TODO_PRIORITIES
  todoText: string
  completionDate?: Date
}

export const lang = {
  newTodo: "Create a new todo item",
  exampleTodo: "This is an example todo",
  exampleCompletedTodo: " This is an example completed todo",
  todoInputLabel: "Update todo:",
  checkboxInputLabel: "Toggle todo completion",
}
