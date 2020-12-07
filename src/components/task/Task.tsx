import React from "react"

import styles from "./task.css"

const Task = (): React.ReactElement => (
  <div className={styles.task}>
    <label>
      <input type="checkbox" className={styles.checkbox} />
      <div className={styles.fakeCheckbox} />
    </label>
    <input type="text" className={styles.input} value="test data" />
  </div>
)

export default Task
