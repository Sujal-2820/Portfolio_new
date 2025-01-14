'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "Ayush",
    role: "Founder at Notes-Era",
    content: "Sujal is an outstanding developer with exceptional attention to detail. His contributions to the foundational code for Notes-Era were flawless.",
    image: "/images/ayush.png"
  },
  {
    name: "Suhani",
    role: "Senior Developer",
    content: "Working alongside Sujal was truly rewarding. His strong problem-solving skills and dedication to quality impressed me greatly. He was always willing to break down complex web concepts that I struggled to grasp.",
    image: "/images/Suhani.jpeg"
  },
  {
    name: "Karthik",
    role: "Founder at Indo-Tech",
    content: "Sujal excels at transforming designs into functional, intuitive, and responsive web applications, demonstrating remarkable skill and creativity.",
    image: "/images/karthik.png"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:rotate-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </div>
              <p className="text-gray-600 mb-4 text-center selection:bg-green selection:text-white">{testimonial.content}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
