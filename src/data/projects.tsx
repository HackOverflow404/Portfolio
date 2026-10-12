import { getAssetUrl } from "@/utils/basePath";
import { FaGit } from "react-icons/fa";

// Root copy is the SWE résumé, kept so older links to it still work
export const resumeURL = getAssetUrl("Medhansh_Garg_Resume.pdf");

// Résumé variants, each linkable as /experience?entry=resume&variant=<id>
export const resumeVariants = [
	{ id: "swe", label: "Software Engineering" },
	{ id: "security", label: "Security" },
	{ id: "infra", label: "Infrastructure" },
] as const;
export type ResumeVariant = (typeof resumeVariants)[number]["id"];
export const resumeVariantURL = (variant: ResumeVariant) =>
	getAssetUrl(`resumes/${variant}/Medhansh_Garg_Resume.pdf`);
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
	// Stable slug for deep links: /experience?entry=<id>
	id: string;
	title: string;
	description: string;
	modalContent: ProjectModalContent;
};

/*
 * Things to do:
 * - Add sound effects
 * - See if I can add images to main modal card
 * - Add click electric pulse animations
 */

/*
 * Projects to add:
 * - Making automated door locker
 *   - Using MQTT and Pi and ESP
 * - Add EVP MicroTech
 * - Add Hopcharge
 */

const projects: ProjectEntry[] = [
	{
		id: "resume",
		title: "View Résumé",
		description: "View or download my résumé, in Software Engineering, Security, and Infrastructure versions.",
		modalContent: {
			title: "My Résumé",
			description: [
				"Pick a version above to preview, download, or share it below. If you'd like to get in touch, feel free to connect via the links provided.",
			],
			// Links are built per variant in the experience page
		},
	},
	{
		id: "hopcharge",
		title: "Internship at Hopcharge",
		description:
			"Software Engineering Intern - Built three internal tools end to end: an ad pipeline that took creative output from 2-3 ads a week to 3 a day, an automated hiring dashboard, and a fleet-planning map for a battery-swap network.",
		modalContent: {
			title: "Software Engineering Intern at Hopcharge",
			skills: [
				"Self-Directed Ownership",
				"Empathy-Driven Design",
				"Scope & Priority Management",
				"TypeScript",
				"Python",
				"Next.js",
				"React/React Native",
				"REST APIs",
				"FFmpeg",
				"SQLite",
				"Docker",
				"Linux",
			],
			description: [
				"In the summer of 2026 I interned as a software engineer at Hopcharge, an EV charging company in Gurugram. I owned three internal tools from the first conversation to deployment, each replacing a process people were running by hand.",
				"The Ad Engine is a marketing pipeline in Next.js, React and Prisma on Postgres that runs the whole life of an ad: AI-generated ideas ranked by funnel stage and trend, image and video generation, human review, publishing to Meta and YouTube, and a performance dashboard that feeds winning patterns back into the next round. Scheduled jobs run the loop on their own and ffmpeg brands every video. It took the team from two or three ads a week to three a day, about eight times the output.",
				"VOLT.CV is a FastAPI dashboard that automates hiring end to end: resume parsing with an OCR fallback and per-field confidence scores, recruitment emails from the recruiter's own Gmail, reply classification, one-click bulk interview scheduling, and a private status link for each candidate. Because it holds real candidate data, I secured it at the database with Supabase row-level security tied to each user's Google identity, and shipped it as a one-click desktop app built by GitHub Actions for four OS/architecture targets.",
				"Grid Ops replaced five Python scripts someone ran by hand with a FastAPI and React service for planning the battery-swap network: it lays a hex grid over each city from booking data, classifies demand, measures churn, forecasts demand and recommends how many charging pods each hex needs, all on an interactive map. It covers three Delhi-NCR metros and runs behind nginx on a cloud VM.",
				"The thread through all three was building for people who aren't engineers: tools that fail safely, fall back to an offline path when an external service is down, and never make the person using them think about the machinery underneath.",
			],
		},
	},
	{
		id: "ece391",
		title: "ECE391: RISC-V OS in the Browser",
		description:
			"A kernel my team wrote from scratch for UIUC's OS course, now running live in your browser via WebAssembly. It boots a shell, mounts a filesystem over HTTP, and takes keyboard input.",
		modalContent: {
			title: "ECE391: A Real Kernel, Running in Your Browser",
      skills: [
        "Collaboration & Teamwork",
        "Research & Analytical Thinking",
        "Self-Directed Ownership",
				"C",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Git",
        "Vercel",
        "Protocol Debugging",
        "Linux",
        "Qemu",
        "Systems Programming",
			],
			description: [
				"ECE 391 is UIUC's Computer Systems Engineering course, and its capstone is an operating system kernel built from scratch. My team wrote ours for RISC-V64 over the semester.",
				"We built a VirtIO console driver for keyboard and terminal I/O, a VirtIO block driver, our own filesystem (KTFS), page-table virtual memory, a process scheduler, kernel threads, a full system call interface with user/kernel separation, and a Unix-style shell with multi-stage pipelines. Each piece meant implementing a hardware spec precisely, with no library to blame when something went wrong, and debugging crashes from raw register state.",
				"The lasting lesson was how to reason about concurrency: synchronization, interrupt latency, and the ordering problems that appear when a timer interrupt and a device interrupt can both fire in the middle of a scheduling decision.",
				"After the course, I wanted to actually show the kernel running, so I compiled TinyEMU, Fabrice Bellard's RISC-V emulator, to WebAssembly with Emscripten. The kernel now boots in the browser, mounts its filesystem over HTTP and runs an interactive shell through xterm.js. Try it above: type ls, cat testfile2, or cat testfile2 | wc | cat to run a three-stage pipeline.",
			],
			embed: ["https://ece-391-kernel-demo.vercel.app"],
			links: [
				{
					title: "GitHub: Kernel Source",
					url: "https://github.com/HackOverflow404/ece391-kernel-demo",
				},
			],
		},
	},
	{
		id: "asl-tutor",
		title: "ASL Adaptive Tutor: Computer Vision That Teaches Sign Language",
		description:
			"An American Sign Language tutor that watches you sign through a camera, diagnoses which part of a sign is off (handshape, location or movement), and adapts your practice to close the gaps. Runs on a laptop and now live on an iPhone.",
		modalContent: {
			title: "ASL Adaptive Tutor: Teaching Sign Language With Computer Vision",
			skills: [
				"Self-Directed Ownership",
				"Research & Analytical Thinking",
				"Empathy-Driven Design",
				"Python",
				"PyTorch",
				"MediaPipe",
				"ONNX",
				"Dart",
				"Flutter",
				"Cross-Platform Apps",
				"Git",
			],
			description: [
				"Most sign language apps show you a video and hope you copy it correctly. A real teacher watches you and tells you exactly what's wrong: your handshape is right, but your hand should be at your chin, not your cheek. I wanted to build that teacher, so I built an ASL tutor from scratch that watches you through a camera, grades your sign against a correct reference, and adapts what you practice next.",
				"The rule I built it around is that the answer key is fixed and everything else adapts. The reference signs come from ASL Citizen, a dataset of Deaf signers, and the breakdown of each sign into its parts comes from ASL-LEX, a linguistic database. Everything the learner experiences, from the diagnosis and the feedback to which sign comes next, is generated live. Grading is always the distance to the one sign you were asked to make, never a guess at what you signed, so the feedback can't confidently invent a wrong answer.",
				"I benchmarked four pose-estimation models and picked MediaPipe as the fastest, steadiest and most accurate at telling similar signs apart. On top of its keypoints, I trained a PyTorch grader with separate heads for each part of a sign: handshape, major and minor location, movement and repetition. On a 60-sign curriculum it identifies the right sign 85% of the time on held-out validation clips, up from 32% for the distance-based baseline I started with, and diagnoses each part correctly 82-90% of the time.",
				"Making it work live took real debugging. A fixed capture window cut off slower signers, so capture now grows from when you start moving to when you naturally come to rest. The grader also kept flagging repeated movements that weren't there, and I traced it to a mismatch between training and use: it had been trained on full dataset clips with far more idle padding than live capture ever keeps. Retraining on clips framed the way live capture frames them roughly halved those false positives.",
				"Around the grader is the tutoring loop: spaced repetition over how well you know each sign and each part of it, drills that pair a sign you've nearly mastered with the sign it's most easily confused with, and coaching that tells you what you signed versus what the sign needs. It also grades whole sentences by aligning your signing against the prompted words and grading each word separately. In a side-by-side comparison, this alignment found word boundaries far more accurately than the CTC models used for open-ended sign recognition.",
				"Most recently I took it to the phone. I exported the grader to ONNX, ported the grading core to Dart with tests that check it gives the same results as the Python version, wrote a native MediaPipe plugin for iOS, and built a Flutter app that grades signs live on an iPhone with the reference clips built in.",
			],
			images: ["/ASL-1.png", "/ASL-2.png", "/ASL-3.png"],
			links: [
				{
					title: "GitHub Repo",
					url: "https://github.com/HackOverflow404/SignLanguageLearning",
				},
			],
		},
	},
	{
		id: "echo-show",
		title: "Jailbreaking an Echo Show: LineageOS, a Camera Pipeline, and Bluetooth Audio",
		description:
			"Replaced Fire OS on an Amazon Echo Show 5 with a self-built LineageOS ROM, debugged a vendor HAL ABI mismatch to bring up its camera, turned it into a self-healing webcam and recording security camera, and patched Android's Bluetooth stack to hold speaker latency at a steady 30-180ms.",
		modalContent: {
			title: "Freeing Clippy: Custom Android on an Amazon Echo Show",
			skills: [
				"Self-Directed Ownership",
				"Research & Analytical Thinking",
				"Reverse Engineering",
				"LineageOS / AOSP",
				"Systems Programming",
				"C++",
				"Kotlin",
				"Python",
				"Android Development",
				"FFmpeg",
				"Bluetooth Audio",
				"Protocol Debugging",
				"Home Assistant",
				"Raspberry Pi",
				"Linux",
			],
			description: [
				"The Echo Show 5 is good hardware: a touchscreen, a far-field microphone array, a speaker and a camera, locked to Fire OS and Alexa. I wanted the hardware without the lock. Its MediaTek chip has a known bootrom vulnerability, exploited by the community's amonet tool to unlock the bootloader, so I built a full LineageOS 18.1 (Android 11) ROM for it from source and booted a clean Android with no Amazon software. I named it Clippy.",
				"The camera didn't work. The camera service reported zero cameras, and tracing it led to an ABI mismatch: the ROM loaded a common set of MediaTek camera libraries whose vtable had two extra functions, so the device's camera module was calling the wrong function and getting garbage back. I fixed the library selection and the camera server, then a kernel config bug that kept a sensor-driver patch from ever applying, and Clippy took its first photo.",
				"With a working camera, I wrote EchoCameraStreamer, a Kotlin app that encodes the camera to 720p H.264 in hardware and streams it to my laptop over Tailscale, where it appears as an ordinary webcam to any video call app. It recovers on its own from camera errors, encoder stalls, network drops and reboots: a full Echo reboot comes back live in 55 seconds with no interaction. Tuning the encoder (6 Mb/s High profile instead of an underdelivering Baseline) cut compression artifacts by 38%, and running the laptop side only while an app has the camera open took its idle cost from 12-14% of a CPU core to 0.1%.",
				"I then made the same camera a security camera. The Echo's stream serves one client, so I built SECUR-T, a hub on my Raspberry Pi that becomes that client and fans the stream out to my laptop and to go2rtc, which serves it to Home Assistant and a recorder. The recorder writes ten-minute segments to my NAS without re-encoding and keeps a 25GB rolling buffer, about 18 hours of footage, deleting the oldest as it goes. The whole pipeline costs the Pi about 7% CPU.",
				"Clippy is also a Bluetooth speaker for my laptop, but its audio slowly drifted out of sync with video. Rather than keep a workaround, I patched Android's Bluetooth stack: the receiver never shed the backlog from playback-start and catch-up bursts, so every burst became permanent delay. The patch measures queued audio over a four-second window and trims only persistent excess, at most 2ms at a time with a crossfade so it's inaudible. Latency that used to grow without limit now holds steady between 30 and 180ms.",
				"This took me deeper than anything before it: Android's build system, vendor HALs, kernel configuration, C++ ABIs, hardware video encoding and Bluetooth audio, all to get a smart display that answers to me instead of to Amazon.",
			],
			links: [
				{
					title: "GitHub: EchoCameraStreamer",
					url: "https://github.com/HackOverflow404/EchoCameraStreamer",
				},
				{
					title: "GitHub: SECUR-T",
					url: "https://github.com/HackOverflow404/secur-t",
				},
			],
		},
	},
	{
		id: "cs124-honors",
		title: "CS 124 Honors Web Platform: Full-Stack Leadership at UIUC",
		description:
			"Leading a team of 11 developers to build and maintain the CS 124 Honors course platform at UIUC - featuring UIUC SSO authentication, five-tier role-based access, a staff task management dashboard, and a custom TOTP attendance system.",
		modalContent: {
			title: "Building and Leading the CS 124 Honors Platform at UIUC",
			skills: [
				"Scope & Priority Management",
				"Empathy-Driven Design",
				"Leadership & Team Management",
				"Collaboration & Teamwork",
				"React/React Native",
				"Next.js",
				"JavaScript",
				"TypeScript",
				"Tailwind CSS",
				"REST APIs",
				"Vercel",
				"Git",
				"Responsive Design",
			],
			description: [
				"As Lead Web Developer for CS 124 Honors at UIUC, I inherited a course website that was slow, had no authentication and had no tooling for staff. I started with performance, cutting bloated assets and render-blocking paths, which took the Lighthouse score from 76 to 99.",
				"I integrated UIUC's Shibboleth single sign-on so users log in with their NetID and get a JWT-backed session, and built a five-tier role system on top of it, from Course Lead down to Student, with dedicated routes and dashboards per role.",
				"For staff I built a task dashboard for creating, assigning and tracking work with deadlines, replacing Slack threads and spreadsheets. The feature I'm proudest of is attendance: students check in to an event with a one-time code that refreshes every 30 seconds, using time-based token logic I implemented myself, so only students present in the room can mark attendance.",
				"The role is as much leadership as code. I manage 11 developers: delegating features, reviewing pull requests, running weekly meetings and making architecture calls that keep the codebase maintainable as contributors rotate each semester.",
			],
			embed: ["https://honors.cs124.org"],
			links: [
				{
					title: "CS 124 Honors Website",
					url: "https://honors.cs124.org",
				},
				{
					title: "CS 124 Honors Dev Website",
					url: "https://cs124h-dev-site.vercel.app/",
				},
			],
		},
	},
	{
		id: "instinct",
		title: "Instinct: A Private Voice Assistant on a Jailbroken Echo Show",
		description:
			"A voice assistant with a custom-trained wake word, on-device Whisper and Piper speech models on a Raspberry Pi, a WhatsApp bridge in Go, and a Kotlin dashboard on my LineageOS Echo Show that adapts to whether anyone is in the room.",
		modalContent: {
			title: "Instinct: Building the Voice Assistant I Actually Wanted",
			skills: [
				"Empathy-Driven Design",
				"Scope & Priority Management",
				"Self-Directed Ownership",
				"Python",
				"Kotlin",
				"Go",
				"Android Development",
				"Speech Recognition & Synthesis",
				"MediaPipe",
				"SQLite",
				"MQTT",
				"Raspberry Pi",
				"systemd",
				"Linux",
			],
			description: [
				"Once Clippy ran LineageOS, it had a microphone array, a speaker and a screen with no assistant behind them. I already message Instinct, an assistant, all day, so I made the Echo a voice front end for it. The Echo streams its microphone to my Raspberry Pi, which listens for a wake word I trained myself, \"Hey Clippy\", transcribes the request with Whisper, sends it to Instinct, and speaks the reply with Piper one sentence at a time, so the Echo starts talking as soon as the first sentence is ready.",
				"Personal WhatsApp has no API, so I wrote a bridge in Go on the open-source whatsmeow library, with logic to tell which incoming message is actually the answer when the chat also holds messages I typed myself. Requests go through a SQLite outbox, so a reconnect resumes waiting instead of losing the request, and a crash never sends anything twice.",
				"Much of the work was deciding what not to send. A wake only counts if it's clearly louder than the room, Whisper's phantom transcripts of silence are dropped, \"never mind\" cancels a request, and saying the wake word mid-reply interrupts it. Commands meant for the Echo itself, like Bluetooth pairing or volume, are caught by a fixed grammar, with a small decision model as the fallback for anything ambiguous.",
				"The Echo runs a Kotlin and Jetpack Compose app that doubles as an always-on dashboard: clock, weather, calendar and the Pi's health. A camera service on the Pi uses MediaPipe to tell how close someone is, so from across the room the dashboard reflows into a large clock and the next event, and music pauses when the room has been empty for 90 seconds. On a 2GB Pi, local Whisper takes about five seconds, so the speech engines can be swapped for a cloud provider with automatic fallback to the local models.",
				"It spans embedded audio, speech models, a reverse-engineered messaging protocol, Android platform restrictions and three languages, and it's the assistant I actually wanted: my own wake word, my own hardware and my own data path.",
			],
			images: ["/Instinct-1.png"],
			links: [
				{
					title: "GitHub Repo",
					url: "https://github.com/HackOverflow404/Pi-Voice-Assistant",
				},
			],
		},
	},
	{
		id: "mainframe",
		title: "Mainframe: A Raspberry Pi Homelab, NAS, and Private Network",
		description:
			"A Raspberry Pi 4 that runs my home: a 2TB Samba NAS, Home Assistant fed over MQTT, a desk lamp driven through its own hacked RF remote, and the voice and security camera services for a jailbroken Echo Show, all reachable from anywhere over a Tailscale mesh.",
		modalContent: {
			title: "Mainframe: The Little Computer That Runs My Home",
			skills: [
				"Self-Directed Ownership",
				"Research & Analytical Thinking",
				"Raspberry Pi",
				"Linux",
				"Tailscale",
				"Samba / NAS",
				"Docker",
				"Home Assistant",
				"MQTT",
				"Python",
				"Reverse Engineering",
				"systemd",
				"Network Analysis",
				"Shell Scripting",
			],
			description: [
				"Mainframe is a Raspberry Pi 4 with 2GB of RAM: a deliberately grand name for a credit-card-sized computer that has become the backbone of everything I build at home. (My NAS on it is S.H.O.D.A.N, the Sentient Hyper-Optimized Data Access Network. It isn't sentient yet.)",
				"Its first job was storage: a 2TB drive shared over Samba, split into an archive volume and a backups volume, which my laptop mounts on demand and which carried my whole home directory through a move from Ubuntu to Arch. Every device sits on a Tailscale mesh, so I can reach any of them from anywhere without opening a single router port.",
				"From there it picked up responsibilities: Home Assistant in Docker, an MQTT broker for my ESP32 LED controllers, the kiosk for my TPS-L2 Spotify display, and everything behind Clippy, my jailbroken Echo Show. The Echo is wired to it over USB, so every ROM flash and app deploy goes through the Pi, and the voice assistant, the security camera recorder and the presence detector all run on it as systemd services.",
				"The newest piece is a desk lamp that only came with a 433 MHz remote. I recorded the remote's data line with the Pi, decoded its fixed-code protocol (a 20-bit address and a 4-bit button), and wired the Pi into the remote so it can press any button through the remote's own transmitter using DMA-timed waveforms. The physical buttons still work, and Clippy's voice assistant can press them too.",
				"To get all of this into Home Assistant without hand-written config, I wrote mainframe-bridge, a Python service that registers the lamp, the Pi's health, its drives and services, and the security camera over MQTT discovery, with a last-will message so a crash shows everything as unavailable instead of silently stale. It's a single board doing the work of a NAS, a VPN, a smart home hub, a camera recorder, a kiosk and an Android dev server, and every piece of it was set up, broken and fixed by me.",
			],
		},
	},
	{
		id: "microtech",
		title: "Illinois MicroTech: External Vice President and EOH Lead",
		description:
			"External Vice President of Illinois MicroTech, running marketing and outreach, and lead of the club's EOH exhibit: a 15-person team that built 4 interactive stages teaching MEMS through a Louvre heist for 20,000+ attendees on a $250 budget.",
		modalContent: {
			title: "External VP at Illinois MicroTech, and Teaching MEMS Through a Museum Heist",
			skills: [
				"Scope & Priority Management",
				"Empathy-Driven Design",
				"Creative Thinking",
				"Collaboration & Teamwork",
				"Leadership & Team Management",
				"Communication & Explanation",
				"ESP32",
				"Circuit Design",
				"C++",
			],
			description: [
				"Since October 2025 I've been External Vice President of Illinois MicroTech, UIUC's micro- and nanotechnology club. I manage our marketing chairs, EOH leads and outreach committee, and the biggest thing I've led in the role is our Engineering Open House exhibit.",
				"EOH is the largest student-run STEM fair in the US, with visitors from elementary schoolers to professors. As EOH Lead, heading a 15-person team on a $250 budget, I had to make MEMS, the tiny sensors inside phones, cars and drones, engaging for all of them at once, so we themed the exhibit as a heist at the Louvre.",
				"Each of the four stages smuggled in a MEMS concept: a lock picked by finding the one magnetic tool that triggers a reed switch, a logic-gate maze lighting the path to the diamond, a jewel on three pressure sensors read by an ESP32 that you had one second to swap for an equal weight before the alarm tripped, and a getaway pedal driving a servo speedometer.",
				"Leading it meant splitting the vision into workstreams, matching members to stages by skill, running check-ins, unblocking people when hardware misbehaved and making scope calls so four demos built from scratch came together on time. The biggest lessons were about giving teammates ownership without losing visibility, and deciding under time pressure when the perfect answer isn't available.",
			],
			images: ["/EOH-1.png", "/EOH-2.png"],
			links: [
				{
					title: "Illinois MicroTech",
					url: "https://microtech.grainger.illinois.edu/",
				},
			],
		},
	},
	{
		id: "care-health",
		title: "Internship at Care Health Insurance",
		description:
			"Cybersecurity Intern - Assessed a health insurer's customer portal and Android app with Nmap, Burp Suite, Frida and JADX.",
		modalContent: {
			title: "Cybersecurity Intern at Care Health Insurance",
			skills: [
				"Research & Analytical Thinking",
				"Nmap",
				"Burp Suite",
				"Frida",
				"JADX",
				"Qemu",
				"Network Analysis",
				"Pentesting Fundamentals",
				"Reverse Engineering",
				"Linux",
			],
			description: [
				"This internship was where security went from coursework to real infrastructure. I ran network reconnaissance and vulnerability assessments with Nmap and Wireshark, and wrote findings that informed decisions about the security of the company's customer portal.",
				"I used Burp Suite daily to intercept and probe the portal's web traffic for misconfigurations and vulnerabilities. It was also my first serious mobile security work: I ran Android VMs in QEMU to get a controlled environment, then used JADX for static analysis and Frida for runtime instrumentation to examine how the company's app behaved under the hood.",
			],
		},
	},
	{
		id: "iotpp",
		title: "Internship at IoT++",
		description:
			"Developed a vehicle routing prediction system using Random Forests and RNNs. Fine tuned image generation models for route depiction. Optimized YOLO on Orange Pi NPU using GStreamer.",
		modalContent: {
			title: "IoT++: AI Systems for Real-Time Detection and Routing",
			skills: [
				"Communication & Explanation",
				"Collaboration & Teamwork",
				"Scope & Priority Management",
				"Python",
				"Docker",
				"Kubernetes",
				"GStreamer",
				"Azure",
				"YOLO",
				"TensorFlow",
				"PyTorch",
				"Pandas",
			],
			description: [
				"My main project was a YOLO-based real-time detection system for fire hazards and people in industrial sites. I retrained and fine-tuned it on custom datasets and moved it onto the NPU of an Orange Pi through a GStreamer pipeline, for 13x faster inference and a 62% improvement in detection accuracy.",
				"I containerized the pipeline with Docker and deployed it with Kubernetes on Azure. I also trained random forests and RNNs to route trucks to weighbridges based on live traffic and equipment throughput, which taught me to balance accuracy, latency and interpretability in production ML.",
				"On the generative side, I fine-tuned image generation models to produce route visuals for drivers, and helped design a retrieval-augmented chatbot over the company's internal documents.",
			],
		},
	},
	{
		id: "tps-l2",
		title:
			"TPS-L2: A Spotify Controller from Repurposed Legacy Hardware",
		description:
			"A wall-mounted Spotify now-playing display built from a rescued laptop LCD and a Raspberry Pi, with a QR-code phone login I designed so the same backend can drive any screen, down to an ESP32.",
		modalContent: {
			title:
				"TPS-L2: Repurposing Legacy Hardware as a Now-Playing Dashboard",
			skills: [
				"Self-Directed Ownership",
				"Creative Thinking",
				"JavaScript",
				"HTML/CSS",
				"Vercel",
				"Responsive Design",
				"REST APIs",
				"Raspberry Pi",
				"Circuit Design",
				"LVDS",
				"Linux",
				"systemd",
				"Reverse Engineering",
			],
			description: [
				"After salvaging the LCD panel from an old Acer laptop, I paired it with an LVDS controller board and my home Raspberry Pi to make a wall-mounted Spotify display, named TPS-L2 after Sony's original 1979 Walkman.",
				"The dashboard is a plain HTML, CSS and JavaScript app on Vercel, with serverless functions that keep the Spotify secret off the device. It shows the current track with playback controls and synced, auto-scrolling lyrics, and since much of what I listen to isn't in English, it romanizes Korean, Japanese and Chinese lyrics line by line, loading each library only when a song needs it. Any Spotify user can log in and use it.",
				"Building a second one on an ESP32 for my sister exposed a problem: Spotify login ends in a web page, and the panel has no keyboard while an ESP32 has no browser at all. Spotify doesn't offer developers the device sign-in TVs use, so I built my own. The display shows a QR code and a short code, your phone confirms the code matches and logs in with Spotify, and the display collects its token exactly once. The handoff lives in Upstash Redis, designed to stay on the free tier: signed, self-expiring device codes reject bogus polls before they touch Redis, cutting usage from exhausting the monthly quota in nine days to about a fifth of it.",
				"On the Pi I replaced Chromium and X11 with Cog, a minimal WebKit browser drawing straight to the display as a systemd service, using far less memory on a Pi that also runs my NAS and voice assistant. Anything that can show a QR code and make HTTPS requests can now link itself through the same backend.",
			],
			images: ["/SpotifyController-1.png", "/SpotifyController-2.png"],
			links: [
				{
					title: "GitHub Repo",
					url: "https://github.com/HackOverflow404/TPS-L2",
				},
				{
					title: "Hosted Now-Playing UI",
					url: "https://tps-l2.vercel.app/",
				},
			],
		},
	},
	{
		id: "hackerfab",
		title: "HackerFab: Student-Built Semiconductor Fab",
		description:
			"Building a student-run photolithography patterning machine, automating a precision wafer stage with stepper motors and grblHAL.",
		modalContent: {
			title: "HackerFab: Fabricating Semiconductors from Scratch",
			skills: ["Collaboration & Teamwork", "Circuit Design", "Python", "C++"],
			description: [
				"Photolithography is how every modern chip starts: light transfers a pattern onto a silicon wafer. HackerFab is UIUC's effort to build that process from the ground up, inspired by CMU's student fab, and I work on the team turning a manually operated rig into a precise, programmable machine.",
				"Before automating anything, we rebuilt the rig vertically, hanging the UV projector and camera from an aluminum frame so gravity holds the wafer flat instead of adhesive. Then we added stepper motors, working through several controller boards before settling on one with grblHAL support for well-documented, tunable motion control, and adapted CMU's software to our hardware. The stage now moves autonomously and repeatably across the full wafer.",
				"Next we're exposing real patterns and benchmarking positional precision, to learn exactly what feature sizes the automated stage can reliably produce.",
			],
			images: ["/HackerFab-1.png", "/HackerFab-2.png"],
			links: [
				{
					title: "MicroTech Website",
					url: "https://microtech.grainger.illinois.edu/",
				},
			],
		},
	},
	{
		id: "remotecam",
		title: "RemoteCam",
		description:
			"A cross-platform app that turns my iPhone into a wireless webcam and microphone for Linux, built on WebRTC and Firebase signaling, with a mobile PWA and a Qt desktop client that exposes a virtual camera and mic.",
		modalContent: {
			title: "RemoteCam: Engineering Seamless Communication",
			skills: [
				"Self-Directed Ownership",
				"Research & Analytical Thinking",
				"Python",
				"TypeScript",
				"HTML/CSS",
				"React/React Native",
				"Next.js",
				"Qt",
				"Firebase",
				"Progressive Web Apps (PWA)",
				"Cross-Platform Apps",
				"Responsive Design",
				"WebRTC",
				"Linux",
				"Network Analysis",
				"PyQt5",
				"GStreamer",
			],
			description: [
				"My laptop's webcam and microphone had become unusable for calls, but I carried an iPhone with far better hardware. Inspired by Apple's Continuity Camera, I set out to make it a wireless webcam and microphone for Linux, and to learn how real-time communication actually works.",
				"I chose WebRTC for low-latency, peer-to-peer media. A native iOS WebRTC app needed a Mac and a paid developer account, so I pivoted to a Next.js Progressive Web App on the phone and a Python/Qt client on Linux, with Firebase for signaling, locked down so connections need a random, short-lived session code.",
				"Then came every WebRTC problem there is: malformed SDP, ICE candidates that never gathered, unreachable TURN servers and codec mismatches, debugged with browser consoles and Wireshark. For a long time it simply didn't connect. Months later I rebuilt the pipeline end to end: the desktop client now feeds the stream into a virtual camera and routes audio through a virtual PulseAudio microphone, so every app sees an ordinary webcam and mic. I then added remote camera and mic toggles over a data channel, and fixed how iOS Safari reports rotation so the picture stays upright.",
				"It now does exactly what I set out to build, and the real payoff was pushing past the limits of what I knew.",
			],
			images: ["/RemoteCam-1.png", "/RemoteCam-2.png", "/RemoteCam-3.png"],
			links: [
				{
					title: "Github Repo",
					url: "https://github.com/HackOverflow404/RemoteWebcam",
				},
				{ title: "Live Website", url: "https://remote-webcam-b70ab.web.app/" },
			],
		},
	},
	{
		id: "sigpwny-badge",
		title: "PCB Badge for CTF at Sigpwny",
		description:
			"Helped design an ESP32-based DEFCON-style badge. Worked on SAO compatibility and embedded firmware.",
		modalContent: {
			title: "Silicon & Signals: The Sigpwny CTF Badge Build",
			skills: [
				"Collaboration & Teamwork",
				"Python",
				"C",
				"ESP32",
				"Circuit Design",
				"Protocol Debugging",
				"MicroPython",
				"CTFs",
			],
			description: [
				"Sigpwny is UIUC's information security club, and every year it hosts UIUCTF, a Capture the Flag competition with a DEFCON-style electronic badge. This year's is a space-themed ESP32 badge that talks to other badges over ESP-NOW and ESP-WIFI-MESH, forming a decentralized network among players.",
				"On the firmware team, I built the display interface in MicroPython, writing memory-aware rendering code that drives the screen directly over SPI. On the hardware side, I helped with the PCB layout and schematic iterations, working through power delivery and voltage regulation.",
			],
			images: ["/Badge-1.png", "/Badge-2.png", "/Badge-3.png", "/Badge-4.png"],
		},
	},
	{
		id: "biometrics-paper",
		title:
			"Research Paper on Biometric Authentication and Cybersecurity in the Digital Age",
		description:
			"Published review paper analyzing biometric authentication as a modern alternative to passwords and tokens, with a focus on digital risk management, privacy, usability, and online banking security.",
		modalContent: {
			title: "Biometric Authentication and Cybersecurity in the Digital Age",
			skills: [
				"Research & Analytical Thinking",
				"Communication & Explanation",
				"Pentesting Fundamentals",
			],
			description: [
				"Authentication still depends on passwords and tokens that break down under real human behavior: fatigue, weak reset flows and theft. In this published review paper I asked whether biometrics are a responsible step forward: where they improve security and usability, and where they introduce risks people ignore.",
				"I evaluated them on cost, usability, scalability, security and privacy, and distinguished physical biometrics from behavioral ones, which become harder to trust as AI changes the threat model. Since a biometric can't be rotated like a password, I argued for template or hash-based storage along with consent and transparency.",
				"Using online banking as the high-stakes case, the paper concludes that biometrics are valuable, but layering them with one-time passwords is the stronger direction for digital risk management.",
			],
			links: [
				{
					title: "Research Paper",
					url: "https://www.medcrave.com/articles/det/30276/Biometric-authentication-and-cybersecurity-in-the-digital-age",
				},
			],
		},
	},
	{
		id: "alberflowy",
		title: "AlberFlowy: Instant Structured Notes from the Launcher",
		description:
			"A custom Albert plugin that interfaces with WorkFlowy's private API for blazing-fast hierarchical note access, creation, editing, and deletion, all from the keyboard.",
		modalContent: {
			title: "WorkFlowy + Albert: Building the Launcher Workflow I Needed",
			skills: [
				"Scope & Priority Management",
				"Self-Directed Ownership",
				"Research & Analytical Thinking",
				"Creative Thinking",
				"C++",
				"Node.js",
				"Shell Scripting",
				"Qt",
				"Linux",
				"Reverse Engineering",
			],
			description: [
				"I use WorkFlowy every day, and I wanted to reach it instantly from anywhere on my Linux desktop through Albert, my keyboard launcher. The problem: WorkFlowy has no public API.",
				"So I reverse engineered its private one by watching the web app's network calls and decoding its operation payloads, and wrapped full create, edit, complete and delete support in a Node.js CLI.",
				"I then wrote an Albert plugin in C++ on Qt, a sparsely documented SDK, that fetches, caches and renders my tree as I type, with path navigation, tab completion and actions on each node. If a node doesn't exist, it offers to create it, updating the cache optimistically and syncing in the background. On my 150+ node vault, cached live queries return in 0.7ms at the median.",
				"It's now part of my daily workflow: one key combo and a few characters takes me to any note or puts a new thought in the right place, with no mouse and no app switching.",
			],
			images: ["/AlberFlowy-1.png", "/AlberFlowy-2.png"],
			links: [
				{
					title: "GitHub Repo",
					url: "https://github.com/HackOverflow404/AlberFlowy",
				},
				{
					title: "Install Page",
					url: "https://hackoverflow404.github.io/AlberFlowy/",
				},
			],
		},
	},
	{
		id: "court-booking",
		title: "Court Booking System",
		description:
			"Full-stack app for apartment complexes using React, Spring Boot, and SQLite. Admin dashboard streamlined sports facility scheduling.",
		modalContent: {
			title:
				"Court Booking System: Building a Full-Stack Solution for Community Coordination",
			skills: [
				"Empathy-Driven Design",
				"HTML/CSS",
				"JavaScript",
				"Java",
				"React/React Native",
				"Spring Boot",
				"SQLite",
				"REST APIs",
				"Responsive Design",
			],
			description: [
				"In my neighborhood, the tennis, basketball and badminton courts ran on paper logbooks, and double bookings and no-shows were routine. I built a full-stack booking system to replace them.",
				"Residents book through a React frontend with calendar views and time-slot selection, backed by a Spring Boot REST API with role checks and conflict validation, and SQLite for storage. Instead of pre-generating every slot, availability is computed on request from admin-defined hours and booking lengths, which stored far less and made schedule changes instant. Every booking sends a confirmation email.",
				"Admins get a separate dashboard to see every booking, override schedules, and change hours and which courts are open. It was my first end-to-end look at solving a real problem for real people, from gathering requirements from non-technical users to shipping the interface they used daily.",
			],
			images: ["Booking-1.png", "Booking-2.png"],
			links: [
				{
					title: "GitHub: Booking Site",
					url: "https://github.com/HackOverflow404/court-booker",
				},
				{
					title: "GitHub: Admin Dashboard",
					url: "https://github.com/HackOverflow404/admin-booking-page",
				},
				{
					title: "GitHub: Spring Boot API",
					url: "https://github.com/HackOverflow404/BookingAPI",
				},
			],
		},
	},
	{
		id: "uplift",
		title: "Uplift",
		description:
			"Hackathon-built cross-platform app using React Native, Tesseract.js for OCR, and LangChain + OpenAI for contextual chat assistance.",
		modalContent: {
			title: "Uplift: Designing Empathy Through Code",
			skills: [
				"Empathy-Driven Design",
				"Communication & Explanation",
				"Collaboration & Teamwork",
				"JavaScript",
				"TypeScript",
				"React/React Native",
				"LangChain + OpenAI",
				"Responsive Design",
			],
			description: [
				"Uplift came out of a hackathon from a simple idea: sometimes you want to help someone who's hurting but don't know what to say. You screenshot the conversation, choose a tone (comfort, advice or validation), and get suggested replies.",
				"We pulled text from screenshots with Tesseract.js, adding preprocessing for noisy captures and using message bubble colors to tell who sent each message. Suggestions came from LangChain and OpenAI, with separate prompts and tuned few-shot examples per tone to teach the difference between advice and simply being there.",
				"Designing for someone in a stressful moment meant obsessing over small friction in the React Native UI, and building it overnight taught me what fast team collaboration feels like.",
			],
			embed: ["https://www.youtube.com/watch?v=76T-BBqLBeY"],
			links: [
				{
					title: "Github Repo",
					url: "https://github.com/HackOverflow404/Uplift",
				},
				{
					title: "Youtube Demo",
					url: "https://www.youtube.com/watch?v=76T-BBqLBeY",
				},
			],
		},
	},
	{
		id: "resume-pipeline",
		title: "Automated Résumé Fetch & Deploy",
		description:
			"Node.js script that pulls my Google-Docs résumé via a GCP Service Account and redeploys my portfolio site in one command.",
		modalContent: {
			title: "Automated Résumé Fetch & Deployment Pipeline",
			skills: [
				"Self-Directed Ownership",
				"Node.js",
				"Google Cloud Platform",
				"Git",
				"Shell Scripting",
				"PyQt5",
				"LaTeX",
			],
			description: [
				"I wanted updating my résumé everywhere to be one command. The first version exported my résumé from Google Docs through a Google Cloud service account; when I moved to LaTeX for full control over formatting, I rewrote it around that.",
				"The script takes the compiled PDF and copies it into my job documents, onto my home NAS and into this site, then builds, commits and pushes, which triggers the site's deployment. A shell alias wraps it all, so my résumé and portfolio stay in sync within minutes.",
				"I also built a PyQt5 Résumé Viewer that parses my résumé into a collapsible tree, where clicking any heading or bullet copies it, which makes filling out application forms much faster.",
			],
			images: ["/ResumeFetch-1.png"],
			links: [
				{
					title: "GitHub Repo",
					url: "https://github.com/HackOverflow404/Resume-Fetcher",
				},
			],
		},
	},
	{
		id: "legacy-laptop",
		title: "Reverse Engineering a Legacy Laptop",
		description:
			"Took apart our nearly two-decade-old family laptop, an Acer Aspire 4736G, and gave its parts new lives: its fan cools my Pi, its LCD became my Spotify wall display, and its speakers became a standalone amplifier build.",
		modalContent: {
			title: "Anatomy of a Machine: The Legacy Laptop Project",
			skills: [
				"Self-Directed Ownership",
				"Creative Thinking",
				"Raspberry Pi",
				"Circuit Design",
				"Protocol Debugging",
				"Reverse Engineering",
			],
			description: [
				"This laptop was part of our family for nearly two decades, and served as a home server, a media center and a pentesting lab before I took it apart down to the last screw. Now I'm giving its parts new life.",
				"I traced the motherboard and probed signals and voltages with a multimeter to work out how each subsystem communicates. The fan now cools my Raspberry Pi, and the LVDS display panel, paired with a controller board, became my wall-mounted Spotify display, TPS-L2.",
				"The speakers became a standalone Pi speaker. My first amplifier, built around an LM358 op-amp from my circuits course, was faint and distorted, so I moved to an LM386 module wired to a salvaged 3.5mm jack and got real clarity and volume. Each component has been a hands-on lesson in how standards like LVDS and USB show up in real hardware.",
			],
		},
	},
	{
		id: "led-controller",
		title: "Smart LED Strip Controller",
		description:
			"Flask app on Raspberry Pi for smartphone-based LED control. Used MQTT, Docker, and integrated the Matter protocol for smart home automation.",
		modalContent: {
			title: "Smart LED Strip Controller",
			skills: [
				"Scope & Priority Management",
				"Self-Directed Ownership",
				"Creative Thinking",
				"Python",
				"HTML/CSS",
				"Flask",
				"Docker",
				"ESP32",
				"Raspberry Pi",
				"Circuit Design",
				"MQTT",
				"Network Analysis",
			],
			description: [
				"When I lost the remote for my LED strip during move-out, I built a better controller instead of buying one. The first version was a Raspberry Pi driving MOSFETs with PWM and a Flask app in Docker, so I could set the lighting from a browser, and it restored the last color and mode after a power cut.",
				"For real smart home integration I moved to MQTT: an ESP32 drives the strip and subscribes to commands, and the Pi runs the broker as its own Wi-Fi access point, which got around an apartment network that blocked IoT devices. The Flask app became one of several controllers, and my Echo Show gained voice control of the lights.",
				"I also tried to move it to Matter, the new cross-vendor smart home standard, but fought the bleeding-edge toolchain through cross-compilation and dependency problems and never got it working on my hardware. It taught me how much complexity hides behind turning on a light.",
			],
			images: ["/LED-1.png"],
			links: [
				{
					title: "Github Repo",
					url: "https://github.com/HackOverflow404/Control-Lights",
				},
			],
		},
	},
	{
		id: "cyberspace",
		title: "Cyber Awareness Website",
		description:
			"Responsive cybersecurity education platform with interactive lessons and non-technical explanations. Scored 88/93 in Lighthouse testing.",
		modalContent: {
			title: "CyberSpace: Bridging the Gap Between Complexity and Clarity",
			skills: [
				"Empathy-Driven Design",
				"Communication & Explanation",
				"HTML/CSS",
				"JavaScript",
				"Responsive Design",
				"Pentesting Fundamentals",
			],
			description: [
				"After finishing a cybersecurity certification, I wanted that knowledge to reach people who need it most: students, parents and friends navigating the internet on instinct. So I built Cyber Awareness, an interactive site that explains security concepts in everyday language.",
				"I deliberately used no frameworks, just HTML, CSS and JavaScript, designed mobile-first in Figma, with card-based lessons, expandable sections and a quiz with instant feedback. It scored 88 and 93 in Lighthouse testing.",
				"Writing the content was the best part: explaining multi-factor authentication, ransomware and public-key encryption to someone with no technical background forced me to understand them properly.",
			],
			embed: ["https://hackoverflow404.github.io/cyberawareness/"],
			links: [
				{
					title: "Live Website",
					url: "https://hackoverflow404.github.io/cyberawareness/",
				},
				{
					title: "Github Repo",
					url: "https://github.com/HackOverflow404/cyberawareness",
				},
			],
		},
	},
	{
		id: "leet-speak-paper",
		title: "Research Paper on Leet Speak in Password Security",
		description:
			"I wrote a research paper evaluating the use of leet speak in password security under the guidance of a professor at Shobhit University.",
		modalContent: {
			title: "Research Paper on Leet Speak in Password Security",
			skills: [
				"Research & Analytical Thinking",
				"Communication & Explanation",
				"Python",
				"Linux",
				"Hashcat",
			],
			description: [
				"Does leet speak, swapping letters for numbers and symbols, actually make passwords stronger? Common wisdom said yes, so I set out to measure it.",
				"I took a filtered version of a well-known leaked-password list and wrote a Python script to leet-ify each password with weighted, inconsistent substitutions, the way real users make them. I evaluated both sets three ways: zxcvbn strength scores, a custom entropy calculator, and a real attack, hashing every password with SHA-1 and cracking them with Hashcat.",
				"Leet passwords often scored higher on entropy, but zxcvbn rated them lower, and in the Hashcat attack the difference in crack rate was statistically insignificant. Cracking tools already know our substitutions, so leet speak may fool a strength meter but not an attacker.",
				"I wrote the code and ran every test myself, and published the paper in the International Journal of Scientific Research in Science and Technology under the guidance of a professor at Shobhit University.",
			],
			links: [
				{
					title: "Research Paper",
					url: "https://www.researchgate.net/publication/365478150_Evaluation_of_Leet_Speak_on_Password_Strength_and_Security",
				},
			],
		},
	},
];

export default projects;
