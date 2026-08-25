// Page component for the About page
"use client";
import { Courier_Prime } from "next/font/google";
import { getAssetUrl } from "@/utils/basePath";
import { LuCornerDownLeft } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import TargetCursor from "@/components/TargetCursor";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });


const aboutSections = [
  {
    id: "Who-I-Am",
    heading: "Who I Am",
    body: "I'm Medhansh Garg, a Computer Engineering student at UIUC with a strong interest in cybersecurity and embedded systems. I like building things that actually work, and I like understanding them well enough to know where they might break.",
  },
  {
    id: "The-Spark",
    heading: "The Spark",
    body: "I got into computers pretty young, mostly out of curiosity about how a screen could do so much. That curiosity turned into learning how things actually work under the hood, which eventually turned into noticing that most systems have flaws if you look closely enough.",
  },
  {
    id: "The-Hackers-Path",
    heading: "The Hacker's Path",
    body: "The systems we rely on for our data and daily lives aren't perfect. They're only as strong as the people trying to break them, and as good as the people building them. That's basically what pulled me toward security. I didn't just want to build systems, I wanted to test them, find their weak points, and think like an attacker so I could build better defenses.",
  },
  {
    id: "Engineering-Curiosity",
    heading: "Engineering Curiosity",
    body: "To break something well, you have to understand it better than the people who built it. That mindset is what led me into cybersecurity and computer engineering, and it's kept me busy with CTFs, embedded devices, low level programming, and systems security ever since. I learn best by building things, especially things I actually need.",
  },
  {
    id: "Learning-Through-Creation",
    heading: "Learning Through Creation",
    body: "When I lost the remote to my LED strip, I built a replacement using MQTT, then later added Matter support for smart home compatibility. When my laptop's webcam and mic stopped working, I built a cross platform replacement with WebRTC, which got me into secure real time media, PWA design, and Linux GUI development along the way. Most of my projects start from a real problem I ran into, not a hypothetical one, and I try to build them properly with real data validation, access control, and clean code.",
  },
  {
    id: "Pushing-the-Perimeter",
    heading: "Pushing the Perimeter",
    body: "I hold a cybersecurity certification from NYU and I'm currently working toward the OSCP. I also traveled to Milwaukee for CypherCon, a hacker conference with CTFs, talks, and a lot of people working on the same kinds of problems I'm interested in. It was a good reminder that this stuff is more fun with a community around it.",
  },
  {
    id: "Beyond-the-Code",
    heading: "Beyond the Code",
    body: "Outside of code, I spend time at the gym and try to get out for adventure sports when I can. I like staying active and I like a good challenge, on or off the keyboard.",
  },
  {
    id: "What-Comes-Next",
    heading: "What Comes Next",
    body: "I'm still early in this. Right now that means finishing my degree, building projects that solve problems I actually run into, and getting better at security research along the way.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function AboutPage() {
  const contactLinks = [
    { href: "mailto:medhansh2005@gmail.com", icon: <MdEmail className="w-5 h-5" />, label: "Email" },
    { href: "tel:+12179042064", icon: <IoCall className="w-5 h-5" />, label: "Phone" },
    { href: "https://linkedin.com/in/medhansh-garg/", icon: <FaLinkedin className="w-5 h-5" />, label: "LinkedIn", external: true },
    { href: "https://github.com/HackOverflow404", icon: <FaGithub className="w-5 h-5" />, label: "GitHub", external: true },
  ];

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
        <LuCornerDownLeft className="w-5 h-5 mr-1" />
        Home
      </Link>

      {/* Header Start */}
      <h2
        className={`text-3xl md:text-5xl text-cyan-300 mb-12 text-center ${courier.className}`}
        id="About-Me"
      >
        About Me
      </h2>

      {/* Photo - scale-in reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.65, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="flex justify-center my-12"
      >
        <picture>
          <source srcSet={getAssetUrl("images/Medhansh_Garg.avif")} type="image/avif" />
          <source srcSet={getAssetUrl("images/Medhansh_Garg.webp")} type="image/webp" />
          <img
            src={getAssetUrl("images/Medhansh_Garg.png")}
            alt="Medhansh Garg"
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </motion.div>
      {/* Header End */}

      {/* Contact Info - staggered pop-up */}
      <motion.section
        id="Contact-Info"
        className="flex flex-wrap justify-center gap-6 text-cyan-300 my-12"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.65 } } }}
      >
        {contactLinks.map(({ href, icon, label, external }) => (
          <motion.div
            key={label}
            variants={{
              hidden: { opacity: 0, y: 14, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
            }}
          >
            <Link
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="cursor-target cursor-none flex items-center gap-2 hover:text-cyan-500 transition-colors duration-200 border border-transparent hover:border-cyan-700 px-4 py-2 rounded-md"
            >
              {icon}
              {label}
            </Link>
          </motion.div>
        ))}
      </motion.section>
      {/* Contact Info End */}

      {/* About Me - per-section horizontal drift on scroll */}
      <div className="space-y-6 text-gray-300 text-lg my-6">
        {aboutSections.map((section) => (
          <motion.section
            key={section.id}
            id={section.id}
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>
              {section.heading}
            </h3>
            <p>{section.body}</p>
          </motion.section>
        ))}
      </div>
      {/* About Me End */}
    </main>
  );
}
