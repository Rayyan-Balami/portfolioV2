import { useEffect } from "react"

export default function Home() {
  
  useEffect(() => {
    document.title = "About | Rayyan Balami"
  }, [])
  
  return (
    <div className="container mx-auto px-4 py-12 md:py-24 fade-in">
      
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-medium mb-12">About Me</h1>
        
        <div className="md:flex gap-12 mb-16">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="aspect-[4/5] overflow-hidden">
              <img 
                src="/images/profile.jpg" 
                alt="Rayyan Balami" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-6 text-lg">
            <p>
              Hi, I'm Rayyan Balami, a passionate frontend developer focused on creating elegant and functional digital experiences.
            </p>
            
            <p>
              My journey in development began with a curiosity about how digital products are built.
              I specialize in creating responsive, accessible, and performant web applications using modern technologies.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring design trends, contributing to open-source projects,
              or experimenting with new web technologies to stay at the cutting edge of frontend development.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-medium mt-20 mb-8">Education</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src="/images/university-logo.png" 
                  alt="University Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-xl">Bachelor's in Computer Science</h3>
                <p className="text-gray-600">Tribhuvan University</p>
              </div>
            </div>
            <p className="text-gray-600">2020 - 2024</p>
          </div>
          
          <div className="border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 flex-shrink-0">
                <img 
                  src="/images/college-logo.png" 
                  alt="College Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-xl">Higher Secondary Education</h3>
                <p className="text-gray-600">Kathmandu Model College</p>
              </div>
            </div>
            <p className="text-gray-600">2018 - 2020</p>
          </div>
        </div>

        <h2 className="text-2xl font-medium mt-20 mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-16">
          {["React", "TypeScript", "TailwindCSS", "Next.js", "JavaScript", "HTML/CSS", "Vite", "Git", "Figma", "Node.js", "MongoDB", "RESTful APIs"].map((tech) => (
            <div key={tech} className="border border-gray-200 p-4 flex flex-col items-center text-center">
              <div className="w-12 h-12 mb-3">
                <img 
                  src={`/images/tech/${tech.toLowerCase().replace('.', '').replace('/', '-')}.svg`} 
                  alt={`${tech} icon`}
                  className="w-full h-full object-contain"
                />
              </div>
              <span>{tech}</span>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-medium mt-20 mb-8">Philosophy</h2>
        <div className="bg-gray-50 p-8 mb-16">
          <p className="text-lg italic">
            "I believe in creating digital experiences that are not only visually appealing but also
            functionally robust and accessible to all users. My approach combines technical precision with
            creative problem-solving to deliver projects that exceed expectations."
          </p>
        </div>

        <h2 className="text-2xl font-medium mt-20 mb-8">Experience</h2>
        <div className="space-y-8 mb-16">
          <div className="border-l-2 border-gray-300 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-2"></div>
            <h3 className="font-medium text-xl">Frontend Developer</h3>
            <p className="text-gray-600 mb-2">Tech Innovators Ltd • 2023 - Present</p>
            <p>Building responsive web applications with React and TypeScript, implementing UI components and integrating with backend systems.</p>
          </div>
          
          <div className="border-l-2 border-gray-300 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-2"></div>
            <h3 className="font-medium text-xl">Web Development Intern</h3>
            <p className="text-gray-600 mb-2">Digital Solutions Inc • 2022 - 2023</p>
            <p>Assisted in developing and maintaining websites, gained experience with modern frontend frameworks and version control systems.</p>
          </div>
        </div>
        
        <div className="mt-16 pt-6 border-t border-gray-200">
          <h3 className="text-xl font-medium mb-4">Get in Touch</h3>
          <p className="mb-6">
            Interested in working together? Feel free to reach out via{" "}
            <a href="mailto:contact@rayyanbalami.com" className="filter-btn">email</a> or connect with me on{" "}
            <a href="https://linkedin.com/in/rayyanbalami" target="_blank" rel="noopener noreferrer" className="filter-btn">
              LinkedIn
            </a>.
          </p>
          
          <div className="flex space-x-6 mt-8">
            <a href="https://github.com/Rayyan-Balami" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/rayyanbalami" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
              </svg>
            </a>
            <a href="https://twitter.com/rayyanbalami" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}