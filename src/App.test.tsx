/* eslint-disable import/no-extraneous-dependencies */
import "@testing-library/jest-dom"
import { render, fireEvent, within } from "@testing-library/react"
import React from "react"
import { lang } from "./lib/constants"

import App from "./App"

describe("TodoApp", () => {
  describe("basic functionality", () => {
    it("renders with default todo", async () => {
      const { getByLabelText } = render(<App />)
      expect(getByLabelText(lang.todoInputLabel)).toBeInTheDocument()
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
      expect(input).toHaveValue("a")
    })
  })

  describe("completion", () => {
    it("allows user to complete todo", async () => {
      const { getByTestId, queryByLabelText } = render(<App />)

      const { getByLabelText } = within(getByTestId("new-todos"))
      const input = getByLabelText(lang.checkboxInputLabel, {
        selector: "input",
      })

      expect(input).not.toBeChecked()
      // NOTE: Checkboxes should be clicked not 'changed'
      fireEvent.click(input)
      // NOTE: Can no longer change input of your todo when 'done'
      expect(
        queryByLabelText(lang.todoInputLabel, { selector: "input" })
      ).not.toBeInTheDocument()
    })
    it("allows user to un-complete todo", async () => {
      const { getByTestId, queryAllByLabelText } = render(<App />)

      const { getByLabelText } = within(getByTestId("completed-todos"))
      const input = getByLabelText(lang.checkboxInputLabel, {
        selector: "input",
      })
      expect(input).toBeChecked()
      fireEvent.click(input)
      expect(
        queryAllByLabelText(lang.todoInputLabel, { selector: "input" })
      ).toHaveLength(2)
    })
  })

  describe("count", () => {
    it("counts the amount of open tasks", async () => {
      const { getByLabelText, getAllByTestId } = render(<App />)
      const firstInputText = getByLabelText(lang.todoInputLabel, {
        selector: "input",
      })
      // Create a new todo
      fireEvent.keyDown(firstInputText, {
        key: "Enter",
        code: "Enter",
      })
      fireEvent.keyDown(firstInputText, {
        key: "Enter",
        code: "Enter",
      })
      expect(getAllByTestId("task-count")[0]).toHaveTextContent("3")
    })

    it("counts the amount of closed tasks", async () => {
      const { getByTestId } = render(<App />)
      const { getByLabelText, getAllByLabelText } = within(
        getByTestId("new-todos")
      )
      const { getByTestId: getByTestIdWithinCompleted } = within(
        getByTestId("completed-todos")
      )
      const firstInputText = getByLabelText(lang.todoInputLabel, {
        selector: "input",
      })
      // Create a new todo
      fireEvent.keyDown(firstInputText, {
        key: "Enter",
        code: "Enter",
      })
      fireEvent.keyDown(firstInputText, {
        key: "Enter",
        code: "Enter",
      })

      fireEvent.click(
        getAllByLabelText(lang.checkboxInputLabel, { selector: "input" })[1]
      )
      expect(getByTestIdWithinCompleted("task-count")).toHaveTextContent("2")
    })
  })

  describe("priority", () => {
    it("allows user to set priority of task", async () => {
      const { getByLabelText } = render(<App />)
      const input = getByLabelText(lang.todoPriorityLabel, {
        selector: "input",
      })
      fireEvent.change(input, { target: { value: 0 } })
      expect(input).toHaveValue("0")
    })
    it("allows user to set priority of task", async () => {
      const { getByLabelText } = render(<App />)
      const input = getByLabelText(lang.todoPriorityLabel, {
        selector: "input",
      })
      fireEvent.change(input, { target: { value: 0 } })
      expect(input).toHaveValue("0")
    })
  })

  describe("sorting", () => {
    it("handles sorting by text", async () => {
      const { getByLabelText, getAllByLabelText, getByTestId } = render(<App />)
      const firstInputText = getByLabelText(lang.todoInputLabel, {
        selector: "input",
      })
      // Create a new todo
      fireEvent.keyDown(firstInputText, {
        key: "Enter",
        code: "Enter",
      })
      fireEvent.keyDown(firstInputText, {
        key: "Enter",
        code: "Enter",
      })
      fireEvent.change(
        getAllByLabelText(lang.todoInputLabel, {
          selector: "input",
        })[0],
        { target: { value: "Aaa" } }
      )
      fireEvent.change(
        getAllByLabelText(lang.todoInputLabel, {
          selector: "input",
        })[1],
        { target: { value: "Bbb" } }
      )
      fireEvent.change(
        getAllByLabelText(lang.todoInputLabel, {
          selector: "input",
        })[2],
        { target: { value: "Ccc" } }
      )
      fireEvent.change(getByTestId("sort-todos-by"), {
        target: { value: "todoText" },
      })
      expect(
        getAllByLabelText(lang.todoInputLabel, {
          selector: "input",
        })[0]
      ).toHaveValue("Aaa")
      fireEvent.change(getByTestId("sort-todos-direction"), {
        target: { value: "ascending" },
      })
      expect(
        getAllByLabelText(lang.todoInputLabel, {
          selector: "input",
        })[0]
      ).toHaveValue("Bbb")
      fireEvent.change(getByTestId("sort-todos-direction"), {
        target: { value: "decending" },
      })
      expect(
        getAllByLabelText(lang.todoInputLabel, {
          selector: "input",
        })[0]
      ).toHaveValue("Aaa")
    })
    it("handles sorting by priority", async () => {
      const {
        getByLabelText,
        getAllByLabelText,
        getAllByTestId,
        getByTestId,
      } = render(<App />)
      const firstInputText = getByLabelText(lang.todoInputLabel, {
        selector: "input",
      })
      fireEvent.change(firstInputText, { target: { value: "first" } })
      // Create a new todo
      fireEvent.keyDown(firstInputText, {
        key: "Enter",
        code: "Enter",
      })
      fireEvent.change(getAllByTestId("todo-priority")[0], {
        target: { value: 0 },
      })
      fireEvent.change(getAllByTestId("todo-priority")[1], {
        target: { value: 2 },
      })
      expect(
        getAllByLabelText(lang.todoInputLabel, {
          selector: "input",
        })[0]
      ).toHaveValue("first")
      fireEvent.change(getByTestId("sort-todos-direction"), {
        target: { value: "ascending" },
      })
      expect(
        getAllByLabelText(lang.todoInputLabel, {
          selector: "input",
        })[0]
      ).toHaveValue("Create a new todo item")
    })
  })
})
