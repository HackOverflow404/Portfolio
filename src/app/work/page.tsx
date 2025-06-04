'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CornerDownLeft, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Courier_Prime } from "next/font/google";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400", "700"] });

const projects = [
  {
    title: "Repurposing Old Laptop",
    description: "Disassembled an Acer Aspire 4736G and working to repurpose components such as battery, fan, LCD screen, keyboard, trackpad, and fingerprint reader.",
    modalContent: {
      title: "Anatomy of a Machine: The Legacy Laptop Project",
      description: [
        "This laptop has been part of our family for nearly two decades, a machine that once ran homework assignments, streamed movies, and powered my first lines of code. Over the years, it evolved alongside me. I transformed it into a home server running Ubuntu, a media center powered by Kodi, a pentesting lab with Kali Linux, and even a fully virtualized home lab using a Type-1 hypervisor. In 11th grade, driven purely by curiosity, I disassembled it down to the last screw, not to repair it, but to understand it. To learn what made it tick.",
        "Now, with little use for the laptop as a whole, I’ve returned to it once again, this time with a different mission: to give its parts new life through engineering and invention.",
        "It began with the fan. I repurposed it as active cooling for my Raspberry Pi, breathing new utility into a component most would discard. I dove deep into circuit schematics I unearthed online, cross-referencing motherboard layouts and datasheets, mapping out traces, testing signals and voltages with a multimeter. One by one, I began decoding the protocols that tied each subsystem together. Through probing and logic, I deduced that the fingerprint sensor communicated over 3V USB, not just a guess, but a calculated inference grounded in electrical behavior and datasheet breadcrumbs.",
        "Then came the LCD screen. I learned that it uses an LVDS (Low Voltage Differential Signaling) interface, a protocol common in older display hardware. I plan to pair it with a third-party controller board, converting it into a functional external monitor for my Raspberry Pi or a headless server dashboard. It's not plug-and-play, it’s research, solder, test, fail, repeat. But that’s the joy of it.",
        "The laptop’s stereo speakers also found a second life. Inspired by the operational amplifier circuits I learned to build in my ECE 110 course, I initially used an LM358 to create a basic audio amplifier. It worked, barely. The output was faint, distorted, and underpowered. So I iterated. I upgraded to an LM386-based audio module and wired it to a salvaged 3.5mm headphone jack from a broken pair of earbuds. The result? A compact, self-powered speaker that plays music from my Raspberry Pi with clarity and volume.",
        "This project is far from over. Every component is a puzzle, a microcosm of engineering principles waiting to be rediscovered. I’m continually learning how signals propagate, how buses negotiate data, and how standards like I²C, LVDS, and USB manifest in real hardware. I’m not just recycling; I’m reverse-engineering, decoding, rebuilding.",
        "In a world obsessed with the new, I’m finding wonder in the old. I'm not just tearing down a machine, I’m reimagining it. Piece by piece, lesson by lesson."
      ],
      images: [],
      links: []
    }
  },
  {
    title: "RemoteCam",
    description: "A cross-platform webcam and microphone streaming app built using WebRTC and Firebase signaling, with a mobile PWA frontend and a QtPython + GStreamer desktop client.",
    modalContent: {
      title: "RemoteCam: Engineering Seamless Communication",
      description: [
        "The project began with a frustration familiar to many: my laptop’s built-in webcam and microphone had become unusable for video calls, the video was laggy and grainy, the audio drowned in static and background noise. The simple solution would have been to buy a new webcam or plug in a headset with a built-in mic. But I had something better, an iPhone with world-class imaging and sound hardware. Rather than buying another device, I saw a challenge: could I turn the phone I already carried into a fully functional wireless webcam and microphone for my Ubuntu laptop?",
        "At the same time, I was deeply curious about how devices communicate in real time over the internet, a fascination with WebSockets and protocols used in systems like FaceTime and Zoom. I didn’t just want a solution. I wanted to build the solution. And I wanted it to teach me everything I didn't yet know.",
        "Taking inspiration from Apple’s Continuity Camera, I envisioned a seamless, cross-platform experience that could securely stream high-quality video and audio from my iPhone to my Linux machine. Thanks to my internship, I already had experience with GStreamer, a powerful media streaming toolkit, and decided to extend those skills further. I would build an end-to-end system: a wireless, real-time camera and mic platform powered by modern web protocols.",
        "The next step was architectural design. I considered using WebSockets for the communication layer but quickly realized their limitations: they’re great for basic messaging but lack the real-time, peer-to-peer efficiency and NAT traversal capabilities I needed. WebRTC, on the other hand, was designed from the ground up for streaming audio, video, and arbitrary data with low latency and high security, and came with built-in support for ICE, STUN, and TURN to negotiate connections through complex networks. WebRTC was the obvious choice.",
        "I began development with a plan: the desktop client would be written in QtPython with a GStreamer backend, and the mobile app in React Native. I was fluent in both ecosystems, Python for scripting and fast iteration, and React Native for cross-platform mobile UI. But almost immediately, I hit a wall.",
        "To build a WebRTC-enabled React Native app for iOS, I needed a Mac and an Apple Developer Account. Why? Because Apple requires native code to be compiled with Xcode on macOS, mandates signed apps for device testing, and the react-native-webrtc package uses low-level iOS APIs that Expo Go simply doesn’t support. Without access to macOS or a paid developer profile, the project was dead in the water.",
        "That is, until I discovered Progressive Web Apps (PWAs).",
        "PWAs bypass Apple’s restrictions entirely, while remaining installable and responsive across devices. They offer the cross-platform flexibility I needed, and WebRTC runs natively in Safari and modern browsers. Though PWAs come with trade-offs, no persistent background services, and limited access to certain native features, none of those limitations blocked my goals. This discovery was a turning point.",
        "I pivoted immediately. I designed a sleek frontend in Next.js for the mobile PWA and paired it with a robust Linux client using GStreamer and PyQt. For signaling, I turned to Firebase, a platform I had used before and trusted for its real-time database and seamless integration with serverless functions. With Firebase Cloud Functions, I locked down signaling security: only functions could read or write to the database, and users could only initiate a connection with a randomly generated, time-limited 5-character session code, adding a layer of authentication and privacy by design.",
        "Development accelerated, but not without pain. WebRTC, while powerful, is notoriously complex. I encountered every kind of issue: misformatted SDP offers, ICE candidates failing to gather, TURN servers being unreachable, inconsistencies between mobile and desktop codecs, and edge-case connection bugs that refused to explain themselves. I poured over browser debugging consoles, traced media flows through GStreamer logs, and dissected packet behavior in Wireshark, skills honed through past hands-on experience through internships, certifications, and CTFs. I tested and tuned everything from STUN fallback logic to media pipeline latency.",
        "The connection still fails despite countless hours of debugging, I haven’t yet uncovered why. But chasing this vision has been a masterclass in itself. I’ve gained a deep understanding of WebRTC’s internals, the architecture of real-time media systems, secure cloud-based signaling, cross-platform performance challenges, and the subtle behavioral quirks that differ between browsers on iOS and Android. Though the system doesn’t work yet, the knowledge I’ve earned along the way is already invaluable, and I’m committed to solving the puzzle, no matter how long it takes.",
        "What began as a workaround to a broken webcam has grown into a living laboratory, one that has taught me how modern internet-based communication works and how hard it is to make it just feel easy.",
        "The project is ongoing. The connection bugs will be fixed. But already, RemoteCam has served its purpose, not just to connect devices, but to connect me with the limits of my knowledge, and push me far beyond them."
      ],
      images: [],
      links: [{ title: "Github Repo", url: "https://github.com/HackOverflow404/RemoteWebcam" }]
    }
  },
  {
    title: "PCB Badge + CTF at Sigpwny",
    description: "Helped design an ESP32-based DEFCON-style badge and helped design CTF challenges for UIUCTF. Worked on SAO compatibility and embedded firmware.",
    modalContent: {
      title: "PCB Badge + CTF at Sigpwny",
      description: "This project involved designing a PCB badge for the DEFCON conference, as well as creating Capture The Flag (CTF) challenges for the UIUCTF competition. I worked on ensuring SAO compatibility and developing embedded firmware for the badge.",
      images: [],
      links: []
    }
  },
  {
    title: "Smart LED Strip Controller",
    description: "Flask app on Raspberry Pi for smartphone-based LED control. Used MQTT, Docker, and integrated the Matter protocol for smart home automation.",
    modalContent: {
      title: "Smart LED Strip Controller",
      description: "This project involved creating a Flask application running on a Raspberry Pi that allows users to control LED strips via their smartphones. I utilized MQTT for real-time communication, Docker for containerization, and integrated the Matter protocol for seamless smart home automation.",
      images: [],
      links: []
    }
  },
  {
    title: "Internship at IoT++",
    description: "Developed a vehicle routing prediction system using Random Forests and RNNs. Fine tuned image generation models for route depiction. Optimized YOLO on Orange Pi NPU using GStreamer.",
    modalContent: {
      title: "Internship at IoT++",
      description: "During my internship at IoT++, I worked on developing a vehicle routing prediction system using machine learning techniques such as Random Forests and Recurrent Neural Networks (RNNs). Additionally, I optimized the YOLO object detection algorithm to run on the Orange Pi NPU using GStreamer.",
      images: [],
      links: []
    } 
  },
  {
    title: "Uplift",
    description: "Hackathon-built cross-platform app using React Native, Tesseract.js for OCR, and LangChain + OpenAI for contextual chat assistance.",
    modalContent: {
      title: "Uplift",
      description: "This project involved building a cross-platform application using React Native. I integrated Tesseract.js for optical character recognition (OCR) and utilized LangChain with OpenAI for contextual chat assistance.",
      images: [],
      links: []
    }
  },
  {
    title: "Cyber Awareness Website",
    description: "Responsive cybersecurity education platform with interactive lessons and non-technical explanations. Scored 88/93 in Lighthouse testing.",
    modalContent: {
      title: "Cyber Awareness Website",
      description: "This project involved creating a responsive website aimed at educating users about cybersecurity. The platform features interactive lessons and non-technical explanations to help users understand complex topics.",
      images: [],
      links: []
    }
  },
  {
    title: "Court Booking System",
    description: "Full-stack app for apartment complexes using React, Spring Boot, and SQLite. Admin dashboard streamlined sports facility scheduling.",
    modalContent: {
      title: "Court Booking System",
      description: "This project involved developing a full-stack application for managing court bookings in apartment complexes. The application was built using React for the frontend, Spring Boot for the backend, and SQLite for the database. I also created an admin dashboard to streamline the scheduling of sports facilities.",
      images: [],
      links: []
    }
  }
];

export default function ProjectsPage() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  type Project = typeof projects[number];
  const [selected, setSelected] = useState<Project | null>(null);

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
        My Work
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
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a1a1a] max-w-2xl w-full m-2 max-h-[80vh] overflow-y-auto scrollbar-hide rounded-xl p-6 relative border border-cyan-400"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-cyan-300 hover:text-cyan-500"
                onClick={() => setOpen(false)}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <h2 className="text-2xl font-bold text-cyan-300 mb-4">{selected.modalContent.title}</h2>
              <div className="space-y-4 text-gray-300">
                {Array.isArray(selected.modalContent.description)
                  ? selected.modalContent.description.map((p, idx) => (
                      <p key={idx} className="text-sm leading-relaxed">{p}</p>
                    ))
                  : <p className="text-sm leading-relaxed">{selected.modalContent.description}</p>
                }
              </div>
              {selected.modalContent.links?.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-cyan-400 font-semibold mb-2">Links</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selected.modalContent.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.url} target="_blank" className="text-blue-400 underline">{link.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}