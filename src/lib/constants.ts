export type TODO_PRIORITIES = "low" | "medium" | "high"

export type TODO = {
  id: string
  priority: TODO_PRIORITIES
  todoText: string
  isCompleted: boolean
  completionDate?: Date
}
