import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const contactLinks = [
    {
      id: 1,
      href: "mailto:your-email@gmail.com",
      label: "Gmail",
      icon: <FaEnvelope />,
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/your-profile",
      label: "LinkedIn",
      icon: <FaLinkedin/>,
    },
    {
      id: 3,
      href: "https://github.com/your-username",
      label: "GitHub",
      icon: <FaGithub/>,
    },
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-white">Contact Me</h2>
        <ul className="space-y-4">
          {contactLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-lg text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
