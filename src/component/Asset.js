import * as React from "react"
import styles from "./Asset.module.css"


export default function Asset() {
  return (
    <div className={styles.asset}>
      <div className={styles.trapezoid}/>
      <div className={styles.textContainer}>
        <h1>Unlock your biggest asset</h1>
        <p>Aculend is the perfect system and lender that determines eligibility based on a live financial situation. </p>
      </div>
    </div>
  )
}