
import Head from 'next/head'
import Hero from '../component/Hero'
import Asset from '../component/Asset'
import TrustedClients from '../component/TrustedClients'
import Customers from '../component/Customers'
import DontWorry from '../component/DontWorry'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aculend | Home</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta property="og:title" content="Aculend" />
        <meta property="og:type" content="home page" />
        <meta property="og:description" content="A lending protocol that provides financial assistance to enterprises and car dealerships" />
        {/* <meta property="og:image" content="https://grouplabs.ca/OGImage.jpg" /> */}
        {/* <meta property="og:url" content="https://www.gr.ca" /> */}
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Hero />
      <Asset />
      <TrustedClients />
      <Customers />
      <DontWorry />
    </div>
  )
}
