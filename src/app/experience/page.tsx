// Page component for the Experience page
"use client";
import Link from "next/link";
import { LuCornerDownLeft, LuX, LuLink as LinkIcon, LuDownload, LuClipboardCheck, LuChevronDown, LuChevronUp } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Courier_Prime } from "next/font/google";
import { getAssetUrl } from "@/utils/basePath";
import dynamic from "next/dynamic";
import skills from "@/data/skills";
import projects, { resumeURL, projectImagesBaseURL } from "@/data/projects";
import TargetCursor from "@/components/TargetCursor";
const Modal = dynamic(() => import("@/components/Modal"), { ssr: false });
const Carousel = dynamic(() => import("@/components/Carousel"), { ssr: false });

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });
const skillsIconsBaseURL = getAssetUrl("skills_icons/");

export default function ProjectsPage() {
  type Project = typeof projects[number];
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [collapsedHeight, setCollapsedHeight] = useState<number | null>(null);
  const [fullHeight, setFullHeight] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculate = () => {
      const grid = gridRef.current;
      if (!grid) return;
      const cards = Array.from(grid.children) as HTMLElement[];
      if (cards.length === 0) return;

      const cardHeight = cards[0].offsetHeight;
      const gap = 32; // gap-8 = 2rem = 32px

      // Get absolute top of the grid from document top
      let absTop = 0;
      let el: HTMLElement | null = grid;
      while (el) { absTop += el.offsetTop; el = el.offsetParent as HTMLElement | null; }

      // Space from grid bottom to visible "My Skills" heading:
      // ~66px show-more button area + ~120px mt-30 skills section margin + ~60px heading + 34px buffer
      const skillsHint = 280;
      const available = window.innerHeight - absTop - skillsHint;
      const rows = Math.max(1, Math.floor(available / (cardHeight + gap)));
      setCollapsedHeight(rows * cardHeight + (rows - 1) * gap);
      setFullHeight(grid.scrollHeight);
    };

    const timer = setTimeout(calculate, 60);
    window.addEventListener("resize", calculate);
    return () => { clearTimeout(timer); window.removeEventListener("resize", calculate); };
  }, []);

  // Copy handler for resume link
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="px-6 py-20 max-w-5xl mx-auto relative cursor-none">
      <TargetCursor
        spinDuration={5}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      {/* Back button to navigate to home */}
      <Link
        href="/"
        className="cursor-target cursor-none absolute mt-5 top-4 left-4 flex items-center text-cyan-300 hover:text-cyan-600"
        aria-label="Go back"
      >
        <LuCornerDownLeft className="w-5 h-5 mr-1" /> Home
      </Link>

      <section id="Experience">
      {/* Header Start */}
      <h2
        className={`text-3xl md:text-5xl text-cyan-300 mb-12 text-center ${courier.className}`}
      >
        My Experience
      </h2>
      {/* Header End */}
      
      {/* Closed Modal Start */}
      <div className="relative">
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 gap-8 overflow-hidden"
          style={{
            maxHeight:
              collapsedHeight === null
                ? undefined
                : expanded
                ? `${fullHeight}px`
                : `${collapsedHeight}px`,
            transition: "max-height 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28, scale: 0.95, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.07,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="cursor-target cursor-none border border-cyan-300 p-6 rounded-xl shadow-md bg-[#1a1a1a] hover:scale-[1.01] transition"
              onClick={() => {
                setSelected(project);
                setOpen(true);
              }}
            >
              <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Gradient fade — only when collapsed */}
        {!expanded && collapsedHeight !== null && (
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/60 to-transparent pointer-events-none" />
        )}
      </div>

      {/* Show More / Show Less button */}
      {collapsedHeight !== null && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setExpanded((e) => !e)}
            className="cursor-target cursor-none inline-flex items-center gap-2 px-6 py-2.5 border border-cyan-300/60 text-cyan-300 rounded-full text-sm tracking-wide hover:bg-cyan-300 hover:text-black hover:border-cyan-300 transition-all duration-200"
          >
            {expanded ? (
              <>Show Less <LuChevronUp className="w-4 h-4" /></>
            ) : (
              <>Show More <LuChevronDown className="w-4 h-4" /></>
            )}
          </button>
        </div>
      )}
      {/* Closed Modal End */}
      
      {/* Open Modal Start */}
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        {selected && (
          <div className="relative">
            {/* Modal Header Start */}
            <button
              className="cursor-target cursor-none absolute top-4 right-4 text-cyan-300 hover:text-cyan-500"
              onClick={() => setOpen(false)}
              aria-label="Close modal"
            >
              <LuX className="cursor-target cursor-none w-5 h-5" />
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
                      className="cursor-target cursor-none inline-flex items-center px-4 py-2 border border-cyan-300 text-cyan-300 rounded-full text-sm hover:bg-cyan-600 hover:border-cyan-600 hover:text-black transition"
                    >
                      {link.title.includes("Download") ? (
                        <LuDownload className="w-4 h-4 mr-2" />
                      ) : (
                        <LinkIcon className="w-4 h-4 mr-2" />
                      )}
                      {link.title}
                    </a>
                  ))}
                  {selected.title === "View Résumé" && (
                    <button
                      onClick={() => handleCopy(window.location.origin + resumeURL)}
                      className="inline-flex items-center px-4 py-2 border border-cyan-300 text-cyan-300 rounded-full text-sm hover:bg-cyan-600 hover:border-cyan-600 hover:text-black transition"
                    >
                      <LuClipboardCheck className="w-4 h-4 mr-2" />
                      {copied ? "Copied!" : "Copy Link"}
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
                      <div key={idx} className="relative group">
                        <img
                          src={iconPath}
                          alt={skill}
                          loading="lazy"
                          width={32}
                          height={32}
                          className="cursor-target cursor-none object-contain hover:scale-110 transition-transform"
                        />
                        <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded text-xs whitespace-nowrap bg-gray-900 text-cyan-300 border border-cyan-800 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                          {skill}
                        </span>
                      </div>
                    )
                  );
                })}
              </div>
            )}
            {/* Modal Skills End */}

            {/* Modal Image Gallery Start */}
            {selected.modalContent.images && (
              <div className="space-y-6 my-4">
                {Array.isArray(selected.modalContent.images) && selected.modalContent.images.length > 0 && (
                  <Carousel>
                    {selected.modalContent.images.map((imgUrl, idx) => (
                      <img
                        key={idx}
                        src={projectImagesBaseURL + imgUrl}
                        alt={`Project Screenshot ${idx + 1}`}
                        loading="lazy"
                        className="w-full h-60 rounded-lg border border-cyan-500 shadow-md object-contain"
                      />
                    ))}
                  </Carousel>
                )}
              </div>
            )}
            {/* Modal Image Gallery End */}

            {/* Modal Embedded Content Start */}
            {selected.modalContent.embed && (
              <div className="my-4 space-y-6">
                {Array.isArray(selected.modalContent.embed) && selected.modalContent.embed.length > 0 && (
                  <div className="space-y-6">
                    {selected.modalContent.embed.map((url, idx) => {
                      const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");
                      return (
                        <div key={idx} className="cursor-target cursor-none w-full aspect-video border border-cyan-500 rounded shadow-lg overflow-hidden">
                          <iframe
                            src={
                              isYouTube
                                ? url.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/")
                                : url
                            }
                            title={`Embedded Content ${idx + 1}`}
                            className="w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                            style={{ border: "none" }}
                          />
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
            {/* Modal Embedded Content End */}
            
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
            {selected.title === "View Résumé" && (
              <div className="cursor-target cursor-none w-full h-[60vh] mt-6 border border-cyan-500 rounded overflow-hidden shadow-lg">
                <iframe
                  src={resumeURL}
                  className="w-full h-full"
                  title="Résumé Preview"
                  style={{ border: "none" }}
                ></iframe>
              </div>
            )}
            {/* Resume View Logic End */}
          </div>
        )}
      </Modal>
      {/* Open Modal End */}
      </section>

      <section id="Skills">
        {/* Skills Header Start */}
        <motion.h2
          initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`text-3xl md:text-5xl text-cyan-300 mt-30 text-center ${courier.className}`}
          >
          My Skills
        </motion.h2>
        {/* Skills Header End */}

        {/* Skills Carousel Start */}
        <div className="mt-12 space-y-12">
          {Object.entries(skills).map(([category, skillMap], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="mb-12"
            >
              <h3 className="text-xl text-cyan-300 mb-4">{category}</h3>
              <Carousel>
                {Object.entries(skillMap).map(([skillName, iconPath]) => (
                  <div
                    key={skillName}
                    className="cursor-target cursor-none w-28 sm:w-40 lg:w-36 h-auto mt-1 shrink-0 flex flex-col items-center justify-center border border-cyan-300 bg-[#1a1a1a] rounded-xl p-4 transition hover:-translate-y-1 hover:shadow-lg hover:border-cyan-600"
                  >
                    <img
                      src={skillsIconsBaseURL + iconPath}
                      alt={skillName}
                      loading="lazy"
                      width={40}
                      height={40}
                      className="mb-2"
                    />
                    <span className="text-sm text-gray-300 text-center">{skillName}</span>
                  </div>
                ))}
              </Carousel>
            </motion.div>
          ))}
        </div>
        {/* Skills Carousel End */}
      </section>
    </main>
  );
}