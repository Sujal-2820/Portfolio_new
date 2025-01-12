'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, User, Code, Zap, Mail, FileText } from 'lucide-react' // Import icons directly
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Skills', href: '/skills', icon: Zap },
    { name: 'Contact', href: '/contact', icon: Mail },
  ]

  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Sujal Soni
          </Link>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="text-black hover:text-blue-500 transition duration-300 flex items-center"
                >
                  <span className={`mr-1 ${item.href === router.pathname ? 'text-blue-500' : ''}`}>
                    <item.icon size={16} /> {/* Use the imported icon */}
                  </span>
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition duration-300 flex items-center"
              >
                <span className="mr-1"><FileText size={16} /></span>
                Resume
              </a>
            </motion.div>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-black hover:text-blue-500 transition duration-300"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-orange-500 hover:text-orange-600 transition duration-300"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar
