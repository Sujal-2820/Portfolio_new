'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import ParticleBackground from './ParticleBackground'

export default function Header() {
  return (
    <header className="py-20 md:py-28 relative overflow-hidden">
      <ParticleBackground />
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between max-w-[900px] gap-6">
        <motion.div 
          className="w-3/5 mb-8 md:mb-0" // Reduced width
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sujal Soni</h1>
          <p className="text-xl mb-6">Full-Stack Web Developer & CSE Student</p>
          <motion.a 
            href="#contact"
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
        <motion.div 
          className="w-2/5" // Reduced width
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/profile.jpg"
            alt="Sujal Soni"
            width={350} // Reduced size
            height={350}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </header>
  )
}
