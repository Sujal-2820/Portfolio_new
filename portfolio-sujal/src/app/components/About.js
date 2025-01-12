'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-[900px] gap-6">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p 
          className="text-lg mb-8 max-w-3xl mx-auto selection:bg-green selection:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a final-year Computer Science Engineering student with a strong passion for Full-Stack Web Development. Skilled in JavaScript, React.js, Node.js, MongoDB, Next.js, Firebase, and Supabase. I love building impactful web applications that address real-world challenges.
        </motion.p>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300"
          >
            View Resume
          </a>
        </motion.div>
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Skills Showcase</h3>
          <div className="space-y-4">
            {['JavaScript', 'React', 'Node.js', 'Next.js', 'MongoDB'].map((skill, index) => (
              <div key={skill} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      {skill}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      {80 + index * 4}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <motion.div 
                    style={{ width: 0 }}
                    animate={{ width: `${80 + index * 4}%` }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
