import React from "react"
import CompletedTasks from "../task-count/TaskCount"

import { lang } from "../../lib/constants"

import styles from "./header.css"

const Header = ({ openTodos }: { openTodos: number }): React.ReactElement => (
  <>
    <div className={styles.header}>
      <h1>Todo App</h1>
      <h2>Code test for PWC</h2>
    </div>
    <CompletedTasks amount={openTodos} heading={lang.openTasks} />
  </>
)

export default Header
