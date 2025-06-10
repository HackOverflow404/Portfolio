'use client';
import Link from 'next/link';
import Head from "next/head";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Courier_Prime } from "next/font/google";
import Background from "@/components/background";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className="h-[100dvh] overflow-hidden flex flex-col justify-center items-center px-6 relative">
      <Head>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Background />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-6xl md:text-6xl text-center text-cyan-300 z-10 ${courier.className}`}
      >
        &lt;Hi, I’m Medhansh Garg&gt;
      </motion.h1>

      <p className="mt-6 text-center text-gray-300 text-xl max-w-2xl z-10">
        <Typewriter
          words={[
            "I'm a computer engineer passionate about cybersecurity, software engineering, and shaping the future of intelligent, secure tech."
          ]}
          loop={1}
          cursor
          cursorStyle="|"
          cursorBlinking={true}
          typeSpeed={40}
          delaySpeed={500}
        />
      </p>

      <div className="mt-8 flex space-x-4 z-10">
        <Link href="/about" className="bg-cyan-300 hover:bg-cyan-600 text-black px-4 py-2 rounded-xl">About Me</Link>
        <Link href="/experience" className="border border-cyan-300 text-cyan-300 px-4 py-2 rounded-xl">My Experience</Link>
      </div>
    </main>
  );
}