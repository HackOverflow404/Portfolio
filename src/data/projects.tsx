import { getAssetUrl } from "@/utils/basePath";

export const resumeURL = getAssetUrl("Resume.pdf");
export const projectImagesBaseURL = getAssetUrl("images/projects/");

type ProjectLink = {
  title: string;
  url: string;
};

type ProjectModalContent = {
  title: string;
  description: string[];
  skills?: string[];
  images?: string[];
  embed?: string[];
  links?: ProjectLink[];
};

type ProjectEntry = {
  title: string;
  description: string;
  modalContent: ProjectModalContent;
};

const projects: ProjectEntry[] = [
  {
    title: "View Resume",
    description: "View or download my resume directly from here.",
    modalContent: {
      title: "My Resume",
      description: [
        "You can preview, download, or share my resume below. If you'd like to get in touch, feel free to connect via the links provided."
      ],
      links: [
        { title: "Download Resume", url: resumeURL },
        { title: "Shareable Link", url: typeof window !== "undefined" ? window.location.origin + resumeURL : resumeURL }
      ]
    }
  },
  {
    title: "Automated Résumé Fetch & Deploy",
    description: "Node.js script that pulls my Google-Docs résumé via a GCP Service Account and redeploys my portfolio site in one command.",
    modalContent: {
      title: "Automated Résumé Fetch & Deployment Pipeline",
      skills: [
        "Node.js",
        "Google Cloud Platform",
        "Git",
        "Shell Scripting"
      ],
      description: [
        "Keeping an online résumé current often means juggling downloads, manual file moves, and redeployments. I wanted that workflow boiled down to a single command. This project delivers exactly that.",
        "The script authenticates with a Google Cloud Service Account, exports my résumé Google Doc as a PDF, and writes it to two key locations: a `job_docs` archive and the `public/` directory of my Next.js portfolio.",
        "Once the new PDF is in place, it triggers a production build, stages the updated asset, commits with a conventional-chore message, and pushes straight to GitHub, instantly kicking off the site's CI pipeline.",
        "A small bash alias `rupd` wraps everything, so from anywhere in any terminal I can run one command and know my résumé and portfolio are synchronized within minutes.",
        "Under the hood it combines Google's `drive.files.export` streaming endpoint, Node's `stream/promises` utilities for back-pressure-safe writes, and a guarded `execSync` chain for the Git operations. Robust error handling keeps the process transparent and fail-safe.",
        "Manually selecting and copy-pasting each section of my résumé into various applications became exhausting, so I built a PyQt5 Resume Viewer. It parses my PDF into a collapsible tree and lets me click any heading or bullet to instantly copy its text to the clipboard, streamlining the entire process."
      ],
      images: ["/ResumeFetch-1.png"],
      links: [
        { title: "GitHub Repo", url: "https://github.com/HackOverflow404/Resume-Fetcher" }
      ]
    }
  },
  {
    title: "Reverse Engineering a Legacy Laptop",
    description: "Disassembled an Acer Aspire 4736G and working to repurpose components such as battery, fan, LCD screen, keyboard, trackpad, and fingerprint reader.",
    modalContent: {
      title: "Anatomy of a Machine: The Legacy Laptop Project",
      skills: ["Raspberry Pi", "Circuit Design", "Protocol Debugging", "Reverse Engineering"],
      description: [
        "This laptop has been part of our family for nearly two decades, a machine that once ran homework assignments, streamed movies, and powered my first lines of code. Over the years, it evolved alongside me. I transformed it into a home server running Ubuntu, a media center powered by Kodi, a pentesting lab with Kali Linux, and even a fully virtualized home lab using a Type-1 hypervisor. In 11th grade, driven purely by curiosity, I disassembled it down to the last screw, not to repair it, but to understand it. To learn what made it tick.",
        "Now, with little use for the laptop as a whole, I've returned to it once again, this time with a different mission: to give its parts new life through engineering and invention.",
        "It began with the fan. I repurposed it as active cooling for my Raspberry Pi, breathing new utility into a component most would discard. I dove deep into circuit schematics I unearthed online, cross-referencing motherboard layouts and datasheets, mapping out traces, testing signals and voltages with a multimeter. One by one, I began decoding the protocols that tied each subsystem together. Through probing and logic, I deduced that the fingerprint sensor communicated over 3V USB, not just a guess, but a calculated inference grounded in electrical behavior and datasheet breadcrumbs.",
        "Then came the LCD screen. I learned that it uses an LVDS (Low Voltage Differential Signaling) interface, a protocol common in older display hardware. I plan to pair it with a third-party controller board, converting it into a functional external monitor for my Raspberry Pi or a headless server dashboard. It's not plug-and-play, it's research, solder, test, fail, repeat. But that's the joy of it.",
        "The laptop's stereo speakers also found a second life. Inspired by the operational amplifier circuits I learned to build in my ECE 110 course, I initially used an LM358 to create a basic audio amplifier. It worked, barely. The output was faint, distorted, and underpowered. So I iterated. I upgraded to an LM386-based audio module and wired it to a salvaged 3.5mm headphone jack from a broken pair of earbuds. The result? A compact, self-powered speaker that plays music from my Raspberry Pi with clarity and volume.",
        "This project is far from over. Every component is a puzzle, a microcosm of engineering principles waiting to be rediscovered. I'm continually learning how signals propagate, how buses negotiate data, and how standards like I²C, LVDS, and USB manifest in real hardware. I'm not just recycling; I'm reverse-engineering, decoding, rebuilding.",
        "In a world obsessed with the new, I'm finding wonder in the old. I'm not just tearing down a machine, I'm reimagining it. Piece by piece, lesson by lesson."
      ],
    }
  },
  {
    title: "RemoteCam",
    description: "A cross-platform webcam and microphone streaming app built using WebRTC and Firebase signaling, with a mobile PWA frontend and a QtPython + GStreamer desktop client.",
    modalContent: {
      title: "RemoteCam: Engineering Seamless Communication",
      skills: ["Python", "TypeScript", "HTML/CSS", "React/React Native", "Next.js", "QtPython", "Firebase", "PWA", "Cross-Platform Apps", "Responsive UI", "WebRTC", "Linux", "Network Protocol Analysis", "GStreamer"],
      description: [
        "The project began with a frustration familiar to many: my laptop's built-in webcam and microphone had become unusable for video calls, the video was laggy and grainy, the audio drowned in static and background noise. The simple solution would have been to buy a new webcam or plug in a headset with a built-in mic. But I had something better, an iPhone with world-class imaging and sound hardware. Rather than buying another device, I saw a challenge: could I turn the phone I already carried into a fully functional wireless webcam and microphone for my Ubuntu laptop?",
        "At the same time, I was deeply curious about how devices communicate in real time over the internet, a fascination with WebSockets and protocols used in systems like FaceTime and Zoom. I didn't just want a solution. I wanted to build the solution. And I wanted it to teach me everything I didn't yet know.",
        "Taking inspiration from Apple's Continuity Camera, I envisioned a seamless, cross-platform experience that could securely stream high-quality video and audio from my iPhone to my Linux machine. Thanks to my internship, I already had experience with GStreamer, a powerful media streaming toolkit, and decided to extend those skills further. I would build an end-to-end system: a wireless, real-time camera and mic platform powered by modern web protocols.",
        "The next step was architectural design. I considered using WebSockets for the communication layer but quickly realized their limitations: they're great for basic messaging but lack the real-time, peer-to-peer efficiency and NAT traversal capabilities I needed. WebRTC, on the other hand, was designed from the ground up for streaming audio, video, and arbitrary data with low latency and high security, and came with built-in support for ICE, STUN, and TURN to negotiate connections through complex networks. WebRTC was the obvious choice.",
        "I began development with a plan: the desktop client would be written in QtPython with a GStreamer backend, and the mobile app in React Native. I was fluent in both ecosystems, Python for scripting and fast iteration, and React Native for cross-platform mobile UI. But almost immediately, I hit a wall.",
        "To build a WebRTC-enabled React Native app for iOS, I needed a Mac and an Apple Developer Account. Why? Because Apple requires native code to be compiled with Xcode on macOS, mandates signed apps for device testing, and the react-native-webrtc package uses low-level iOS APIs that Expo Go simply doesn't support. Without access to macOS or a paid developer profile, the project was dead in the water.",
        "That is, until I discovered Progressive Web Apps (PWAs).",
        "PWAs bypass Apple's restrictions entirely, while remaining installable and responsive across devices. They offer the cross-platform flexibility I needed, and WebRTC runs natively in Safari and modern browsers. Though PWAs come with trade-offs, no persistent background services, and limited access to certain native features, none of those limitations blocked my goals. This discovery was a turning point.",
        "I pivoted immediately. I designed a sleek frontend in Next.js for the mobile PWA and paired it with a robust Linux client using GStreamer and PyQt. For signaling, I turned to Firebase, a platform I had used before and trusted for its real-time database and seamless integration with serverless functions. With Firebase Cloud Functions, I locked down signaling security: only functions could read or write to the database, and users could only initiate a connection with a randomly generated, time-limited 5-character session code, adding a layer of authentication and privacy by design.",
        "Development accelerated, but not without pain. WebRTC, while powerful, is notoriously complex. I encountered every kind of issue: misformatted SDP offers, ICE candidates failing to gather, TURN servers being unreachable, inconsistencies between mobile and desktop codecs, and edge-case connection bugs that refused to explain themselves. I poured over browser debugging consoles, traced media flows through GStreamer logs, and dissected packet behavior in Wireshark, skills honed through past hands-on experience through internships, certifications, and CTFs. I tested and tuned everything from STUN fallback logic to media pipeline latency.",
        "The connection still fails despite countless hours of debugging, I haven't yet uncovered why. But chasing this vision has been a masterclass in itself. I've gained a deep understanding of WebRTC's internals, the architecture of real-time media systems, secure cloud-based signaling, cross-platform performance challenges, and the subtle behavioral quirks that differ between browsers on iOS and Android. Though the system doesn't work yet, the knowledge I've earned along the way is already invaluable, and I'm committed to solving the puzzle, no matter how long it takes.",
        "What began as a workaround to a broken webcam has grown into a living laboratory, one that has taught me how modern internet-based communication works and how hard it is to make it just feel easy.",
        "The project is ongoing. The connection bugs will be fixed. But already, RemoteCam has served its purpose, not just to connect devices, but to connect me with the limits of my knowledge, and push me far beyond them."
      ],
      images: ["/RemoteCam-1.png", "/RemoteCam-2.png", "/RemoteCam-3.png"],
      links: [{ title: "Github Repo", url: "https://github.com/HackOverflow404/RemoteWebcam" }, { title: "Live Website", url: "https://remote-webcam-b70ab.web.app/"}]
    }
  },
  {
    title: "PCB Badge for CTF at Sigpwny",
    description: "Helped design an ESP32-based DEFCON-style badge. Worked on SAO compatibility and embedded firmware.",
    modalContent: {
      title: "Silicon & Signals: The Sigpwny CTF Badge Build",
      skills: ["Python", "C", "ESP32", "Circuit Design", "Protocol Debugging"],
      description: [
        "At the University of Illinois Urbana-Champaign, Sigpwny is one of the largest and most active RSOs dedicated to information security and privacy. For someone with a passion for embedded systems, low-level development, and cybersecurity, being part of this organization has been both inspiring and empowering. Through Sigpwny, I've had the opportunity to connect with brilliant minds, engineers, hackers, and innovators, whose knowledge and creativity have continuously pushed me to grow.",
        "One of the most impactful projects I've worked on is the UIUCTF electronic badge, a DEFCON-style hardware badge built for the Capture the Flag competition we host annually. This year, we're designing a space-themed badge powered by an ESP32, packed with features that foster interactivity, connectivity, and a sense of community among participants. The badge is designed to communicate with others using ESP-NOW and ESP-WIFI-MESH, creating a decentralized and resilient communication network among players. This not only enables dynamic interactions between badges but also aligns with the distributed ethos of CTFs and hacker culture.",
        "As part of the firmware team, I've been responsible for developing the display interface using MicroPython, where I've learned the intricacies of screen rendering, pixel buffers, and color palette optimization at the byte level. Developing within the constraints of MicroPython has challenged me to write highly efficient, memory-aware code that directly interfaces with hardware components over SPI and GPIO.",
        "On the hardware side, I've applied principles from my circuit design coursework to help engineer the badge's PCB layout, gaining practical experience in power delivery management, voltage regulation, and differential signaling. I've worked closely with the team to iterate on schematic design, ensuring stable operation across components, and managing trace impedance for reliable high-speed communication.",
        "This badge isn't just a tool; it's a living, breathing embodiment of our collective creativity and technical skill. From wireless mesh networking to custom display firmware, the project has given me a holistic view of what it means to engineer an embedded system from scratch, blending hardware, firmware, and innovation in every step. I'm incredibly proud to be part of this team and can't wait to see the room light up with hundreds of these badges in action, each one a symbol of curiosity, craft, and community.",
      ],
      images: ["/Badge-1.png", "/Badge-2.png"],
    }
  },
  {
    title: "Smart LED Strip Controller",
    description: "Flask app on Raspberry Pi for smartphone-based LED control. Used MQTT, Docker, and integrated the Matter protocol for smart home automation.",
    modalContent: {
      title: "Smart LED Strip Controller",
      skills: ["Python", "HTML/CSS", "Flask", "Docker", "ESP32", "Raspberry Pi", "Circuit Design", "MQTT", "Network Protocol Analysis"],
      description: [
        "It started, as many things in college do, with something small, a lost remote.",
        "In the chaos of my freshman year move-out, the slender plastic controller for my beloved LED strip vanished. Without it, the strip, a cascade of colors once glowing beneath my bed frame, was reduced to nothing more than decorative wire. I could've ordered a replacement. I could've moved on. But that would've meant ignoring the itch. The challenge. The whisper of possibility that said: what if I could build something better?",
        "So I did.",
        "What began as a workaround quickly became an obsession, a gateway into the world of embedded systems, protocol design, and the architecture of smart homes. I decided to build my own Smart LED controller, one not tethered to a flimsy plastic dongle, but to the internet, to code, to me.",
        "The first prototype was pragmatic: a Raspberry Pi, a trio of MOSFETs, and a set of GPIO pins pulsing with PWM signals to drive the 12V LED strip safely. The Pi, outputting a mere 3.3V, couldn't drive the LEDs directly, but with carefully wired logic and a healthy respect for electrical isolation, it became the brain of the system. I wrote a Flask application to control the LEDs, served it over the local network, and containerized it with Docker for portable deployment. Within hours, I could control the entire room's ambience from a web browser. No remote needed.",
        "To make the system feel less like a demo and more like a product, I implemented JSON-based state persistence on the Pi, storing the last-used color, brightness, and mode in a file that was read on boot. Even if the power went out, my lights came back exactly as I left them.",
        "But that wasn't enough.",
        "The idea of smart home control, true integration, voice control, and automation had always fascinated me. That's when I stumbled upon MQTT, a lightweight publish/subscribe protocol used widely in IoT ecosystems. I had heard about it in passing, an offhand mention on the Journal Club podcast I listen to while coding, but now, it took center stage.",
        "I dove in.",
        "I replaced the Raspberry Pi as the LED controller with an ESP32, a tiny but mighty microcontroller perfect for embedded networked applications. The Pi transformed into the MQTT broker, a command and control center running DietPi, a minimalist OS that let me turn it into a dedicated Wi-Fi access point. That step, though seemingly minor, was crucial: my apartment's Wi-Fi, locked down by Octave Management, made connecting IoT devices nearly impossible. By creating my own secure subnetwork, I circumvented that limitation entirely.",
        "Now, the ESP32 subscribed to lighting commands over MQTT. The Raspberry Pi broadcasted those commands. And the Flask interface became just one of many clients that could publish to the topic. I even connected my Amazon Echo Show to the Pi's access point, enabling voice control of the lights. It worked. And it was beautiful.",
        "Just like on the Pi, I used JSON on the ESP32 to persist state, writing to flash memory so that every lighting preference, down to the color and fade speed, survived resets and reboots. It wasn't just responsive; it was reliable.",
        "But technology never stands still, and neither do I.",
        "As I explored further into the landscape of smart home standards, I discovered Matter, a new protocol promising secure, local, and interoperable communication between devices. It wasn't just a new protocol; it was the future. Apple, Google, and Amazon were all backing it. It was everything I wanted this project to become.",
        "So I tried.",
        "I tried to migrate the project to Matter, to bring my ESP32 into the next generation of smart home ecosystems. I scoured documentation, cloned bleeding-edge repositories, and dove into the underworld of build tools like gn, ninja, and idf.py. But the deeper I went, the more tangled it became. Cross-compiling libraries. Dependency loops. Version mismatches. Unresolved symbols. Cryptic errors from SDKs that seemed allergic to working together. What should have been a new beginning became a recursive maze of dependency hell.",
        "And in the end, Matter never worked. Not on my hardware. Not with the time I had. Not yet.",
        "But that failure wasn't a dead end. It was a forge.",
        "Because even in defeat, I had learned more than I could have imagined. I didn't just read about protocols, I implemented them. I didn't just hear about security, I designed for it. I saw firsthand the fragility of modern ecosystems, the hidden cost of interoperability, and the sheer complexity behind something as simple as turning on a light.",
        "And most importantly, I built something that mattered. Not because it was perfect, but because it was mine, from PWM signals to MQTT packets, from GPIO pinouts to containerized deployments, from JSON state files to custom access points.",
        "A lost remote was never the real problem.",
        "The real problem was that I couldn't leave a broken system alone.",
        "And the real victory was that I never stopped trying to fix it.",
      ],
      images: ["/LED-1.png"],
      links: [{ title: "Github Repo", url: "https://github.com/HackOverflow404/Control-Lights" }]
    }
  },
  {
    title: "Internship at IoT++",
    description: "Developed a vehicle routing prediction system using Random Forests and RNNs. Fine tuned image generation models for route depiction. Optimized YOLO on Orange Pi NPU using GStreamer.",
    modalContent: {
      title: "IoT++: AI Systems for Real-Time Detection and Routing",
      skills: ["Python", "Docker", "GStreamer", "Yolo", "Tensorflow", "PyTorch", "Pandas"],
      description: [
        "During my internship, I had the opportunity to work on several cutting-edge projects at the intersection of computer vision, machine learning, edge computing, and cloud infrastructure. One of my core contributions involved enhancing a YOLO-based real-time detection system to identify fire hazards and human presence in industrial environments. I retrained and fine-tuned the model using custom datasets, ultimately achieving a 13x increase in inference speed and a 62% boost in detection accuracy. I integrated the model into a GStreamer-based video processing pipeline tailored for Orange Pi devices with NPUs, which introduced me to the intricacies of hardware acceleration, low-level optimizations, and deployment on constrained edge devices.",
        "This technical work went hand-in-hand with scalable deployment practices. I containerized the pipeline using Docker, orchestrated services using Kubernetes and Minikube, and managed deployments on Azure, learning how to build resilient, cloud-native systems that could adapt to real-world operational demands. I also collaborated on the development of intelligent traffic routing algorithms by training recurrent neural networks and random forest classifiers to direct vehicles toward weighbridges based on live traffic conditions and equipment throughput, a project that taught me the delicate balance between accuracy, latency, and interpretability in production ML systems.",
        "In parallel, I explored the generative side of AI by fine-tuning image generation models to provide intuitive route visualizations for drivers. This involved careful prompt engineering and model conditioning, improving the clarity and usability of visual instructions under varying real-world lighting and environmental conditions. Additionally, I contributed to the design of a retrieval-augmented generation (RAG) system, helping the team build internal chatbot tools that could synthesize knowledge from large corpora of proprietary company data. This effort honed my skills in natural language processing, search optimization, and user experience.",
        "Beyond the technical achievements, this internship sharpened my problem-solving mindset, deepened my ability to communicate complex ideas across interdisciplinary teams, and cultivated a strong sense of ownership and adaptability. Working in a fast-paced environment taught me how to prioritize ruthlessly, break down large challenges into tractable tasks, and stay grounded in both user needs and system constraints. It was a formative experience that not only strengthened my foundation in applied AI and systems engineering but also expanded my confidence in contributing meaningfully to impactful, real-world solutions."
      ],
    } 
  },
  {
    title: "Uplift",
    description: "Hackathon-built cross-platform app using React Native, Tesseract.js for OCR, and LangChain + OpenAI for contextual chat assistance.",
    modalContent: {
      title: "Uplift: Designing Empathy Through Code",
      skills: ["JavaScript", "TypeScript", "React/React Native", "LangChain + OpenAI", "Responsive Design"],
      description: [
        "The hum of laptops, the quiet intensity of teammates huddled over sketches and screens, and the race against the ticking hours of a Hackathon, that was the backdrop for one of the most formative development experiences I've had: building Uplift.",
        "Uplift was born from a simple, human idea: sometimes we want to help someone who's hurting, but we don't know what to say. Whether it's a friend struggling with anxiety, a partner feeling low, or a classmate who just needs encouragement, the words can feel impossible. Our team wanted to build something that would make those moments easier, a tool that could take the weight off the user's shoulders and offer guidance without judgment.",
        "The concept was straightforward. A user could take a screenshot of a conversation, specify the tone they wanted to convey, comfort, advice, or validation, and receive a list of suggested responses. Behind the scenes, the app would use OCR to extract the message content, analyze the emotional context, and then generate appropriate replies using natural language tools. The idea wasn't to replace human empathy, but to amplify it, to help people find their voice when it mattered most.",
        "I joined the project with an eagerness to contribute technically, but what I walked away with was far more expansive. This was my first time working with React Native, and I had to ramp up quickly. I came in with experience in React, but mobile app frameworks were new territory. Fortunately, the framework was very similar to React, and I was able to pick it up quickly.",
        "OCR was another technical challenge. We used Tesseract.js, a JavaScript port of the Tesseract OCR engine, to extract text from screenshots. While Tesseract is powerful, it's also finicky. Lighting conditions, font rendering, and compression artifacts from screenshots often led to noisy or partial extractions. We had to implement preprocessing and smart error handling to ensure the text passed to our language model was clean and contextually intact. We used message colors to identify which user had sent which message to divide the conversation into two sides.",
        "Once we had clean text, we turned to LangChain and OpenAI to generate the actual suggestions. This was a crash course in prompt engineering and chaining, how to structure input to get the kind of nuanced, emotionally aware replies we envisioned. We experimented with different prompts for different tones, carefully tweaking the few-shot examples to teach the model the difference between advice and empathy, between encouragement and simply being there. This process taught me a lot, not just about how powerful language models can be, but also how delicate and intentional their usage needs to be when the goal is helping someone through a vulnerable moment.",
        "As important as the backend logic was, we knew it wouldn't matter if the front end failed. And that's where I learned my first real lessons in mobile app UI/UX design. Designing for emotion is not like designing for functionality. It's about softness, clarity, ease. We spent hours debating padding, typography, and button placement, not because it looked pretty, but because it felt better. In a high-stress moment, even milliseconds of confusion or visual friction could break the experience. That lesson, that user experience is emotional as much as it is functional, stayed with me long after the Hackathon ended.",
        "Working as part of a team during a Hackathon environment was both intense and invigorating. We had to collaborate fast and trust each other's instincts, pulling an all-nighter to finish our project racing against the deadline. Dividing up responsibilities, merging our different levels of experience, and maintaining cohesion under time pressure gave me firsthand insight into what real engineering collaboration feels like. I learned how to communicate ideas quickly, respect design constraints, and adapt when plans changed. It wasn't just about the code, it was about building something real with other people, fast."
      ],
      embed: ["https://www.youtube.com/watch?v=76T-BBqLBeY"],
      links: [{ title: "Github Repo", url: "https://github.com/HackOverflow404/Uplift" }, { title: "Youtube Demo", url: "https://www.youtube.com/watch?v=76T-BBqLBeY" }],
    }
  },
  {
    title: "Cyber Awareness Website",
    description: "Responsive cybersecurity education platform with interactive lessons and non-technical explanations. Scored 88/93 in Lighthouse testing.",
    modalContent: {
      title: "CyberSpace: Bridging the Gap Between Complexity and Clarity",
      skills: ["HTML/CSS", "JavaScript", "Responsive Design", "Pentesting Fundamentals"],
      description: [
        "In the wake of completing my cybersecurity certification, I found myself sitting with a newfound understanding of how vulnerable our digital lives really are. I had learned about everything from phishing attacks to password managers, browser exploits to social engineering, and yet, as I looked around, I realized how little of this knowledge was reaching the people who needed it most. Not the developers or the professionals, but everyday users, students, parents, friends, navigating the internet with little more than instinct and luck.",
        "That gap between what I had learned and what others understood felt impossible to ignore. So I decided to build something that would bridge it.",
        "The idea was simple in spirit but ambitious in execution: create a responsive, interactive website that could explain essential cybersecurity concepts to the general public in a way that was engaging, non-intimidating, and, most importantly, practical. I called the project Cyber Awareness.",
        "This was my first time building an interactive website from scratch, and I deliberately chose not to use any frameworks or libraries. No React. No Bootstrap. Just pure HTML, CSS, and JavaScript. I wanted to understand the fundamentals, how to structure a page from the ground up, how to write clean semantic markup, how to build components with reusability and accessibility in mind, and how to manage interactivity without relying on pre-built abstractions.",
        "The process began in Figma, where I designed the interface down to the pixel. I sketched out layouts for each lesson, focusing on balance, clarity, and responsiveness. I chose a color palette that evoked security and professionalism without feeling cold or corporate. The layout was mobile-first, ensuring accessibility for users across devices. Each lesson would be presented in a card-based format with expandable sections, inline tooltips, and light animations to make the experience feel alive, not static text on a page.",
        "Once the designs were finalized, I moved to development. Styling was done entirely with vanilla CSS, using flexbox and media queries to build a fluid, responsive layout. I took care to build components that degraded gracefully and adapted elegantly to screen size changes.",
        "The real challenge, and joy, came in the JavaScript layer. I wrote custom scripts for interactivity: dynamic navigation, auto-adapting spacing between content, interactive activities, and a lightweight quiz system that could provide instant feedback. I learned how to manage DOM events cleanly, how to debounce inputs, and how to write modular, readable code even in the absence of modern JS frameworks.",
        "One of my favorite parts of the project was writing the non-technical content itself. Translating complex topics like multi-factor authentication, ransomware, and public-key encryption into everyday language was a rewarding exercise in empathy. It wasn't just about knowing the content, it was about understanding what someone who didn't know needed to hear first. I learned how to layer concepts, how to lead with stories, and how to build a narrative that didn't assume technical literacy but still respected the user's intelligence.",
        "Through this project, I didn't just apply what I had learned from my certification, I internalized it. Teaching others forced me to think critically about what I knew, and building the platform from scratch gave me a deep respect for the foundational layers of the web.",
        "When it was complete, the website wasn't just a static resource. It was an interactive experience designed to demystify cybersecurity, to make the invisible visible, and to empower users with knowledge they could act on.",
        "Looking back, Cyber Awareness was more than a technical project, it was a statement of intent. A declaration that learning is only useful if it's shared, that technology should lift people, and that I'm committed not only to building secure systems, but to helping others understand and protect themselves in the digital world.",
      ],
      embed: ["https://hackoverflow404.github.io/cyberawareness/"],
      links: [{ title: "Live Website", url: "https://hackoverflow404.github.io/cyberawareness/" }, { title: "Github Repo", url: "https://github.com/HackOverflow404/cyberawareness" }]
    }
  },
  {
    title: "Court Booking System",
    description: "Full-stack app for apartment complexes using React, Spring Boot, and SQLite. Admin dashboard streamlined sports facility scheduling.",
    modalContent: {
      title: "Court Booking System: Building a Full-Stack Solution for Community Coordination",
      skills: ["HTML/CSS", "JavaScript", "Java", "React/React Native", "Spring Boot", "SQLite", "REST APIs", "Responsive Design"],
      description: [
        "Every solution begins with a friction point. In my neighborhood, where I spent my 10th through 12th grade years, it was the tennis, basketball, and badminton courts, each with their own paper logbooks and silent frustrations. I ran into it myself whenever I tried to book a tennis court after school or on weekend mornings: double bookings, no-shows, and miscommunication were common, not out of negligence but because the system simply wasn’t built to scale with the people using it. I saw an opportunity: not just to digitize a process, but to reimagine what coordination could feel like when technology works as it should, seamlessly, quietly, and purposefully.",
        "That's how I began building the Court Booking System: a full-stack application designed specifically for apartment complexes to manage their shared sports facilities. I wanted it to be more than just functional, I wanted it to feel intuitive, transparent, and empowering for both residents and administrators.",
        "This was a real problem, with real stakeholders: neighbors, building managers, and families with weekend routines hinging on court availability. That context shaped every decision. I chose React for the frontend, not just because of its speed and component-based architecture, but because I wanted to build something reactive in the truest sense, interfaces that respond to user actions immediately and meaningfully.",
        "The UI was designed with clarity in mind: calendar-based booking views, time-slot selectors, real-time updates, and seamless user information handling. State management was handled through useState and useEffect hooks for lightweight responsiveness, while Axios powered live asynchronous communication with the backend REST API.",
        "For the backend, I turned to Spring Boot, a powerful Java-based framework that allowed me to build a secure, scalable REST API with precision. The architecture followed REST principles cleanly: endpoints for creating, retrieving, modifying, and deleting bookings; user role checks; and time-conflict validation logic.",
        "I chose SQLite for the database, a file-based relational DB that was lightweight, easy to deploy, and perfectly suited for a system without high concurrency demands. The schema was built to reflect real-world relationships: Users, Bookings, Courts, and TimeSlots.",
        "What I loved most about working with SQLite was its simplicity. It allowed me to iterate quickly, write complex join queries, and ensure atomic transactions without the overhead of managing a full-fledged DBMS. For this context, it struck the perfect balance.",
        "While the resident view prioritized simplicity, the admin dashboard held the real power. I built a separate interface with additional capabilities: viewing all bookings across every court, manually overriding schedules, and editing options such as time ranges, default booking durations, and available courts.",
        "This project gave me something no tutorial or classroom ever could: an end-to-end look at what it means to solve a real problem with code. I learned how to gather requirements from non-technical users, build scalable APIs, connect frontend and backend layers securely, and design user interfaces that work not just in theory but in daily life."
      ],
      images: ["Booking-1.png", "Booking-2.png"],
    }
  },
  {
    title: "Research Paper on Leet Speak in Password Security",
    description: "I wrote a research paper evaluating the use of leet speak in password security under the guidance of a professor at Shobhit University.",
    modalContent: {
      title: "Research Paper on Leet Speak in Password Security",
      skills: ["Python", "Linux", "Hashcat"],
      description: [
        "Passwords are the front lines of digital security, yet most people use them without truly understanding how they work or how they fail. When I first began researching password strength, I wasn't trying to write a research paper. I was trying to answer a deceptively simple question: Can leet speak, the practice of swapping letters for symbols or numbers, make passwords more secure?",
        "At the time, I had just completed a comprehensive certification in cybersecurity. The field had captivated me. I was fascinated not only by the elegance of well-designed systems but by the fragility of their weakest points. The average internet user juggles dozens of passwords, often recycling, simplifying, and guessing. I wanted to understand what made a password strong, not just by modern metrics, but by the logic of a hacker trying to crack it open.",
        "Leet speak intrigued me. Common wisdom suggested it could \"trick\" password strength meters, allowing users to remember relatively simple words that still passed muster with security protocols. But that confidence seemed too easy. I needed data. I needed proof. So I dove headfirst into original research.",
        "I began by compiling a large dataset of real-world passwords. Using a filtered version of Daniel Miessler's well-known password list, I eliminated numeric-only entries to focus on passwords that could be realistically converted into leet speak. What followed was a deeply technical process of transformation, simulation, and analysis.",
        "First, I created a Python script, leet_converter.py, that applied leet substitutions based on a weighted character map. Not every character was replaced; I wanted to simulate real user behavior, where transformations are inconsistent and personal. This script generated a new dataset of “leet-ified” passwords, matching the original set in structure and count.",
        "Then came the evaluations. Using Dropbox's zxcvbn library, I ran a comprehensive analysis of each password's strength score, capturing a range of metrics from entropy estimation to estimated cracking time. I wasn't satisfied with strength meters alone, though. I wanted to know how these passwords would hold up under real-world attack strategies. So I turned to Hashcat, an industry-standard tool used by professionals (and hackers) to brute-force hashed passwords.",
        "To do this, I created SHA-1 hashes of each password and configured a brute-force attack against them. It was computationally expensive and time-intensive, but it offered something no password meter could: a ground-truth test against adversarial effort.",
        "I didn't stop there. I also calculated entropy values, mathematical estimates of password unpredictability, using a custom-built entropy calculator. This provided a theoretical perspective to counterbalance the empirical ones.",
        "The data revealed something unexpected: leet speak had almost no meaningful impact on actual password security. Yes leet passwords often had higher entropy scores. But entropy, while mathematically elegant, does not fully reflect the realities of cracking algorithms that are trained on common leet patterns. In fact, zxcvbn consistently rated leet passwords lower than their original counterparts. And in the brute-force test using Hashcat, arguably the most realistic simulation of a password being attacked, the difference in crack rate was statistically insignificant. This wasn't just a surprise. It was a revelation.",
        "Security isn't about illusions. A password that \"feels\" secure isn't always so. Leet speak might fool a meter, but it doesn't fool attackers. Tools like Hashcat have adapted. They understand our tricks because attackers use machine learning, pattern dictionaries, and targeted heuristics. The cat-and-mouse game of cybersecurity continues, but leet speak, once seen as a clever workaround, may now be closer to security theater.",
        "This research taught me more than just the flaws of leet speak, it taught me how to think like an adversary. It taught me how to break down security systems from the ground up, evaluate them with rigorous methodology, and separate myth from reality.",
        "It also taught me what research should be: not just a collection of facts, but a journey of inquiry powered by curiosity and validated by computation. I wrote every line of Python myself. I ran every test. I interpreted every result.",
        "And in the end, I published the paper in the International Journal of Scientific Research in Science and Technology, under the guidance of a professor at Shobhit University. But more importantly, I walked away with the tools to evaluate not just passwords, but the very systems we trust to protect us online.",
        "For me, this wasn't just about leet speak. It was about building the mindset of a cybersecurity engineer, one who sees the cracks, tests the assumptions, and works relentlessly to understand what most take for granted.",
      ],
      links: [{ title: "Research Paper", url: "https://www.researchgate.net/publication/365478150_Evaluation_of_Leet_Speak_on_Password_Strength_and_Security" }]
    }
  }
];

export default projects;
