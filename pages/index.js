import Head from 'next/head'
import { Element } from '../components/Element'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Integrate Payments 🔥</title>
        <meta name="description" content="Next.js and Razorpay integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Inter h-screen overflow-auto bg-gradient-to-tr from-[#252B30] to-[#191C22]">
        <Navbar />
        <Hero />
        <Element className="bottom-10 bg-gradient-to-r from-green-500 to-green-700 antialiased" />
        <Element className="bottom-20 w-[110px] bg-gradient-to-r from-indigo-500 to-indigo-700 antialiased" />
        <Element className="top-40 left-10 w-[150px] bg-gradient-to-r from-purple-500 to-purple-700 antialiased" />
      </main>
    </div>
  )
}
