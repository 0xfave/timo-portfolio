import Head from 'next/head'
import Image from 'next/image'
import { Work_Sans } from '@next/font/google'
import Navgation from './components/Navgation'
import Header from './components/Header'
import Services from './components/Services'
import Aboutus from './components/Aboutus'
import Clients from './components/Clients'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

const inter = Work_Sans({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className} !max-w-[1450px]`}>
      <Navgation />
      <Header />
      <Services />
      <Aboutus />
      <Clients />
      <Portfolio />
      <Footer />
    </main>
  )
}
