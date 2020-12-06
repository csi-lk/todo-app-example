import React from "react"
import { render } from "react-dom"

import "./index.css"

const rootElement = document.querySelector("#pwc-todo-app")

const App = (): React.ReactElement => (
  <div>
    <h1>Todo App</h1>
  </div>
)

render(<App />, rootElement)
