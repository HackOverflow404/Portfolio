'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerDownLeft, X, Link as LinkIcon, Download, ClipboardCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Courier_Prime } from "next/font/google";
import { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import Image from 'next/image';
import projects, { resumeURL } from '@/data/projects';
import { getAssetUrl } from '@/utils/basePath';

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });
const skillsIconsBaseURL = getAssetUrl('skills_icons');

const skills = {
  "Core Programming Languages": {"Python": "/python.svg", "C": "/c.svg", "C++": "/cpp.svg", "JavaScript": "/javascript.svg", "TypeScript": "/typescript.svg", "Java": "/java.svg", "HTML/CSS": "/html.svg"},
  "Software & Web Development": {"React/React Native": "/react.svg", "Next.js": "/next.svg", "QtPython": "/qtpython.svg", "Flask": "/flask.svg", "Spring Boot": "/springboot.svg", "SQLite": "/sqlite.svg", "Docker": "/docker.svg", "Firebase": "/firebase.svg", "Vercel": "/vercel.svg", "Figma": "/figma.svg", "Cross-Platform Apps": "/crossplatform.svg", "Responsive Design": "/responsive.svg", "REST APIs": "/rest.svg", "Progressive Web Apps (PWA)": "/pwa.svg", "Tailwind CSS": "/tailwind.svg"},
  "Embedded Systems & Hardware": {"ESP32": "/esp32.svg", "Raspberry Pi": "/raspberrypi.svg", "Circuit Design": "/circuit.svg", "MQTT": "/mqtt.svg", "Protocol Debugging": "/protocol.svg", "GStreamer": "/gstreamer.svg"},
  "Cybersecurity & Systems": {"Pentesting Fundamentals": "/pentesting.svg", "WebRTC": "/webrtc.svg", "Network Protocol Analysis": "/network.svg", "CTFs (Sigpwny, CypherCon)": "/sigpwny.svg", "Hashcat": "/hashcat.svg", "Linux": "/linux.svg"},
  "AI & Tooling": {"LangChain + OpenAI": "/langchain.svg", "YOLO": "/yolo.svg", "TensorFlow": "/tensorflow.svg", "PyTorch": "/pytorch.svg", "Pandas": "/pandas.svg"},
};

export default function ProjectsPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  type Project = typeof projects[number];
  const [selected, setSelected] = useState<Project | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="px-6 py-20 max-w-5xl mx-auto relative">
      <button
        onClick={() => router.push("/")}
        className="absolute mt-5 top-4 left-4 flex items-center text-cyan-300 hover:text-cyan-600"
        aria-label="Go back"
      >
        <CornerDownLeft className="w-5 h-5 mr-1" />
        Home
      </button>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-5xl text-cyan-300 mb-12 text-center ${courier.className}`}
      >
        My Experience
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.map((project, i) => (
          <div
            key={i}
            className="border border-cyan-300 p-6 rounded-xl shadow-md bg-[#1a1a1a] hover:cursor-pointer hover:scale-[1.01] transition"
            onClick={() => {
              setSelected(project);
              setOpen(true);
            }}
          >
            <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm">{project.description}</p>
          </div>
        ))}
      </motion.div>

      <AnimatePresence>
        {open && selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              ref={modalRef}
              className="bg-[#1a1a1a] max-w-2xl w-full m-2 max-h-[80vh] scrollbar-hide overflow-y-auto rounded-xl p-6 relative border border-cyan-400"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-cyan-300 hover:text-cyan-500"
                onClick={() => setOpen(false)}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className={`text-2xl font-bold text-cyan-300 mb-4 ${courier.className}`}>{selected.modalContent.title}</h2>
              {Array.isArray(selected.modalContent.links) && selected.modalContent.links.length > 0 && (
                <div className="my-4">
                  <div className="flex flex-wrap gap-3">
                    {selected.modalContent.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-cyan-300 text-cyan-300 rounded-full text-sm hover:bg-cyan-600 hover:border-cyan-600 hover:text-black transition"
                      >
                        {link.title.includes('Download') ? (
                          <Download className="w-4 h-4 mr-2" />
                        ) : (
                          <LinkIcon className="w-4 h-4 mr-2" />
                        )}
                        {link.title}
                      </a>
                    ))}
                    {selected.title === "View Resume" && (
                      <button
                        onClick={() => handleCopy(window.location.origin + resumeURL)}
                        className="inline-flex items-center px-4 py-2 border border-cyan-300 text-cyan-300 rounded-full text-sm hover:bg-cyan-600 hover:border-cyan-600 hover:text-black transition"
                      >
                        <ClipboardCheck className="w-4 h-4 mr-2" />
                        {copied ? 'Copied!' : 'Copy Link'}
                      </button>
                    )}
                  </div>
                </div>
              )}
              {Array.isArray(selected.modalContent.skills) && selected.modalContent.skills.length > 0 && (
                <div className="my-4">
                  <div className="flex flex-wrap gap-4 items-center">
                    {selected.modalContent.skills.map((skill, idx) => {
                      let iconPath = "";
                      Object.values(skills).forEach((category) => {
                        if (skill in category) {
                          iconPath = skillsIconsBaseURL + (category as Record<string, string>)[skill];
                        }
                      });
                      return (
                        iconPath && (
                          <Image
                            key={idx}
                            src={iconPath}
                            alt={skill}
                            title={skill}
                            className="h-8 w-8 object-contain hover:scale-110 transition-transform"
                            unoptimized
                          />
                        )
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="space-y-4 text-gray-300">
                {Array.isArray(selected.modalContent.description)
                  ? selected.modalContent.description.map((p, idx) => (
                      <p key={idx} className="text-sm leading-relaxed">{p}</p>
                    ))
                  : <p className="text-sm leading-relaxed">{selected.modalContent.description}</p>
                }
              </div>
              {selected.title === "View Resume" && (
                <div className="w-full h-[60vh] mt-6 border border-cyan-500 rounded overflow-hidden shadow-lg">
                  <iframe
                    src={resumeURL}
                    className="w-full h-full"
                    title="Resume Preview"
                    style={{ border: 'none' }}
                  ></iframe>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-5xl text-cyan-300 mt-30 text-center ${courier.className}`}
      >
        My Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12 space-y-12"
      >
        {Object.entries(skills).map(([category, skillMap]) => (
          <div key={category}>
            <h3 className="text-xl text-cyan-300 mb-4">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {Object.entries(skillMap).map(([skillName, iconPath]) => (
                <div
                  key={skillName}
                  className="flex flex-col items-center justify-center border border-cyan-300 bg-[#1a1a1a] p-4 rounded-xl transition transform hover:-translate-y-1 hover:shadow-lg hover:border-cyan-600"
                >
                  <Image
                    src={skillsIconsBaseURL + iconPath}
                    alt={skillName}
                    width={40}
                    height={40}
                    className="mb-2"
                    unoptimized
                  />
                  <span className="text-sm text-gray-300 text-center">{skillName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </main>
  );
}