import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Sujal Soni. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/sujal-soni/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Sujal-2820" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="mailto:sujal28soni@gmail.com" className="hover:text-orange-400 transition duration-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

