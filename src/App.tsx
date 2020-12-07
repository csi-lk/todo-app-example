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
      {Object.keys(state.todoItems).map((id) => (
        <Task
          key={id}
          id={id}
          todoText={state.todoItems[id].todoText}
          createEmptyTodo={(): void =>
            dispatch({ type: TODO_ACTIONS.CREATE_EMPTY_TODO })
          }
          updateTodoText={(todoId, todoText): void =>
            dispatch({
              type: TODO_ACTIONS.UPDATE_TODO_TEXT,
              payload: { id: todoId, todoText },
            })
          }
          toggleTaskCompletion={(todoId): void =>
            dispatch({
              type: TODO_ACTIONS.TOGGLE_TODO_COMPLETION,
              payload: { id: todoId },
            })
          }
        />
      ))}
      {Object.keys(state.completedItems).map((id) => (
        <Task
          key={id}
          id={id}
          isCompleted
          todoText={state.completedItems[id].todoText}
          toggleTaskCompletion={(todoId): void =>
            dispatch({
              type: TODO_ACTIONS.TOGGLE_TODO_COMPLETION,
              payload: { id: todoId },
            })
          }
        />
      ))}
    </div>
  )
}

export default App
