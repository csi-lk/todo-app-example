/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import React from "react"
import { initialState } from "./state/todo-state"

import App from "./App"

describe("TodoApp", () => {
  it("renders with default todo", async () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId(initialState.todoItems[0].id)).toBeInTheDocument()
  })
})
