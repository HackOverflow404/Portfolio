type Skills = {
  [category: string]: {
    [skill: string]: string;
  };
};

const skills: Skills = {
  "Soft Skills": {"Leadership & Team Management": "leadership.svg", "Communication & Explanation": "communication.svg", "Collaboration & Teamwork": "collaboration.svg", "Creative Thinking": "creative.svg", "Research & Analytical Thinking": "research.svg", "Self-Directed Ownership": "ownership.svg", "Empathy-Driven Design": "empathy.svg", "Scope & Priority Management": "scope.svg"},
  "Core Programming Languages": {"Python": "python.svg", "C": "c.svg", "C++": "cpp.svg", "JavaScript": "javascript.svg", "TypeScript": "typescript.svg", "Java": "java.svg", "HTML/CSS": "html.svg" },
  "Software & Web Development": {"React/React Native": "react.svg", "Next.js": "next.svg", "Qt": "qt.svg", "Flask": "flask.svg", "Spring Boot": "springboot.svg", "SQLite": "sqlite.svg", "Node.js": "nodejs.svg", "Docker": "docker.svg", "Firebase": "firebase.svg", "Google Cloud Platform": "gcp.svg", "Vercel": "vercel.svg", "Figma": "figma.svg", "Tailwind CSS": "tailwind.svg", "Git": "git.svg", "Cross-Platform Apps": "crossplatform.svg", "Responsive Design": "responsive.svg", "REST APIs": "rest.svg", "Progressive Web Apps (PWA)": "pwa.svg", ", LaTeX": "latex.svg"},
  "Embedded Systems & Hardware": {"ESP32": "esp32.svg", "Raspberry Pi": "raspberrypi.svg", "Circuit Design": "circuit.svg", "MQTT": "mqtt.svg", "Protocol Debugging": "protocol.svg", "GStreamer": "gstreamer.svg"},
  "Cybersecurity & Systems": {"Pentesting Fundamentals": "pentesting.svg", "Reverse Engineering": "reverse.svg", "WebRTC": "webrtc.svg", "Network Analysis": "network.svg", "CTFs": "sigpwny.svg", "Hashcat": "hashcat.svg", "Frida": "frida.svg", "JADX": "jadx.svg", "Burp Suite": "burpsuite.svg", "Nmap": "nmap.svg", "Linux": "linux.svg", "Shell Scripting": "bash.svg", "Qemu": "qemu.svg"},
  "AI & ML": {"LangChain + OpenAI": "langchain.svg", "YOLO": "yolo.svg", "TensorFlow": "tensorflow.svg", "PyTorch": "pytorch.svg", "Pandas": "pandas.svg"},
};

export default skills;

// Soft Skills: Leadership & Team Management, Communication & Explanation, Collaboration & Teamwork, Creative Thinking, Research & Analytical Thinking, Self-Directed Ownership, Empathy-Driven Design, Scope & Priority Management
// Core Programming Languages: Python, C, C++, JavaScript, TypeScript, Java, HTML/CSS 
// Software & Web Development: React/React Native, Next.js, Qt, Flask, Spring Boot, SQLite, Node.js, Docker, Firebase, Google Cloud Platform, Vercel, Figma, Tailwind CSS, Git, Cross-Platform Apps, Responsive Design, REST APIs, Progressive Web Apps (PWA), LaTeX
// Embedded Systems & Hardware: ESP32, Raspberry Pi, Circuit Design, MQTT, Protocol Debugging, GStreamer
// Cybersecurity & Systems: Pentesting Fundamentals, Reverse Engineering, WebRTC, Network Analysis, CTFs, Hashcat, Frida, JADX, Burp Suite, Nmap, Linux, Shell Scripting, Qemu
// AI & ML: LangChain + OpenAI, YOLO, TensorFlow, PyTorch, Pandas