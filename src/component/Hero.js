// @ts-nocheck
import * as React from "react"
import styles from "./Hero.module.css"
import Image from "next/image"
// import contract from '../../public/Hero.jpg'

export default function Hero() {
  return (
    <div>
      <div className={styles.hContainer}>
        <div className={styles.hTextContainer}>
          <div className={styles.hTitleText}>
            ACULEND
          </div>
          <div className={styles.h2Text}>
            A lending protocol that provides financial assistance to enterprises and car dealerships
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnA}>
              Get Started
            </div>
            <div className={styles.btnB}>
              Learn More
            </div>
          </div>
        </div>
        <div className={styles.imageStyle}>
          <Image
                            src="https://ucarecdn.com/fc4d0681-af13-44dc-8c3f-52331bf82ffb/pexelsfauxels3184287.jpg"
                            alt=""
                            width={400}
                            height={600}
                            // layout="fill"
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
        </div>
      </div>
      <div className={styles.hContainer}>
      <div className={styles.imageStyle}>
          <Image
                            src="https://ucarecdn.com/58236ddd-ee57-4236-ae38-1f9bb4819d39/pexelsfauxels3184423.jpg"
                            alt=""
                            width={400}
                            height={600}
                            // layout="fill"
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
        </div>
        <div className={styles.hTextContainer}>
          <div className={styles.hText}>
            How we determine your loan eligibility
          </div>
          <div className={styles.h2Text}>
            AI banking-based system, that unlike a credit score alone (a common and lagging indicator of someone’s current financial health/situation) is used to provide a fair and more accurate loan approval & rate for users that could otherwise be unfairly declined.
          </div>
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
      <div className={styles.hContainer}>
        <div className={styles.hTextContainer}>
          <div className={styles.hText}>
            Underwriting AI for all industries
          </div>
          <div className={styles.h2Text}>
          Aculend’s software determines a user’s eligibility for any loan by using their historical spending habits and patterns to determine their financial wellbeing. Aculend uses machine learning and AI to process this banking data giving us a competitive edge by allowing us to foresee and predict good and bad patterns forming. 
          </div>
          <div className={styles.btnContainer}>
            <div className={styles.btnA}>
              Get Started
            </div>
            <div className={styles.btnB}>
              Learn More
            </div>
          </div>
        </div>
        <div className={styles.imageStyle}>
          <Image
                            src="https://ucarecdn.com/3137526d-e017-4716-85a9-645fae7034d1/pexelsfauxels3183146.jpg"
                            alt=""
                            // width={600}
                            // height={400}
                            layout="fill"
                            objectFit="cover"
                            // blurDataURL="data:..." automatically provided
                            // placeholder="blur" // Optional blur-up while loading
                        />
        </div>
      </div>
  </div>
    
  )
}