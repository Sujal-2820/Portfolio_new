import Image from 'next/image'
import Link from 'next/link'

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
    <div className="min-h-screen animate-fadeIn">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">
                  Live Demo
                </Link>
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-600">
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

