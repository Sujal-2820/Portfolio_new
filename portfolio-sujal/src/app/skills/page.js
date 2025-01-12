import { Code, Cpu, Database, GitBranch, Users } from 'lucide-react'

const skills = [
  { 
    category: "Programming", 
    items: ["C", "C++", "JavaScript"], 
    icon: <Cpu size={28} className="text-blue-500" />
  },
  { 
    category: "Front-End", 
    items: ["React.js", "Next.js", "CSS", "Bootstrap", "Tailwind CSS"], 
    icon: <Code size={28} className="text-green-500" />
  },
  { 
    category: "Back-End", 
    items: ["Node.js", "Express.js"], 
    icon: <Database size={28} className="text-red-500" />
  },
  { 
    category: "Databases", 
    items: ["MongoDB", "Firebase", "Supabase"], 
    icon: <Database size={28} className="text-orange-500" />
  },
  { 
    category: "Tools", 
    items: ["Git", "GitHub"], 
    icon: <GitBranch size={28} className="text-purple-500" />
  },
  { 
    category: "Soft Skills", 
    items: ["Communication", "Teamwork", "Management"], 
    icon: <Users size={28} className="text-yellow-500" />
  },
]

export default function Skills() {
  return (
    <div className="min-h-screen animate-fadeIn mt-16">
      <h1 className="text-4xl font-bold mb-16 text-center text-blue-700">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {skills.map((skillCategory, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-xl hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-2xl"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 rounded-full bg-blue-100">{skillCategory.icon}</div>
              <h2 className="text-2xl font-semibold text-blue-700">{skillCategory.category}</h2>
            </div>
            <ul className="list-disc list-inside space-y-2">
              {skillCategory.items.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-lg text-gray-700">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
