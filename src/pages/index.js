
import Hero from '../component/Hero'
import Asset from '../component/Asset'
import TrustedClients from '../component/TrustedClients'
import Customers from '../component/Customers'
import DontWorry from '../component/DontWorry'

export default function Home() {
  return (
    <div>
      <Hero />
      <Asset />
      <TrustedClients />
      <Customers />
      <DontWorry />
    </div>
  )
}
