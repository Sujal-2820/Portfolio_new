'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager",
    content: "Sujal is an exceptional developer with a keen eye for detail. His work on our project was outstanding.",
    image: "/testimonial-1.jpg"
  },
  {
    name: "Jane Smith",
    role: "Senior Developer",
    content: "Working with Sujal was a pleasure. His problem-solving skills and dedication to quality are impressive.",
    image: "/testimonial-2.jpg"
  },
  {
    name: "Alex Johnson",
    role: "UI/UX Designer",
    content: "Sujal's ability to translate designs into functional, responsive web applications is remarkable.",
    image: "/testimonial-3.jpg"
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
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="rounded-full mb-4"
              />
              <p className="text-gray-600 mb-4 text-center">{testimonial.content}</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
