import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <About />
      <Testimonials />
      <Footer />
    </div>
  )
}

