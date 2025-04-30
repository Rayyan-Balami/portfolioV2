import PageTitle from "@/components/PageTitle";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { aboutInfo } from "@/data/about";

export default function About() {
  useEffect(() => {
    document.title = "About | Rayyan Balami";
  }, []);

  return (
    <>
      <article className="max-w-4xl mx-auto">
        <PageTitle title="About Me" />

        {/* hero section */}
        <section className="fade-in flex flex-col lg:flex-row gap-12 mb-18">
          <div className="lg:w-1/3">
            <div className="h-72 mx-auto lg:h-auto aspect-[4/5] overflow-hidden">
              <img
                src={aboutInfo.intro.photo}
                alt={aboutInfo.intro.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6 text-lg">
            {aboutInfo.intro.paragraphs.map((paragraph: string, index: number) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="fade-in mb-18 relative py-16">
          <div className="absolute text-9xl opacity-10 font-serif top-0 left-0">
            "
          </div>
          <p className="text-xl md:text-2xl font-light text-center max-w-3xl mx-auto px-8 leading-relaxed">
            {aboutInfo.quote}
          </p>
          <div className="absolute text-9xl opacity-10 font-serif bottom-0 right-0">
            "
          </div>
        </section>

        {/* Education section */}
        <h2 className="fade-in text-2xl md:text-3xl font-light mb-14">Education</h2>
        <section className="fade-in space-y-14 mb-18">
          {aboutInfo.education.map((edu, index) => (
            <div key={index}>
              <div className="flex items-start gap-12">
                <div className="size-24 bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} Logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm opacity-70 mb-1">{edu.period}</p>
                  <h3 className="font-medium text-xl mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-lg opacity-80">{edu.institution}</p>
                  <p className="mt-2 text-sm opacity-70">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Skills section */}
        <h2 className="fade-in text-2xl md:text-3xl font-light mb-14">Skills & Technologies</h2>
        <section className="fade-in grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 mb-18">
          {aboutInfo.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center text-center bg-[var(--accent-color)] h-16 gap-6"
            >
              <div className="h-full aspect-square">
                <img
                  src={skill.icon || `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSoW3g9hjXIasgon-kpzz-lD9z4SsalyPbZA&s`}
                  alt={`${skill.name} icon`}
                  className="w-full h-full aspect-square object-contain"
                />
              </div>
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </section>

        {/* Experience section */}
        <h2 className="fade-in text-2xl md:text-3xl font-light mb-14">Experience</h2>
        <section className="space-y-8 mb-16">
            {aboutInfo.experience.map((exp: any, index: number) => (
            <div key={index} className="border-l-2 border-gray-300 pl-12 relative">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full -left-[7px] top-0"></div>
              <h3 className="font-medium text-xl">{exp.position}</h3>
              <p className="text-gray-600 mb-2">
              {exp.company}&nbsp;&nbsp;•&nbsp;&nbsp;{exp.period}
              </p>
              <p>{exp.description}</p>
            </div>
            ))}
        </section>

        <div className="mt-16 pt-6 border-t border-gray-200">
          <h3 className="text-xl font-medium mb-4">Get in Touch</h3>
          <p className="mb-6">
            Interested in working together? Feel free to reach out via{" "}
            <a href={`mailto:${aboutInfo.contact.email}`} className="filter-btn">
              email
            </a>{" "}
            or connect with me on{" "}
            <a
              href={aboutInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="filter-btn"
            >
              LinkedIn
            </a>
            .
          </p>

          <div className="flex space-x-6 mt-8">
            <Link
              to="/contact"
              className="filter-btn"
            >
              {">"} Go To Contact Form {"<"}
            </Link>

            <a
              href={aboutInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a
              href={aboutInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </>
  );
}