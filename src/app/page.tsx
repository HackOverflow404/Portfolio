"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Courier_Prime } from "next/font/google";
import Background from "@/components/background";
import Head from "next/head";
import Link from "next/link";
import TargetCursor from "@/components/TargetCursor";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

const btnVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, delay: 0.75 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function Home() {
  const bioText =
    "I'm a computer engineer passionate about cybersecurity, software engineering, and shaping the future of intelligent, secure tech.";

  return (
    <main className="h-[100dvh] overflow-hidden flex flex-col justify-center items-center px-6 relative cursor-none">
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Background />
      <TargetCursor
        spinDuration={5}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <motion.h1
        initial={{ opacity: 0, y: -24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`text-6xl md:text-6xl text-center text-cyan-300 z-10 ${courier.className}`}
      >
        &lt;Hi, I'm Medhansh Garg&gt;
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="mt-6 text-center text-gray-300 text-xl max-w-2xl z-10 relative justify-center"
      >
        {/* Invisible placeholder text that reserves vertical space */}
        <span className="invisible block">{bioText}</span>

        {/* Typewriter text overlays perfectly */}
        <span className="absolute inset-0 justify-center">
          <Typewriter
            words={[bioText]}
            loop={1}
            cursor
            cursorStyle="|"
            cursorBlinking={true}
            typeSpeed={40}
            delaySpeed={500}
          />
        </span>
      </motion.div>

      <motion.div
        className="mt-8 flex space-x-4 z-10"
        initial="hidden"
        animate="show"
      >
        <motion.div custom={0} variants={btnVariants}>
          <Link
            href="/about"
            className="cursor-target cursor-none bg-cyan-300 hover:bg-cyan-600 text-black px-4 py-2 rounded-xl"
          >
            About Me
          </Link>
        </motion.div>
        <motion.div custom={1} variants={btnVariants}>
          <Link
            href="/experience"
            className="cursor-target cursor-none border border-cyan-300 text-cyan-300 px-4 py-2 rounded-xl"
          >
            My Experience
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
