const skills = [
    { category: "Programming", items: ["C", "C++", "JavaScript"] },
    { category: "Front-End", items: ["React.js", "Next.js", "CSS", "Bootstrap", "Tailwind CSS"] },
    { category: "Back-End", items: ["Node.js", "Express.js"] },
    { category: "Databases", items: ["MongoDB", "Firebase", "Supabase"] },
    { category: "Tools", items: ["Git", "GitHub"] },
    { category: "Soft Skills", items: ["Communication", "Teamwork", "Management"] },
  ]
  
  export default function Skills() {
    return (
      <div className="min-h-screen animate-fadeIn">
        <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4 text-blue-500">{skillCategory.category}</h2>
              <ul className="list-disc list-inside">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="mb-2">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  