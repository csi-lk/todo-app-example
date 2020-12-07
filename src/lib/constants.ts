export enum TODO_PRIORITIES {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export type TODO_ID = string

export type TODO = {
  priority: TODO_PRIORITIES
  todoText: string
}

export const lang = {
  newTodo: "Create a new todo item",
  exampleTodo: "This is an example todo",
  exampleCompletedTodo: "This is an example completed todo",
  todoInputLabel: "Update todo:",
  checkboxInputLabel: "Toggle todo completion",
  todoPriorityLabel: "Todo priority",
  completedTasks: "Completed Tasks",
  openTasks: "Open Tasks",
  total: "Total",
}
