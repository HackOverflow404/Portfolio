'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Courier_Prime } from "next/font/google";
import CircuitBg1 from '@/components/CircuitBackground1';
import CircuitBg2 from '@/components/CircuitBackground2';
import PulseBg from '@/components/PulseBackground';


const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  const [open, setOpen] = useState<boolean>(false);
  const [background, setBackground] = useState<number | null>(null);

  return (
    <main className="h-[100dvh] overflow-hidden flex flex-col justify-center items-center px-6 relative">
      {/* Background Component Logic */}
      {background === 0 && <PulseBg />}
      {background === 1 && <CircuitBg1 />}
      {background === 2 && <CircuitBg2 />}

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
        <Link href="/work" className="border border-cyan-300 text-cyan-300 px-4 py-2 rounded-xl">My Work</Link>
      </div>

      <div className="absolute bottom-4 right-4 z-10">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-cyan-300 text-black px-3 py-1 rounded-lg font-bold shadow hover:bg-cyan-200 transition-all"
        >
          {open ? 'Hide Backgrounds' : 'Show Backgrounds'}
        </button>

        {/* Animated Panel */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="background-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden mt-2 bg-black bg-opacity-50 border border-cyan-300 rounded-lg p-4 text-sm text-cyan-200"
            >
              <p className="mb-2 font-bold text-cyan-300">Background Style:</p>
              <div className="flex flex-col space-y-2">
                <button onClick={() => {setBackground(null); setOpen(false)}} className="hover:bg-cyan-300 hover:text-black px-2 py-1 rounded transition-all duration-150">
                  None
                </button>
                <button onClick={() => {setBackground(0); setOpen(false)}} className="hover:bg-cyan-300 hover:text-black px-2 py-1 rounded transition-all duration-150">
                  Pulse + Particles
                </button>
                <button onClick={() => {setBackground(1); setOpen(false)}} className="hover:bg-cyan-300 hover:text-black px-2 py-1 rounded transition-all duration-150">
                  Circuit 1
                </button>
                <button onClick={() => {setBackground(2); setOpen(false)}} className="hover:bg-cyan-300 hover:text-black px-2 py-1 rounded transition-all duration-150">
                  Circuit 2
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}