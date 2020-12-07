import React, { useReducer } from "react"
import todoReducer from "./state/todo-reducer"
import { initialState } from "./state/todo-state"
import { TODO_ACTIONS } from "./state/todo-actions"
import Task from "./components/task/Task"

const App = (): React.ReactElement => {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  return (
    <div>
      <h1>Todo App</h1>
      {state.todoItems.map(({ id, todoText, isCompleted }) => (
        <Task
          key={id}
          id={id}
          todoText={todoText}
          isCompleted={isCompleted}
          createEmptyTodo={(): void =>
            dispatch({ type: TODO_ACTIONS.CREATE_EMPTY_TODO })
          }
        />
      ))}
    </div>
  )
}

export default App
