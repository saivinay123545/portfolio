import React, { useState, useRef, useEffect } from "react";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  const projects = [
    {
      title: "Cybersecurity",
      summary: "A personal portfolio site built with React and Tailwind CSS.",
      details: [
        "Built using React and Tailwind",
        "Responsive design",
        "Deployed on Vercel",
      ],
    },
    {
      title: "Task Manager App",
      summary: "A task tracking app with drag-and-drop UI using React DnD.",
      details: [
        "User authentication with Firebase",
        "Drag-and-drop tasks",
        "Dark mode support",
      ],
    },
    {
      title: "Blog Platform",
      summary: "A markdown-based blogging system built with Next.js.",
      details: [
        "Static site generation",
        "Markdown content support",
        "SEO optimized pages",
      ],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans relative overflow-hidden">
      <div className="animated-bg"></div>
      {/* Header */}
      <header className="bg-white shadow-md py-6 px-8 flex justify-between items-center sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">
          Prashanth Mudigonda
        </h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-blue-600 font-medium">
            About
          </a>
          <div className="relative inline-block text-left">
            <button
              ref={buttonRef}
              onClick={() => setShowDropdown(!showDropdown)}
              className="hover:text-blue-600 font-medium"
            >
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-semibold">
                Explore
              </span>{" "}
              GitHub ▾
            </button>

            {showDropdown && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-64 p-4 bg-white border rounded-xl shadow-lg z-50 flex flex-col gap-2"
              >
                <a
                  href="https://github.com/your-username/cybersecurity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-center hover:bg-blue-200 transition-all font-medium"
                >
                  Cybersecurity
                </a>
                <a
                  href="https://github.com/your-username/task-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-center hover:bg-blue-200 transition-all font-medium"
                >
                  Task Manager
                </a>
                <a
                  href="https://github.com/your-username/blog-platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-center hover:bg-blue-200 transition-all font-medium"
                >
                  Blog Platform
                </a>
              </div>
            )}
          </div>

          <a href="#contact" className="hover:text-blue-600 font-medium">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="hero-section text-center py-20 px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Hello, I'm Prashanth
        </h2>
        <p className="text-lg md:text-xl text-white">
          A frontend developer focused on building clean, responsive, and
          user-friendly interfaces.
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I’m a passionate Cybersecurity student with a strong foundation in
          network security, ethical hacking, and threat analysis. I’m driven by
          a deep interest in understanding how systems work—and how they can be
          protected from evolving threats. I enjoy working on hands-on projects
          that involve vulnerability assessment, penetration testing, and
          implementing secure solutions. Currently, I’m expanding my skills in
          areas like cloud security, digital forensics, and secure coding. I
          thrive in problem-solving environments and continuously seek
          opportunities to learn and contribute to real-world security
          challenges. Whether working independently or as part of a team, I
          bring a detail-oriented and ethical approach to everything I do. Let’s
          connect if you’re looking for someone eager to grow and contribute to
          building a safer digital future.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-8 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openModal(project)}
              className="cursor-pointer border p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mt-2">{project.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {showModal && selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              {selectedProject.title}
            </h3>
            <ul className="space-y-2">
              {selectedProject.details.map((item, i) => (
                <li key={i} className="text-gray-700">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Contact */}
      <section id="contact" className="py-16 px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Contact</h2>
        <p className="text-gray-700 mb-2">Email: johndoe@example.com</p>
        <p className="text-gray-700">
          LinkedIn:{" "}
          <a href="#" className="text-blue-600 hover:underline">
            linkedin.com/in/johndoe
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
