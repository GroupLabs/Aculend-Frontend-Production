import * as React from "react"
import styles from "./TrustedClients.module.css"


export default function TrustedClients() {
  return (
    <div>
    <div className={styles.tcContainer}>
        <h3>Some of our trusted clients</h3>
        <div className={styles.clients}>
            <div className={styles.client}>
                Client A
            </div>
            <div className={styles.client}>
                Client B
            </div>
            <div className={styles.client}>
                Client C
            </div>
        </div>
    </div>
    </div>

  )
}