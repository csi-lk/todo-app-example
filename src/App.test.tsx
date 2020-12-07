/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import React from "react"
import { initialState } from "./state/todo-state"

import App from "./App"

describe("TodoApp", () => {
  it("renders with default todo", async () => {
    const { getByTestId } = render(<App />)
    expect(
      getByTestId(Object.keys(initialState.todoItems)[0])
    ).toBeInTheDocument()
  })
  it("renders new todo field when pressing enter", async () => {
    const { getByLabelText, getAllByLabelText } = render(<App />)
    fireEvent.keyDown(getByLabelText("New Todo", { selector: "input" }), {
      key: "Enter",
      code: "Enter",
    })
    expect(getAllByLabelText("New Todo")).toHaveLength(2)
  })
})
