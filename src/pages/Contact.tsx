import PageTitle from "@/components/PageTitle"
import { FormEvent, useState } from "react"
import { aboutInfo } from "@/data/about"

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    message: ""
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Format the body to include the message first, followed by "From [full name]"
    const body = `${formData.message}\n\nFrom\n${formData.fullName}`;
    
    // Create mailto link and open it using the email from aboutInfo
    const mailtoLink = `mailto:${aboutInfo.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section>
      <PageTitle title="Let's Connect" />

      <div className="flex flex-col md:flex-row gap-18 items-start fade-in">
        <div className="w-full md:w-1/2">
          <p className="text-lg mb-12">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>

          <div className="space-y-12">
            <p className="space-x-3">
              <strong>Email: </strong>
              <a
                href={`mailto:${aboutInfo.contact.email}`}
                className="filter-btn"
              >
                {aboutInfo.contact.email}
              </a>
            </p>
            <p className="space-x-3">
              <strong>Phone: </strong>
              <a
                href={`tel:${aboutInfo.contact.phone}`}
                className="filter-btn"
              >
                {aboutInfo.contact.phone}
              </a>
            </p>
            <p className="space-x-3">
              <strong>Location: </strong>
              <span>{aboutInfo.contact.location}</span>
            </p>
            <a 
            href={aboutInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a 
            href={aboutInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <form className="space-y-12" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <label htmlFor="fullName" className="block mb-2 text-sm">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                  placeholder="Ramailo Human"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full border-b border-black bg-transparent py-2 focus:outline-none"
                  placeholder="Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full border-b border-black bg-transparent py-2 focus:outline-none transition-all focus:border-gray-600"
                placeholder="I'd love to discuss a project opportunity, collaborate on an idea, or just connect professionally..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Open Email Client
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact