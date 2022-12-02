import Head from 'next/head'
import { Element } from '../components/Element'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'

export default function Home() {
  const makePayment = async () => {
    const res = await initializeRazorpay()

    if (!res) {
      alert('Razorpay SDK Failed to load')
      return
    }

    const data = await fetch('/api/razorpay', { method: 'POST' }).then(t =>
      t.json()
    )

    var options = {
      key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
      name: 'Dhruv Gursahani Pvt Ltd',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: 'Thank You for your test donation',
      image: 'https://dhruvgursahani.vercel.app/favicon.ico',
      handler: function (response) {
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
      },
      prefill: {
        name: 'Test Name',
        email: 'testemail@gmail.com',
        contact: '9999999999'
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  const initializeRazorpay = () => {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script)
    })
  }

  return (
    <div>
      <Head>
        <title>Integrate Payments 🔥</title>
        <meta name="description" content="Next.js and Razorpay integration" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-Inter h-screen overflow-auto bg-gradient-to-tr from-[#252B30] to-[#191C22]">
        <Navbar />
        <Hero onClick={makePayment} />
        <Element className="bottom-10 bg-gradient-to-r from-green-500 to-green-700 antialiased" />
        <Element className="bottom-20 w-[110px] bg-gradient-to-r from-indigo-500 to-indigo-700 antialiased" />
        <Element className="top-40 left-10 w-[150px] bg-gradient-to-r from-purple-500 to-purple-700 antialiased" />
      </main>
    </div>
  )
}
