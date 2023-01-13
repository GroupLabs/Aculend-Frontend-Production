// @ts-nocheck
import * as React from "react"
import styles from "./Customers.module.css"
// import contract from '../../public/Hero.jpg'
import Image from "next/image"


export default function Asset() {
  return (
    <div className={styles.customers}>
        <h1>What our customers have to say about us</h1>

        <div className={styles.customerContainer}>
            <div className={styles.customer}>
                
                <p>“It is amazing that companies like this are willing to look at people beyond their past mistakes and give them an opportunity to receive a loan”</p>
                <br/>
                <div className={styles.customerInfo}>
                    {/* <div className={styles.customerImage}>
                    <Image
                                src="https://www.grouplabs.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FContract.d15ef3e8.png&w=640&q=75"
                                alt=""
                                // width={300}
                                // height={300}
                                layout = "fill"
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                    </div> */}
                    <div className={styles.customerName}>
                        <h3>John Doe</h3>
                        <h4>CEO, ABC Company</h4>
                    </div>
                </div>
            </div>
            <div className={styles.customer}>
                
                <p>“It is amazing that companies like this are willing to look at people beyond their past mistakes and give them an opportunity to receive a loan”</p>
                <br/>
                <div className={styles.customerInfo}>
                    {/* <div className={styles.customerImage}>
                    <Image
                                src="https://www.grouplabs.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FContract.d15ef3e8.png&w=640&q=75"
                                alt=""
                                // width={300}
                                // height={300}
                                layout = "fill"
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                    </div> */}
                    <div className={styles.customerName}>
                        <h3>John Doe</h3>
                        <h4>CEO, ABC Company</h4>
                    </div>
                </div>
            </div>
            <div className={styles.customer}>
                
                <p>“It is amazing that companies like this are willing to look at people beyond their past mistakes and give them an opportunity to receive a loan”</p>
                <br/>
                <div className={styles.customerInfo}>
                    {/* <div className={styles.customerImage}>
                    <Image
                                src="https://www.grouplabs.ca/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FContract.d15ef3e8.png&w=640&q=75"
                                alt=""
                                // width={300}
                                // height={300}
                                layout = "fill"
                                // blurDataURL="data:..." automatically provided
                                // placeholder="blur" // Optional blur-up while loading
                            />
                    </div> */}
                    <div className={styles.customerName}>
                        <h3>John Doe</h3>
                        <h4>CEO, ABC Company</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}