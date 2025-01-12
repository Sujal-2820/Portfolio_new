import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen animate-fadeIn mt-12"> {/* Add margin-top here */}
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Image
          src="/about-me.jpg"
          alt="Sujal Soni"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
        <div className="max-w-2xl">
          <p className="mb-4">
            I'm a final-year Computer Science Engineering student at Medi-Caps University, Indore, with a strong passion for Full-Stack Web Development. My journey in tech has been driven by a desire to create impactful web applications that address real-world challenges.
          </p>
          <p className="mb-4">
            As an Open Source Mentor at Google Developer Student Clubs and a Hacktoberfest contributor, I've had the opportunity to guide peers and contribute to the developer community. My experience extends to leading a team to the Top 10 at the "Parul Hacks" hackathon, where we built an AI-powered hiring solution.
          </p>
          <p>
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies. My goal is to leverage my skills in JavaScript, React.js, Node.js, and other modern web technologies to build innovative and user-friendly applications.
          </p>
        </div>
      </div>
    </div>
  )
}
