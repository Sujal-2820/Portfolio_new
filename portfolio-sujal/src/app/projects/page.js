import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: "Event Management Platform",
    description: "Features seamless event registration with real-time updates using Next.js, Firebase, and MongoDB.",
    image: "/event-management.jpg",
    liveLink: "https://eventsphere1.vercel.app/",
    githubLink: "https://github.com/Sujal-2820/Event-Management-Platform",
  },
  {
    title: "Skill Path",
    description: "Personalized learning platform with adaptive learning modules, utilizing Next.js and Firebase.",
    image: "/skill-path.jpg",
    liveLink: "https://skill-path.vercel.app/",
    githubLink: "https://github.com/Sujal-2820/SkillPath",
  },
  {
    title: "Mentor Space",
    description: "Mentorship platform with dashboards, filters, and user feedback. Built with Next.js and Supabase.",
    image: "/mentor-space.jpg",
    liveLink: "https://mentor-space123.vercel.app/",
    githubLink: "https://github.com/Sujal-2820/MentorSpace",
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn mt-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-xl shadow-2xl overflow-hidden transition-transform duration-300 hover:scale-105 transform hover:shadow-xl">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="w-full h-60 object-cover rounded-t-xl"
            />
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-semibold text-blue-800">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex justify-between items-center">
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:text-blue-600 space-x-2">
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </Link>
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-800 space-x-2">
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
