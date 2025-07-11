// Page component for the About page
"use client";
import { Courier_Prime } from "next/font/google";
import { getAssetUrl } from "@/utils/basePath";
import { LuCornerDownLeft } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="px-6 py-20 max-w-5xl mx-auto relative">
      {/* Back button to navigate to home */}
      <button
        onClick={() => router.push("/")}
        className="absolute mt-5 top-4 left-4 flex items-center text-cyan-300 hover:text-cyan-600"
        aria-label="Go back"
      >
        <LuCornerDownLeft className="w-5 h-5 mr-1" />
        Home
      </button>
      
      {/* Header Start */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-5xl text-cyan-300 mb-12 text-center ${courier.className}`}
        id="About-Me"
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
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

      {/* Contact Info Start */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="text-gray-300 text-lg my-12"
      >
        <section
          id="Contact-Info"
          className="flex flex-wrap justify-center gap-6 text-cyan-300"
        >
          <Link
            href="mailto:medhansh2005@gmail.com"
            className="flex items-center gap-2 hover:text-cyan-500 transition-colors duration-200 border border-transparent hover:border-cyan-700 px-4 py-2 rounded-md"
          >
            <MdEmail className="w-5 h-5" />
            Email
          </Link>
          <Link
            href="tel:+12179042064"
            className="flex items-center gap-2 hover:text-cyan-500 transition-colors duration-200 border border-transparent hover:border-cyan-700 px-4 py-2 rounded-md"
          >
            <IoCall className="w-5 h-5" />
            Phone
          </Link>
          <Link
            href="https://linkedin.com/in/medhansh-garg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-500 transition-colors duration-200 border border-transparent hover:border-cyan-700 px-4 py-2 rounded-md"
          >
            <FaLinkedin className="w-5 h-5" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/HackOverflow404"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-500 transition-colors duration-200 border border-transparent hover:border-cyan-700 px-4 py-2 rounded-md"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </Link>
        </section>
      </motion.div>
      {/* Contact Info End */}

        
      {/* About Me Start */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.2 }}
        className="space-y-6 text-gray-300 text-lg my-6"
      >
        <section id="Who-I-Am">
          <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>Who I Am</h3>
          <p>
            I'm Medhansh Garg, a Computer Engineering student at UIUC with an unshakable obsession for cybersecurity, embedded systems, and software that not only works, but works with purpose. My playground is the intersection of hardware and software, security and creativity, where a single vulnerability can spark a revelation, and a single project can transform into a lifelong pursuit.
          </p>
        </section>

        <section id="The-Spark">
          <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>The Spark</h3>
          <p>
            My journey with computers began in childhood, staring wide-eyed at a glowing screen that seemed less like a machine and more like magic. This “mystery box” could do things beyond human comprehension, not by chance, but by design. It wasn't long before I realized this magic was made of 0s and 1s, and those who truly understood them could wield godlike power. But that magic, I came to learn, was flawed.
          </p>
        </section>

        <section id="The-Hackers-Path">
          <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>The Hacker's Path</h3>
          <p>
            The very systems we entrust with our lives, our data, our future, they're imperfect. Breakable. Vulnerable. They're only as strong as the people trying to break them, and as clever as the ones trying to build them. That realization didn't terrify me, it thrilled me. I didn't want to just build the system. I wanted to test its soul. To stress its boundaries. To shatter its illusions of invincibility and uncover the raw, imperfect reality beneath. I wanted to be the hacker, not to harm, but to understand. To think like an adversary so I could one day outsmart one.
          </p>
        </section>

        <section id="Engineering-Curiosity">
          <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>Engineering Curiosity</h3>
          <p>
            That desire to break things and truly understand how they work led me into cybersecurity and computer engineering. I believe that to break a system, you must know it better than its creators. Every protocol, every memory register, every transistor matters. And so I've spent years immersed in CTFs, embedded devices, AI optimization, low-level programming, and systems security. I solve hard problems by making things that matter, and I learn by building things I wish existed.
          </p>
        </section>

        <section id="Learning-Through-Creation">
          <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>Learning Through Creation</h3>
          <p>
            When I lost the remote to my LED strip, I built a smart one, not just to turn on lights, but to explore MQTT protocols and understand how networked devices negotiate control. Then I leveled up, integrating it with Matter for smart home interoperability. When my laptop's webcam and microphone failed, I didn't replace them; I built a cross-platform solution with WebRTC, learning secure real-time media transfer, PWA design, and even Linux GUI development along the way. My projects don't live in isolation; they echo real frustrations and real learning, secured with data validation, access control, and clean code.
          </p>
        </section>

        <section id="Pushing-the-Perimeter">
          <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>Pushing the Perimeter</h3>
          <p>
            But my curiosity doesn't stop at the keyboard. I earned a certification in cybersecurity from NYU and am currently working toward the OSCP because I believe true skill is forged in persistence, not passivity. I devour new technologies like oxygen, because in this field, staying still is falling behind. I even traveled to Milwaukee for CypherCon, a hacker conference where I immersed myself in real-world CTFs, puzzles, and conversations with industry veterans. It wasn't just about learning, it was about stepping into the community, exchanging ideas with those shaping the security landscape, and realizing that the quest for knowledge thrives in the minds of those who are willing to seek, break, and rebuild.
          </p>
        </section>

        <section id="Beyond-the-Code">
          <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>Beyond the Code</h3>
          <p>
            Outside the digital world, I'm just as intense, hitting the gym, challenging myself in adventure sports, and living with the same hunger I bring to every line of code. I'm not here to settle for what's already been done. I'm here to create, question, hack, and learn, again and again.
          </p>
        </section>

        <section id="What-Comes-Next">
          <h3 className={`text-2xl font-semibold text-cyan-300 mb-2 ${courier.className}`}>What Comes Next</h3>
          <p>
            This is just the beginning. I'm not just building systems. I'm building the future, one secure, elegant, uncompromising idea at a time.
          </p>
        </section>
      </motion.div>
      {/* About Me End */}
    </main>
  );
}