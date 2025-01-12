'use client'

import { useState } from 'react'
import { Mail, Linkedin, GitlabIcon as GitHub } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen animate-fadeIn">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="mailto:sujal28soni@gmail.com" className="text-gray-600 hover:text-blue-500 transition duration-300">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/in/sujal-soni/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/Sujal-2820" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition duration-300">
            <GitHub size={24} />
          </a>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

