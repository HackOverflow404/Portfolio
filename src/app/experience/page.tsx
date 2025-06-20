// Page component for the Experience page
'use client';
import { LuCornerDownLeft, LuX, LuLink as LinkIcon, LuDownload, LuClipboardCheck } from 'react-icons/lu';
import { motion } from 'framer-motion';
import projects, { resumeURL } from '@/data/projects';
import { useState, useEffect } from 'react';
import { Courier_Prime } from "next/font/google";
import { getAssetUrl } from '@/utils/basePath';
import { useRouter } from 'next/navigation';
import skills from '@/data/skills';
import Modal from '@/components/Modal';
import Carousel from "@/components/Carousel";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });
const skillsIconsBaseURL = getAssetUrl('skills_icons');

export default function ProjectsPage() {
  type Project = typeof projects[number];
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);

  // Copy handler for resume link
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="px-6 py-20 max-w-5xl mx-auto relative">
      {/* Back button to navigate to home */}
      <button
        onClick={() => router.push("/")}
        className="absolute mt-5 top-4 left-4 flex items-center text-cyan-300 hover:text-cyan-600"
        aria-label="Go back"
      >
        <LuCornerDownLeft className="w-5 h-5 mr-1" /> Home
      </button>

      {/* Header Start */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-5xl text-cyan-300 mb-12 text-center ${courier.className}`}
      >
        My Experience
      </motion.h2>
      {/* Header End */}
      
      {/* Closed Modal Start */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {/* For every project, render a modal div */}
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
      {/* Closed Modal End */}
      
      {/* Open Modal Start */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        {selected && (
          <div className="relative">
            {/* Modal Header Start */}
            <button
              className="absolute top-4 right-4 text-cyan-300 hover:text-cyan-500"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
            >
              <LuX className="w-5 h-5" />
            </button>

            <h2 className={`text-2xl font-bold text-cyan-300 mb-4 ${courier.className}`}>{selected.modalContent.title}</h2>
            {/* Modal Header End */}

            {/* Modal Link Start */}
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
                        <LuDownload className="w-4 h-4 mr-2" />
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
                      <LuClipboardCheck className="w-4 h-4 mr-2" />
                      {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                  )}
                </div>
              </div>
            )}
            {/* Modal Links End */}
            
            {/* Modal Skills Start */}
            {Array.isArray(selected.modalContent.skills) && selected.modalContent.skills.length > 0 && (
              <div className="my-4 flex flex-wrap gap-4 items-center">
                {selected.modalContent.skills.map((skill, idx) => {
                  let iconPath = "";
                  Object.values(skills).forEach((category) => {
                    if (skill in category) {
                      iconPath = skillsIconsBaseURL + (category as Record<string, string>)[skill];
                    }
                  });
                  return (
                    iconPath && (
                      <img
                      key={idx}
                      src={iconPath}
                      alt={skill}
                      title={skill}
                      width={32}
                      height={32}
                      className="object-contain hover:scale-110 transition-transform"
                    />
                    )
                  );
                })}
              </div>
            )}
            {/* Modal Skills End */}

            {/* Modal Content Start */}
            <div className="space-y-4 text-gray-300">
              {Array.isArray(selected.modalContent.description)
                ? selected.modalContent.description.map((p, idx) => (
                    <p key={idx} className="text-sm leading-relaxed">{p}</p>
                  ))
                : <p className="text-sm leading-relaxed">{selected.modalContent.description}</p>
              }
            </div>
            {/* Modal Content End */}

            {/* Resume View Logic Start */}
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
            {/* Resume View Logic End */}
          </div>
        )}
      </Modal>
      {/* Open Modal End */}

      {/* Skills Header Start */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-5xl text-cyan-300 mt-30 text-center ${courier.className}`}
        >
        My Skills
      </motion.h2>
      {/* Skills Header End */}

      {/* Skills Carousel Start */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12 space-y-12"
      >
        {Object.entries(skills).map(([category, skillMap]) => (
          <div key={category} className="mb-12">
            <h3 className="text-xl text-cyan-300 mb-4">{category}</h3>
            <Carousel>
              {Object.entries(skillMap).map(([skillName, iconPath]) => (
                <div
                  key={skillName}
                  className="w-28 sm:w-40 lg:w-36 h-auto mt-1 shrink-0 flex flex-col items-center justify-center border border-cyan-300 bg-[#1a1a1a] rounded-xl p-4 transition hover:-translate-y-1 hover:shadow-lg hover:border-cyan-600"
                >
                  <img
                    src={skillsIconsBaseURL + iconPath}
                    alt={skillName}
                    width={40}
                    height={40}
                    className="mb-2"
                  />
                  <span className="text-sm text-gray-300 text-center">{skillName}</span>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </motion.div>
      {/* Skills Carousel End */}
    </main>
  );
}