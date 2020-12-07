import React from "react"
import { lang } from "../../lib/constants"

import styles from "./completed-tasks.css"

const CompletedTasks = ({ amount }: { amount: number }): React.ReactElement => (
  <div className={styles.container}>
    <h2>{lang.completedTasks}</h2>
    <div className={styles.total}>
      {lang.total}: {amount}
    </div>
  </div>
)

export default CompletedTasks
