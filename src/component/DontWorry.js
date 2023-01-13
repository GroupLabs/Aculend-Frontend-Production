// @ts-nocheck
import * as React from "react"
import styles from "./Hero.module.css"
import Image from "next/image"
// import contract from '../../public/Hero.jpg'


export default function DontWorry() {
  return (
    <div>
      <div className={styles.hContainer}>
      <div className={styles.imageStyle}>
          <Image
                            src="https://www.grouplabs.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FContract.d15ef3e8.png&w=640&q=75"
                            alt=""
                            // width={300}
                            // height={300}
                            layout="fill"
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
        </div>
        <div className={styles.hTextContainer}>
          <div className={styles.hText}>
          Never worry about credit scores..
          </div>
          <div className={styles.h2Text}>
          Credit scores have been a very inefficient way to determine loan eligibility, especially for users receiving “sub prime” or higher interest rate loans. We believe that if someone can re-pay a loan, their earning and spending habits will be able to show that.          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnA}>
              Get Started
            </div>
            <div className={styles.btnB}>
              Learn More
            </div>
          </div>
        </div>

      </div>
  </div>
    
  )
}