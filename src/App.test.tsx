/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom"
import { render, fireEvent } from "@testing-library/react"
import React from "react"
import { initialState } from "./state/todo-state"
import { lang } from "./lib/constants"

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
    fireEvent.keyDown(
      getByLabelText(lang.todoInputLabel, { selector: "input" }),
      {
        key: "Enter",
        code: "Enter",
      }
    )
    expect(getAllByLabelText(lang.todoInputLabel)).toHaveLength(2)
  })
  it("handles updating todo text", async () => {
    const { getByLabelText } = render(<App />)
    const input = getByLabelText(lang.todoInputLabel, { selector: "input" })
    fireEvent.change(input, { target: { value: "a" } })
    expect(input.value).toBe("a")
  })

  describe("completion", () => {
    it("allows user to complete todo", async () => {
      const { getAllByLabelText, queryByLabelText } = render(<App />)
      const input = getAllByLabelText(lang.checkboxInputLabel, {
        selector: "input",
      })[0]
      expect(input.checked).toBe(false)
      // NOTE: Checkboxes should be clicked not 'changed'
      fireEvent.click(input)
      // NOTE: Can no longer change input of your todo when 'done'
      expect(
        queryByLabelText(lang.todoInputLabel, { selector: "input" })
      ).not.toBeInTheDocument()
    })
  })
})
