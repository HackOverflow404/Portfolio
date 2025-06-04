'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import { Courier_Prime } from "next/font/google";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  useEffect(() => {
    const particlesContainer = document.getElementById('particles-container');
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';

      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;

      resetParticle(particle);
      particlesContainer?.appendChild(particle);
      animateParticle(particle);
    }

    interface ParticlePosition {
      x: number;
      y: number;
    }

    function resetParticle(particle: HTMLDivElement): ParticlePosition {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = '0';
      return { x: posX, y: posY };
    }

    interface AnimateParticleOptions {
      particle: HTMLDivElement;
    }

    function animateParticle(particle: HTMLDivElement): void {
      const pos: ParticlePosition = resetParticle(particle);
      const duration: number = Math.random() * 10 + 10;
      const delay: number = Math.random() * 5;

      setTimeout(() => {
      particle.style.transition = `all ${duration}s linear`;
      particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();

      const moveX: number = pos.x + (Math.random() * 20 - 10);
      const moveY: number = pos.y - Math.random() * 30;

      particle.style.left = `${moveX}%`;
      particle.style.top = `${moveY}%`;

      setTimeout(() => {
        animateParticle(particle);
      }, duration * 1000);
      }, delay * 1000);
    }

    document.addEventListener('mousemove', (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = '0.6';

      particlesContainer?.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = 'all 2s ease-out';
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = '0';
        setTimeout(() => {
          particle.remove();
        }, 2000);
      }, 10);

      const spheres = document.querySelectorAll('.gradient-sphere');
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;

      spheres.forEach(sphere => {
        (sphere as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }, []);

  return (
    <main className="h-[100dvh] overflow-hidden flex flex-col justify-center items-center px-6 relative">
      <div className="absolute inset-0 z-0 gradient-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="glow"></div>
        <div className="particles-container" id="particles-container"></div>
      </div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-5xl md:text-6xl text-center text-cyan-300 z-10 ${courier.className}`}
      >
        &lt;Hi, I’m Medhansh Garg&gt;
      </motion.h1>

      <p className="mt-6 text-center text-gray-300 text-lg max-w-2xl z-10">
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
    </main>
  );
}