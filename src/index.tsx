import React from "react"
import { render } from "react-dom"
import Task from "./components/task/Task"

import "./index.css"

const rootElement = document.querySelector("#pwc-todo-app")

const App = (): React.ReactElement => (
  <div>
    <h1>Todo App</h1>
    <Task />
  </div>
)

render(<App />, rootElement)
