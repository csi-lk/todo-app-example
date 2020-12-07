import React from "react"
import { lang } from "../../lib/constants"

import styles from "./task-count.css"

const CompletedTasks = ({
  amount,
  heading,
}: {
  amount: number
  heading: string
}): React.ReactElement => (
  <div className={styles.container}>
    <h2>{heading}</h2>
    <div className={styles.total} data-testid="task-count">
      {lang.total}: {amount}
    </div>
  </div>
)

export default CompletedTasks
