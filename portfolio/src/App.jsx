import React, { useState, useEffect } from "react";
import image from "./assets/image.jpg.jpeg"
import pdf from "./assets/Resume.pdf"
import m1 from "./assets/m1.jpeg"
import m2 from "./assets/m2.jpeg"
import m3 from "./assets/m3.png"
import m4 from "./assets/m4.jpeg"

const roles = ["Frontend Developer", "Backend Developer"];



export default function Portfolio() {

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [openImage, setOpenImage] = useState(false);

  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const current = roles[index % roles.length];
    let i = 0;

    const interval = setInterval(() => {
      setText(current.substring(0, i));
      i++;

      if (i > current.length) {
        clearInterval(interval);
        setTimeout(() => setIndex((prev) => prev + 1), 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:link2siva.m@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message} (${form.email})`;
    window.location.href = mailto;
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">

      <nav className="flex justify-between items-center px-4 py-4 md:px-10 sticky top-0 bg-gray-700 z-50">

        {/* Logo */}
        <h1 className="text-lg md:text-xl font-bold">
          Siva Portfolio
        </h1>

        {/* Menu */}
        <div className="flex gap-4 md:gap-8 text-sm md:text-base font-medium">
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>

      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 max-w-6xl mx-auto">

          {/* Left Side (Profile) */}
          <div className="text-center">
            <div
              className="relative group cursor-pointer"
              onClick={() => setOpenImage(true)}
            >
              <img
                src={image}
                alt="profile"
                className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-3xl mx-auto"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-2">
              Hi, I'm Siva 👋
            </h2>

            <p className="text-lg opacity-70 h-6">{text}|</p>

            <a
              href={pdf}
              download
              className="inline-block mt-4 px-6 py-2 bg-blue-500 rounded-xl"
            >
              Download Resume
            </a>
            <div className="flex flex-col items-center mt-4 gap-2">

              <div className="flex flex-wrap justify-center gap-4 text-base sm:text-lg">
                <a href="https://github.com/Siva4121" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">🐙 GitHub</a>
                <a href="https://www.linkedin.com/in/siva-m-032109240/" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors">💼 LinkedIn</a>
                <a href="mailto:link2siva.m@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">📧 Gmail</a>
              </div>

              <a href="tel:+917010899256" className="text-blue-400 hover:text-blue-300 transition-colors">
                📞 +91 70108 99256
              </a>

            </div>
          </div>


          {/* Right Side (Professional Summary) */}
          <div className="max-w-xl text-center md:text-left mb-10 md:mb-0 md:mt-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-3">
              Professional Summary
            </h3>

            <div className="text-sm sm:text-base md:text-lg leading-relaxed opacity-80 md:pl-6">
              To secure a Software Developer position in a growth-oriented organization
              where I can apply my skills in Java, React, Spring Boot, and MySQL to
              develop scalable and efficient applications, while continuously enhancing
              my technical expertise and contributing to innovative projects.
            </div>
          </div>

        </div>
      </section>

      {/* Modal */}
      {openImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center" onClick={() => setOpenImage(false)}>
          <img src={image} className="max-w-sm rounded-xl" />
        </div>
      )}

      {/* Education */}
      <section className="py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Education
          </h2>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300">

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              B.Tech - Artificial Intelligence and Data Science
            </h3>

            <p className="text-sm sm:text-base md:text-lg opacity-80">
              Erode Sengunthar Engineering College
            </p>

            <p className="text-sm sm:text-base md:text-lg mt-2">
              🎓 Graduated: <span className="font-semibold">2025</span>
            </p>

            <p className="text-sm sm:text-base md:text-lg">
              📊 CGPA: <span className="font-semibold">7.49 / 10</span>
            </p>

          </div>

        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 text-center">
        <div className="w-full px-4 sm:px-6 md:px-10">
          <h2 className="text-center mb-8 text-2xl sm:text-3xl md:text-4xl font-bold">
            Skills
          </h2>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse text-white">
              <thead>
                <tr className="border-b border-gray-400">
                  <th className="p-4 text-sm sm:text-base md:text-lg">
                    Category
                  </th>
                  <th className="p-4 text-sm sm:text-base md:text-lg">
                    Technologies
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-gray-600 hover:bg-gray-800">
                  <td className="p-4 font-semibold">
                    Programming & Web Technologies
                  </td>
                  <td className="p-4">
                    HTML, CSS, JavaScript, Java
                  </td>
                </tr>

                <tr className="border-b border-gray-600 hover:bg-gray-800">
                  <td className="p-4 font-semibold">
                    Framework & Database
                  </td>
                  <td className="p-4">
                    React, Spring Boot, Bootstrap, Tailwind CSS, MySQL
                  </td>
                </tr>

                <tr className="hover:bg-gray-800">
                  <td className="p-4 font-semibold">
                    Tools
                  </td>
                  <td className="p-4">
                    VS Code, Eclipse, IntelliJ IDEA, Ubuntu, Git, GitHub
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 md:px-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">Projects</h2>
        {/* Detailed Project Description */}
        <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-left">

          {/* Project 1 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <a href="https://imagify-black-chi.vercel.app/" target="_blank" className="text-blue-400"><div className="grid grid-cols-2 gap-3 mb-4">
              <img src={m1} className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg" />
              <img src={m2} className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg" />
            </div></a>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Imagify - Text to Image Generator
            </h3>

            <p className="text-sm md:text-base mb-2">
              <span className="font-semibold">Technologies:</span> React | JavaScript | Clipdrop API | REST API
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base opacity-90">
              <li>Developed a full-stack AI-based image generation application with secure user authentication.</li>
              <li>Implemented database management using MongoDB to store user credentials efficiently.</li>
              <li>Integrated Clipdrop API to generate images dynamically based on user input.</li>
              <li>Designed a responsive modern UI using React and Tailwind CSS.</li>
            </ul>

            <div className="mt-3 flex gap-4">
              <a href="https://github.com/Siva4121/Text-to-Image-Generator" target="_blank" className="text-blue-400">🐙 Repo</a>
              <a href="https://imagify-black-chi.vercel.app/" target="_blank" className="text-blue-400">🔗 Live Demo</a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <a href="https://food-ordering-rouge.vercel.app/" target="_blank" className="text-blue-400">   <div className="grid grid-cols-2 gap-3 mb-4">
              <img src={m3} className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg" />
              <img src={m4} className="w-full h-40 sm:h-56 md:h-64 object-cover rounded-lg" />
            </div> </a>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">
              Food Ordering Website
            </h3>

            <p className="text-sm md:text-base mb-2">
              <span className="font-semibold">Technologies:</span> HTML | Tailwind CSS | JavaScript | React
            </p>

            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base opacity-90">
              <li>Designed an interactive UI for browsing menu items and placing orders.</li>
              <li>Developed a responsive food ordering application using React and Tailwind CSS.</li>
              <li>Integrated JSON-based data for dynamic menu display.</li>
              <li>Ensured smooth browsing and efficient ordering experience.</li>
            </ul>

            <div className="mt-3 flex gap-4">
              <a href="https://github.com/Siva4121/Food-Ordering" target="_blank" className="text-blue-400">🐙 Repo</a>
              <a href="https://food-ordering-rouge.vercel.app/" target="_blank" className="text-blue-400">🔗 Live Demo</a>
            </div>
          </div>

        </div>
        <div className="flex justify-center mt-16 md:mt-24">
          <div className="bg-gray-800 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg max-w-3xl w-full text-center hover:scale-105 transition duration-300">

            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-blue-400">
              Certifications
            </h3>

            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base md:text-lg text-left">
              <li className="leading-relaxed">
                Software Engineering – Oct 03, 2023 – Infosys SpringBoard
              </li>
              <li className="leading-relaxed">
                Introduction to Artificial Intelligence – Jan 2024 – Coursera
              </li>
              <li className="leading-relaxed">
                Introduction to Deep Learning – Oct 16, 2023 – Infosys SpringBoard
              </li>
            </ul>

          </div>
        </div>

      </section >

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4 md:px-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <input type="text" placeholder="Name" required className="w-full p-2 rounded bg-gray-700" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input type="email" placeholder="Email" required className="w-full p-2 rounded bg-gray-700" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <textarea placeholder="Message" required className="w-full p-2 rounded bg-gray-700" onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea>
          <button className="cursor-pointer px-6 py-2 bg-blue-500 rounded">Send</button>
        </form>
      </section >


      <footer className="text-center p-6 opacity-50">© 2026 Siva</footer>
    </div >
  );
}