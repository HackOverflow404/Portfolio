import { getAssetUrl } from "@/utils/basePath";
import { FaGit } from "react-icons/fa";

export const resumeURL = getAssetUrl("Medhansh_Garg_Resume.pdf");
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
		title: "View Résumé",
		description: "View or download my résumé directly from here.",
		modalContent: {
			title: "My Résumé",
			description: [
				"You can preview, download, or share my résumé below. If you'd like to get in touch, feel free to connect via the links provided.",
			],
			links: [
				{ title: "Download Résumé", url: resumeURL },
				{
					title: "Shareable Link",
					url:
						typeof window !== "undefined"
							? window.location.origin + resumeURL
							: resumeURL,
				},
			],
		},
	},
	{
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
				"In the summer of 2026 I interned as a software engineer at Hopcharge, an EV charging company in Gurugram. Rather than a slice of one large codebase, I owned three internal tools from first conversation to deployment, each replacing a process that people were running by hand.",
				"The first was the Ad Engine, a marketing pipeline in Next.js 16, React 19 and Prisma on Postgres. It runs the whole life of an ad creative: AI-generated idea matrices ranked by funnel stage and trend health, image and video generation, a human review step, publishing to Meta and YouTube, and a performance dashboard that feeds winning patterns back into the next round of ideas. Meta ads are judged on cost per lead and organic YouTube Shorts on engagement, so the two never share a scale. Scheduled jobs run the loop on their own, ffmpeg stamps logos, headlines and outros onto video, and the whole app sits behind Google sign-in limited to the company's own domain. It took the team from two or three ads a week to three a day, about eight times the output.",
				"The second was VOLT.CV, a FastAPI dashboard that automates hiring end to end. Resumes go through a three-tier text extraction fallback, pdfplumber, then PyMuPDF, then Tesseract OCR, before spaCy pulls out structured fields with a confidence score for each. It sends recruitment emails from the recruiter's own Gmail, classifies candidate replies, moves candidates through interview stages with one-click bulk scheduling, and gives each candidate a private link to check their status. Because it holds real candidate and employee data, I secured it at the database itself, with row-level security in Supabase tied to each person's Google identity, and shipped it as a one-click desktop app built by GitHub Actions for four operating systems and architectures.",
				"The third was Grid Ops, a fleet-planning tool for Hopcharge's battery-swap network. It replaced five Python scripts that someone ran by hand in sequence with a FastAPI and React service: it lays a hex grid over each city from raw booking data, classifies every hex's demand, measures user churn, forecasts demand and decides how many charging pods each hex should get, all from a browser with the results on an interactive map. It covers three Delhi-NCR metros, about 60 hexes, and runs behind nginx on an ARM cloud VM.",
				"The thread through all three was building for people who aren't engineers: tools that fail safely, fall back to an offline path when an external service is down, and never make the person using them think about the machinery underneath.",
			],
		},
	},
	{
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
				"ECE 391 is UIUC's Computer Systems Engineering course, and it covers the full stack of abstractions that make modern operating systems work: process scheduling and CPU virtualization, virtual memory and page tables, the system call interface between user programs and the kernel, interrupt-driven I/O, device programming, synchronization primitives, and the file descriptor model. The capstone is an implementation of the Linux kernel built from scratch on a real architecture. The class targeted RISC-V64 and we implemented all of it over the course of the semester.",
				"The work included a VirtIO console driver for keyboard and terminal I/O, a VirtIO block device driver to read a filesystem from disk, a custom filesystem called KTFS, page-table-based virtual memory, a process scheduler, kernel level multithreading, a complete system call interface with user and kernel mode separation, and a Unix-style shell with multi-stage pipeline support. Each piece required reading the actual hardware spec or protocol document and implementing it precisely. Writing a device driver teaches you something that userspace programming never does: you own every byte of state between the hardware register and the kernel abstraction layer, and there is no library to blame when something goes wrong.",
				"What I carry forward from the course is less about the specific features we built and more about how to think under concurrency. Synchronization, mutual exclusion, interrupt latency, the ordering constraints that matter when a timer interrupt and a device interrupt can both fire during a scheduler decision: reasoning about those problems carefully is a skill that generalizes to everything. Debugging at the assembly level, reading machine register state to trace a crash, and developing a real mental model of the hardware-software boundary are things you can only learn by doing them.",
				"After the course ended, I wanted to actually show the kernel running, so I embedded it in the browser. I compiled TinyEMU, a RISC-V emulator by Fabrice Bellard, to WebAssembly using Emscripten. It now boots inside the browser, mounts its filesystem over HTTP, and runs a fully interactive shell through xterm.js. Try it above. Type ls to see the filesystem, cat testfile2 to read a file, or run cat testfile2 | wc | cat to test a three-stage pipeline.",
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
				"The Echo Show 5 is genuinely good hardware: a touchscreen, a far-field microphone array, a speaker and a camera in a small box that sits on a desk forever. Amazon locks it to Fire OS and Alexa. I wanted the hardware without the lock, so I replaced its operating system. Its MediaTek MT8163 chip has a known bootrom vulnerability, exploited by the community's amonet tool to unlock the bootloader. With that open, I synced the LineageOS 18.1 (Android 11) source tree, built a full ROM for the device (codenamed checkers), and it booted into a clean Android with no Amazon software on it. I named it Clippy.",
				"The camera didn't work, which is normal for ports like this. I started from another developer's open-source camera port for the Echo Show family, but the camera service reported zero cameras. The cause was an ABI mismatch: the ROM shipped a common set of MediaTek camera libraries ahead of the checkers ones, and the checkers camera module called searchSensors through slot 40 of a vtable that, in the common library, had two extra functions. It was calling the wrong function, getting garbage sensor indices back, and concluding there were no sensors. The fix was to install the entire checkers camera library set, make the build choose checkers sources for the 36 overlapping copy rules, and swap the common camera server for the legacy provider the checkers module expects.",
				"The next bug was in the kernel. The defconfig enabled CONFIG_THERMAL_CHECKERS but not CONFIG_CHECKERS, so a patch meant to switch the sensor driver to Amazon's struct layouts never applied, and the camera HAL crashed dereferencing address 0x24 after a failed clock call. I fixed the config check, rebuilt the kernel, and wrote the boot image directly over adb root when fastboot kept rejecting it. The camera enumerated and Clippy took its first photo. Every intermediate boot image is backed up on my Pi, so no experiment is ever unrecoverable.",
				"A working camera raised a question I'd been chasing since RemoteCam: could it be my laptop's webcam? I wrote EchoCameraStreamer, a Kotlin app that feeds the camera into the Echo's hardware H.264 encoder at 720p and serves the stream over a local socket. The Pi forwards it over adb, a receiver carries it across Tailscale, and my laptop decodes it into a v4l2loopback device that any video call app sees as an ordinary webcam, using a small binary protocol I designed that replays codec configuration on reconnect and drops stale frames rather than falling behind. Then I made it self-healing: camera errors, encoder stalls, reboots and network drops all recover on their own, and on real hardware a full Echo reboot came back live in 55 seconds with no interaction.",
				"Then I wanted the same camera to double as a security camera, which ran into a limit of my own design: the Echo's stream serves one client at a time, and my laptop already held it. So I built SECUR-T, a hub on the Pi that becomes the Echo's only client and fans the stream out to everything else: my laptop's webcam, and go2rtc, which republishes it as RTSP for Home Assistant and a recorder. The recorder copies the H.264 into ten-minute MP4 segments on S.H.O.D.A.N without re-encoding, and keeps the folder under 15GB by deleting the oldest footage as it records, about a day of history. Snapshots at first never returned, because the encoder sends its SPS and PPS parameter sets once per session and every later keyframe arrives bare; the hub now repeats them in front of each keyframe. The whole pipeline costs the Pi about 7% CPU, and Home Assistant shows the live feed, the recordings and a switch to pause recording.",
				"With a real Android ROM, Clippy could also be an ordinary Bluetooth speaker for my laptop, showing up as TPS-L2, after Sony's original Walkman. It sounded great for a while, then the audio slowly fell behind until video and sound were visibly out of sync, even on SBC, the simplest codec. A laptop-side service that pinned the codec and reconnected after idle periods made it livable, but it was a workaround, not an explanation, so I went into Android's Bluetooth stack. The receiver never shed backlog: the roughly 600ms burst a source sends when playback starts, every catch-up burst after a radio or CPU stall, and any clock drift all became permanent delay.",
				"I patched the stack to measure how much audio is queued ahead of the speaker and trim only persistent excess. The subtle part was telling excess from catch-up bursts that legitimately cover the next gap, so the patch judges backlog by its minimum over a four-second window and removes at most 2ms per write with a crossfade, so it's inaudible, above a 100ms floor. Along the way I fixed a separate bug where the write loop passed a byte count as a frame count. Delay that used to grow without limit now holds steady between 30 and 180ms, which also showed that clock drift was negligible and the bursts were the real culprit, so the laptop's reconnect workaround could go.",
				"This took me deeper than anything before it: Android's build system, vendor HAL internals, kernel configuration, C++ ABIs, hardware video encoding, Android's Bluetooth audio path, and a streaming pipeline stitched across three machines. And it all started with wanting a smart display that answered to me instead of to Amazon.",
			],
		},
	},
	{
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
				"When I became Lead Web Developer for CS 124 Honors at UIUC, the course had a website, but not a great one: it was slow, had no authentication, and had no internal tooling for staff. My job wasn't just to maintain it, it was to rethink it. I started with performance, auditing bloated assets and blocking render paths and optimizing images and lazy loading, which took the Lighthouse score from 76 to 99. Every millisecond of load time is a student waiting, and a course platform should feel instant.",
				"The bigger challenge was identity and access. I integrated the platform with UIUC's Shibboleth single sign-on, so users sign in with their NetID and get a JWT-backed session, with no separate accounts or passwords. That became the backbone of a five-tier role system (Course Lead, Head Project Manager, Project Manager, Web Developer and Student), with dedicated routes and dashboards per role rather than one interface with hidden buttons.",
				"For staff, I built a task management dashboard where tasks can be created, assigned, given deadlines and tracked, replacing back-and-forth Slack messages and shared spreadsheets with a single source of truth. The feature I'm proudest of is attendance: staff create events, and students check in with a one-time code that refreshes every 30 seconds. I implemented the time-based token logic myself rather than using a TOTP library, tied to each event, so only students present during the window can mark attendance. It's fraud-resistant, frictionless, and removes manual tracking entirely.",
				"Beyond the code, the role is leadership. I manage 11 developers: delegating features, reviewing pull requests, running weekly meetings, unblocking teammates and making architectural decisions that keep the codebase maintainable as contributors rotate each semester, which makes onboarding and documentation part of the job.",
				"The platform is a living system a large course depends on every day, and building it has been as much about engineering judgment and people management as writing code. Watching it go from a sluggish static page to a responsive, role-aware, institution-integrated platform is something I'm genuinely proud of.",
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
		title: "Instinct: A Private Voice Assistant on a Jailbroken Echo Show",
		description:
			"A voice assistant with a custom-trained wake word, on-device Whisper and Piper speech models on a Raspberry Pi, a WhatsApp bridge in Go, and a Kotlin dashboard running on my LineageOS Echo Show.",
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
				"SQLite",
				"Raspberry Pi",
				"systemd",
				"Linux",
			],
			description: [
				"Once Clippy was running LineageOS, I had a microphone array, a speaker and a screen with no assistant behind them. I already send requests all day to Instinct, an assistant I talk to over WhatsApp, so the idea was simple: speak to the Echo, have the message land in that chat, and hear the reply read aloud, without Alexa. The Echo streams its microphone over an authenticated WebSocket to my Raspberry Pi, which listens for a wake word I trained myself, \"Hey Clippy\", with openWakeWord. It captures the request, transcribes it with Whisper, sends it to Instinct, and speaks the reply with Piper one sentence at a time, so the Echo starts talking as soon as the first sentence is ready.",
				"WhatsApp has no API for personal accounts, so I wrote a small bridge in Go on whatsmeow, the open-source WhatsApp Web library. The hard part was deciding which incoming message is actually the answer, since the chat also holds conversation I type from my phone: replies that quote the request always count, and when it's ambiguous the assistant stays silent rather than read out the wrong message. Every request goes into a SQLite outbox, so a reconnect resumes waiting instead of losing it, and a crash mid-send never resends, because sending the same message twice is worse than asking me to repeat myself.",
				"Much of the work was deciding what not to send. A wake only counts if it's much louder than the room was a moment before, transcripts that are just Whisper's phantom text for silence are dropped, and \"never mind\" or \"actually, cancel\", even tacked onto the end of a request, discards it. Some requests are for the Echo itself: pairing a Bluetooth device, or raising the speaker or voice volume. A fixed grammar catches those instantly, and anything it doesn't recognize goes to Jev, TypeSafe's decision model, which in a single request says whether the words are for Instinct, a device command, a cancellation or an accidental trigger. When it's unsure, the request goes to Instinct as before. Pairing works by having the Pi open Android's own Pair new device screen over adb, the only place Android makes itself discoverable without a prompt.",
				"The Echo side is a Kotlin app in Jetpack Compose that doubles as an always-on dashboard: clock, weather, today's and tomorrow's calendar events, and the Pi's temperature, CPU and RAM. Getting it to start unattended took real Android work, since Android 11 blocks background services from opening the microphone. A 2GB Pi 4 forced honest tradeoffs too: local Whisper takes about five seconds, so speech engines are swappable for Deepgram with automatic fallback to the local models, and APKs build on my laptop and deploy through the Pi's adb because Gradle alone locks the Pi up.",
				"This is the assistant I actually wanted: my own wake word, my own hardware, my own data path, and an answer from the assistant I already rely on. It spans embedded audio, speech models, a reverse-engineered messaging protocol, Android platform restrictions and three languages, and all of it is built to fail gracefully.",
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
				"I like giving my devices names that mean something. My laptop is Deep-Thought, after the supercomputer from The Hitchhiker's Guide to the Galaxy. My phone is LC-3, short for Little Computer 3, because that's exactly what a phone is. My iPad is Stone Tablet, since I mostly write, draw, and take notes on it, and my headphones are Decibel, after the unit of sound. My Echo Show is Clippy, after Microsoft's old Office assistant and the wake word of the voice assistant I built for it. My NAS is S.H.O.D.A.N, the Sentient Hyper-Optimized Data Access Network: it is a data access network optimized for exactly my use case, even if it isn't technically sentient yet. Holding all of it together is Mainframe, a Raspberry Pi 4 with 2GB of RAM. It's a deliberately grand name for a credit-card-sized computer, but it has slowly become the backbone of everything I build at home.",
				"Its first job was storage. I split a 2TB external drive into a 300GB S.H.O.D.A.N volume for coursework archives and a 1.5TB Backups volume, and shared both over Samba. My laptop mounts them on demand through systemd automounts, my résumé pipeline copies every new build onto the NAS, and when I moved my laptop from Ubuntu to Arch, the whole home directory came back from that drive. To reach it from anywhere without opening a single router port, every device sits on a Tailscale mesh: WireGuard tunnels with stable MagicDNS names, so `ssh mainframe` reaches the same Pi from my room or across the country.",
				"Running it taught me that a private network moves failures rather than removing them. After the laptop migration, SSH to the Pi worked over Tailscale but Samba connections were refused. Instead of reinstalling things until it worked, I went down the stack: was traffic reaching the Pi, was anything listening on ports 445 and 139, would a Tailscale ACL block them? The answer was mundane, the Samba daemon had simply stopped, but getting there methodically was the real lesson.",
				"From there it kept picking up responsibilities. It runs a Mosquitto MQTT broker for my ESP32 LED controllers and Home Assistant in Docker. Container data used to live on a USB drive to spare the SD card, until that drive failed and went read-only; I archived what was on it to the Backups volume and moved Docker back onto the SD card. It drives TPS-L2, my wall-mounted Spotify display, and it's the brain behind Clippy: the Echo Show is permanently attached to it over USB, so every adb command, ROM flash and app deploy goes through the Pi, reachable from anywhere over Tailscale. The voice assistant server, its WhatsApp bridge and a watchdog that relaunches the Echo's dashboard all run as systemd user services that start on boot without anyone logging in.",
				"The newest piece is a desk lamp that only came with a 433 MHz remote. Instead of buying a smart bulb, I opened the remote and recorded its data line with the Pi while pressing each button. Every press is an EV1527-style fixed code, a 20-bit remote address followed by a 4-bit button number, sent as long and short pulses about 1.2ms and 0.4ms wide. Between presses the remote's encoder chip lets go of that line, so I wired the remote to the Pi's 3.3V supply and a GPIO pin, and the Pi now drives the line itself with DMA-timed pigpio waveforms, sending any button through the remote's own transmitter. The physical buttons still work, and Clippy's voice assistant can press them too.",
				"To get all of this into Home Assistant without hand-written YAML, I wrote mainframe-bridge, a small Python service that announces devices over MQTT discovery: the lamp's twelve buttons and a mode dropdown, Mainframe's CPU, temperature, memory, drives and services, and Clippy's security camera with its recording switch and storage stats. Every entity shares one availability topic with an MQTT last will, so if the bridge dies, Home Assistant shows everything as unavailable instead of quietly stale. The phone dashboard is generated by a script, so its whole layout is versioned and reproducible rather than living only in Home Assistant's UI.",
				"None of this is enterprise infrastructure, and that's the point. It's a single board doing the work of a NAS, a VPN, a smart home hub, a security camera recorder, a kiosk and an Android dev server, and every piece of it was set up, broken, debugged and fixed by me. It has taught me more about Linux networking, service management and failure isolation than any class.",
			],
		},
	},
	{
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
				"Since October 2025 I've been External Vice President of Illinois MicroTech, UIUC's club for micro- and nanotechnology. The role is the club's face outward: I manage our marketing chairs, our EOH leads and the outreach committee, and run outreach initiatives of my own, so that the people who should know about MicroTech, from prospective members to faculty and partners, actually do. The biggest single thing I've led in that time is our Engineering Open House exhibit.",
				"Engineering Open House is the largest student-run STEM fair in the United States, drawing thousands of visitors to UIUC, from elementary schoolers to professors. As EOH Lead, heading a 15-person team on a $250 budget, my job was to make what we do, working with MEMS devices, genuinely engaging for all of them at once. MEMS (Micro-Electro-Mechanical Systems) are the tiny sensors inside almost every modern device: the accelerometer in your phone, the pressure sensor in your car, the gyroscope in a drone. Explaining them to kids, parents and engineers at the same time takes more than a poster board, so we themed the whole exhibit around pulling off a heist at the Louvre.",
				"Leading it meant a lot more than the concept. I broke the vision into workstreams, matched members to stages by skill (circuit design, 3D modeling and construction, firmware), and kept everything moving in parallel so it would actually fit together by EOH weekend. That meant running check-ins, unblocking people when hardware misbehaved, making scope calls when something took too long, and keeping the timeline honest.",
				"Each of the four stages smuggled a MEMS concept into a challenge. Visitors picked a lock by finding the one magnetic tool that triggered a reed switch, our stand-in for a magnetometer, then used it to pull magnet-tipped pins. Next came a logic gate maze, where eight switches wired through AND, OR, NOT and XOR gates lit the path to the diamond, which turned out to be surprisingly tricky even for engineers. The heist itself was a jewel on three pressure sensors feeding an ESP32: lift it and you had one second to swap in a substitute of equal weight before the alarm tripped. The getaway was a foot pedal read by an ESP32, driving a spinning wheel and a servo speedometer to simulate a tachometer.",
				"Every stage had to be intuitive for a ten-year-old, engaging for a university student, and technically grounded enough to interest a professor. Getting that balance right across four demos, all built and wired from scratch, shaped every design decision we made.",
				"Technically, I got deeper into embedded systems and circuit design than I had before, but the bigger lessons were about people and process: giving teammates ownership without losing visibility, course-correcting without micromanaging, and deciding under time pressure when the perfect answer isn't available. Watching something I planned on a whiteboard become an exhibit hundreds of people genuinely enjoyed was one of the most satisfying experiences I've had at UIUC.",
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
		title: "Internship at Care Health Insurance",
		description:
			"Cybersecurity Intern - Applied academic knowledge in a real-world enterprise security environment.",
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
				"Before this internship, cybersecurity was something I understood in theory. I had taken the courses, worked through the labs, and learned the tools. But there's a difference between running Nmap against a practice environment and running it against infrastructure that real people depend on. This internship was where that gap closed.",
				"A lot of what I did early on felt like a translation exercise. The concepts I had studied, network reconnaissance, vulnerability assessment, traffic analysis, were all there, just now with actual stakes. I was scanning real systems, analyzing real traffic in Wireshark, and writing findings that would inform real decisions about the security of their user portal. It made everything I had learned feel suddenly more concrete.",
				"The more interesting growth happened with tools I hadn't touched before. Burp Suite became a daily driver for intercepting and inspecting web application traffic on the portal, helping me spot misconfigurations and probe for vulnerabilities in a way that no classroom exercise had prepared me for. I also got my first serious exposure to mobile security through Frida and JADX, using dynamic instrumentation and static analysis to dig into how their app behaved under the hood. To make that work, I spun up Android virtual machines in QEMU, giving me a controlled, reproducible environment to instrument and decompile the app without touching a physical device. It was a different kind of thinking, patient, methodical, and deeply satisfying when something clicked.",
			],
		},
	},
	{
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
				"During my internship, I had the opportunity to work on several cutting-edge projects at the intersection of computer vision, machine learning, edge computing, and cloud infrastructure. One of my core contributions involved enhancing a YOLO-based real-time detection system to identify fire hazards and human presence in industrial environments. I retrained and fine-tuned the model using custom datasets, ultimately achieving a 13x increase in inference speed and a 62% boost in detection accuracy. I integrated the model into a GStreamer-based video processing pipeline tailored for Orange Pi devices with NPUs, which introduced me to the intricacies of hardware acceleration, low-level optimizations, and deployment on constrained edge devices.",
				"This technical work went hand-in-hand with scalable deployment practices. I containerized the pipeline using Docker, orchestrated services using Kubernetes and Minikube, and managed deployments on Azure, learning how to build resilient, cloud-native systems that could adapt to real-world operational demands. I also collaborated on the development of intelligent traffic routing algorithms by training recurrent neural networks and random forest classifiers to direct vehicles toward weighbridges based on live traffic conditions and equipment throughput, a project that taught me the delicate balance between accuracy, latency, and interpretability in production ML systems.",
				"In parallel, I explored the generative side of AI by fine-tuning image generation models to provide intuitive route visualizations for drivers. This involved careful prompt engineering and model conditioning, improving the clarity and usability of visual instructions under varying real-world lighting and environmental conditions. Additionally, I contributed to the design of a retrieval-augmented generation (RAG) system, helping the team build internal chatbot tools that could synthesize knowledge from large corpora of proprietary company data. This effort honed my skills in natural language processing, search optimization, and user experience.",
				"Beyond the technical achievements, this internship sharpened my problem-solving mindset, deepened my ability to communicate complex ideas across interdisciplinary teams, and cultivated a strong sense of ownership and adaptability. Working in a fast-paced environment taught me how to prioritize ruthlessly, break down large challenges into tractable tasks, and stay grounded in both user needs and system constraints. It was a formative experience that not only strengthened my foundation in applied AI and systems engineering but also expanded my confidence in contributing meaningfully to impactful, real-world solutions.",
			],
		},
	},
	{
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
				"This project sits in the same lineage as my Legacy Laptop work: an old piece of hardware given a second life. After salvaging the Acer Aspire 4736G's LCD panel and learning how LVDS panels communicate at the signal and timing level, I paired the raw screen with an LVDS controller board and Mainframe, my home server Raspberry Pi, to make a purpose-built display for my wall. I named it TPS-L2, after Sony's original 1979 Walkman.",
				"The dashboard is a plain HTML, CSS and JavaScript single-page app on Vercel, with a few serverless functions that keep the Spotify client secret off the device. It shows the current track, album art and playback state with play/pause, skip and volume controls, synced lyrics with automatic scrolling and a plain-lyrics fallback, and Media Session support for hardware keys. A lot of what I listen to isn't in English, so it also romanizes lyrics line by line: Korean through es-hangul, Japanese through Kuroshiro and the Kuromoji analyzer (kanji readings depend on context, so a character map isn't enough), and Chinese into pinyin, each loaded only when a song needs it. With Spotify OAuth, any Spotify user can log in and use it.",
				"The first version ran a minimal X11 session on the Pi, rotated to portrait, with Chromium in kiosk mode, so the display behaved like an appliance. Then I decided to build a second one for my sister on an ESP32 microcontroller, and that exposed the part of the design welded to the browser: the login. Spotify's OAuth ends with typing credentials into a web page, but the panel has no keyboard and an ESP32 has no browser at all. TV apps solve this with a device sign-in, where the screen shows a code and you approve it on your phone, but Spotify doesn't offer one to developers, so I built my own.",
				"It's modeled on the OAuth device flow TVs use. The display shows a QR code with a short code like BXQ7-M4TK. Your phone opens a page that asks you to confirm the code matches your screen, which stops anyone tricking you into linking your account to their display, and then you log in with Spotify as usual. Instead of logging the phone in, the callback parks the refresh token under that display's secret device code for two minutes, and the display, polling in the background, collects it exactly once. Because serverless functions keep no memory, the handoff lives in Upstash Redis, and I designed it to stay on the free tier forever: device codes carry their own expiry and an HMAC signature, so bogus polls are rejected before touching Redis, a real poll costs one atomic GETDEL, and a firewall rule rate-limits the endpoints. My first version would have used up the monthly quota in nine days; now a display left waiting uses about a fifth of it.",
				"I rebuilt the Pi side too: Chromium and X11 gave way to Cog, a minimal WebKit browser that draws straight to the display through DRM/KMS as a systemd service, rotating the picture for the portrait mount and using far less memory on a Pi that also runs my NAS and voice assistant. The result is a clean split. The web UI and the kiosk are just renderers, and anything that can show a QR code and make HTTPS requests can link itself through the same backend. The ESP32 version for my sister will draw its interface natively with LVGL, receive its login as a device token instead of a cookie, and let the server handle the heavy work, all without changing the login flow.",
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
		title: "HackerFab: Student-Built Semiconductor Fab",
		description:
			"Building a student-run photolithography patterning machine, automating a precision wafer stage with stepper motors and grblHAL.",
		modalContent: {
			title: "HackerFab: Fabricating Semiconductors from Scratch",
			skills: ["Collaboration & Teamwork", "Circuit Design", "Python", "C++"],
			description: [
				"Photolithography is the process at the heart of semiconductor fabrication: light transfers a pattern onto a silicon wafer, and it's how every modern chip starts its life. HackerFab is UIUC's attempt to build that process from the ground up, under MicroTech and inspired by CMU's pioneering student fab. I work on the Automation and Mechanical team, which turns a manually operated rig into a precise, programmable machine.",
				"We started with a manually controlled precision stage moving a wafer beneath a UV projector, with a camera to monitor alignment. It worked, but manual control meant inconsistency, and inconsistency in lithography means bad patterns. Before automating anything, we rebuilt the rig vertically, suspending the projector and camera from an aluminum frame so gravity holds the wafer flat instead of adhesive. It removed a source of error before we'd written a line of motor control code.",
				"Then came the motors. We attached steppers to the stage and worked through an Arduino with a CNC shield and an SKR Mini E3 V3.0 before landing on the SKR Pico V1.0, chosen for grblHAL support: a well-documented, tunable motion control foundation we could reason about precisely. We adapted CMU's software stack to our board and coordinate system, and the stage now moves autonomously and repeatably across the full wafer.",
				"Next, the work shifts to the lithography itself: designing real patterns to expose onto the wafer and rigorously benchmarking positional precision, to learn exactly how accurate the automated stage is and what feature sizes we can reliably produce.",
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
				"It started with a familiar frustration: my laptop's webcam and microphone had become unusable for video calls, laggy, grainy and full of static. I could have bought a new webcam, but I already carried an iPhone with world-class imaging and sound hardware. Inspired by Apple's Continuity Camera, I set out to turn it into a wireless webcam and microphone for my Linux laptop, partly to solve the problem and partly because I wanted to learn how real-time communication like FaceTime and Zoom actually works.",
				"WebSockets were too limited for real-time, peer-to-peer media and NAT traversal, so I chose WebRTC, built for low-latency, secure audio and video with ICE, STUN and TURN. My plan was a React Native phone app and a Qt desktop client, but I hit a wall immediately: a WebRTC-enabled React Native app on iOS needs a Mac, Xcode and a paid Apple Developer account. Then I discovered Progressive Web Apps. They sidestep Apple's restrictions, install like apps, and run WebRTC natively in Safari, so I pivoted to a Next.js PWA on the phone and a Python/Qt client on Linux.",
				"For signaling I used Firebase, locked down so only Cloud Functions touch the database and connections require a random, time-limited five-character session code. Then came the hard part. WebRTC is notoriously complex, and I hit every kind of problem: malformed SDP offers, ICE candidates that never gathered, unreachable TURN servers, codec mismatches between phone and desktop, and edge-case bugs that refused to explain themselves. I worked through them with browser consoles, pipeline logs and Wireshark, and for a long time the connection simply failed.",
				"Months later I came back with fresh eyes and rebuilt the pipeline end to end. The desktop client now handles WebRTC with aiortc and feeds the stream into a virtual camera through pyvirtualcam, with audio routed through a PulseAudio null sink and remapped source, so every app sees an ordinary webcam and microphone. And it connected. From there I added a WebRTC data channel so either side can toggle the camera and mic and end the session cleanly, a wake lock so the phone doesn't sleep mid-call, and a long run of fixes for how iOS Safari reports rotation, so the picture stays upright and correctly letterboxed however the phone is held.",
				"RemoteCam now does exactly what I set out to build: my phone is my webcam and microphone. But the real payoff was never just connecting two devices. It was running into the limits of my knowledge, and pushing past them.",
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
				"At the University of Illinois Urbana-Champaign, Sigpwny is one of the largest and most active RSOs dedicated to information security and privacy. For someone with a passion for embedded systems, low-level development, and cybersecurity, being part of this organization has been both inspiring and empowering. Through Sigpwny, I've had the opportunity to connect with brilliant minds, engineers, hackers, and innovators, whose knowledge and creativity have continuously pushed me to grow.",
				"One of the most impactful projects I've worked on is the UIUCTF electronic badge, a DEFCON-style hardware badge built for the Capture the Flag competition we host annually. This year, we're designing a space-themed badge powered by an ESP32, packed with features that foster interactivity, connectivity, and a sense of community among participants. The badge is designed to communicate with others using ESP-NOW and ESP-WIFI-MESH, creating a decentralized and resilient communication network among players. This not only enables dynamic interactions between badges but also aligns with the distributed ethos of CTFs and hacker culture.",
				"As part of the firmware team, I've been responsible for developing the display interface using MicroPython, where I've learned the intricacies of screen rendering, pixel buffers, and color palette optimization at the byte level. Developing within the constraints of MicroPython has challenged me to write highly efficient, memory-aware code that directly interfaces with hardware components over SPI and GPIO.",
				"On the hardware side, I've applied principles from my circuit design coursework to help engineer the badge's PCB layout, gaining practical experience in power delivery management, voltage regulation, and differential signaling. I've worked closely with the team to iterate on schematic design, ensuring stable operation across components, and managing trace impedance for reliable high-speed communication.",
				"This badge isn't just a tool; it's a living, breathing embodiment of our collective creativity and technical skill. From wireless mesh networking to custom display firmware, the project has given me a holistic view of what it means to engineer an embedded system from scratch, blending hardware, firmware, and innovation in every step. I'm incredibly proud to be part of this team and can't wait to see the room light up with hundreds of these badges in action, each one a symbol of curiosity, craft, and community.",
			],
			images: ["/Badge-1.png", "/Badge-2.png", "/Badge-3.png", "/Badge-4.png"],
		},
	},
	{
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
				"I wrote this paper because of a contradiction I kept seeing: society was rapidly digitizing, but authentication still depended on methods that break down under real human behavior. Password fatigue, weak reset flows and theft aren't edge cases anymore; they're the default failure modes. The question I wanted to answer wasn't \"are biometrics cool\" but \"are biometrics a responsible step forward\": where they genuinely improve security and usability, and where they introduce risks people ignore until it's too late.",
				"Writing it forced me to think in tradeoffs instead of slogans. I structured the review around cost of ownership, usability, scalability, security and privacy, which kept me honest, because biometrics don't get to win on security while losing on everything else. A key distinction was between physical biometrics, which rely on physiological identifiers and felt most defensible, and behavioral biometrics, which become harder to trust once you consider how AI changes the threat model.",
				"I also grounded the paper in governance rather than treating biometrics as purely technical. Biometric data can't be casually rotated like a password, which pushed me to emphasize template or hash-based storage over keeping the biometric itself, along with user awareness, consent and transparency.",
				"To keep it tied to high-stakes reality, I looked specifically at online banking. That's where the conclusion became practical: biometrics are valuable on their own, but a layered approach combining biometrics with one-time passwords is the stronger direction for cybersecurity and digital risk management.",
				"It's a review paper, but for me it was also a way to build better security instincts: weighing adoption, privacy and failure modes at the same time, and still arriving at a recommendation that works in the real world.",
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
				"I use WorkFlowy every day to organize ideas, journal, outline projects and brainstorm. The one thing it lacked was instant global access: I didn't want to open WorkFlowy, I wanted to access it from anywhere on my Linux desktop, like muscle memory. I'd used Albert, a blazing-fast keyboard launcher, for years, and realized it could be a structured thought portal for creating, navigating and editing WorkFlowy nodes without touching a browser. There was one problem: WorkFlowy has no public API.",
				"So I went digging. I reverse engineered WorkFlowy's private endpoints by watching the web app's network calls, decoding its operations payloads and replaying requests with my own minimal clients. Unofficial GitHub projects were mostly abandoned, so I stitched together a working CLI from Puppeteer automation and raw HTTP calls, wrapped in Node.js so any operation (create, edit, complete, delete) was a single command.",
				"The other half was Albert's plugin SDK, written in C++ on Qt, with deep capabilities but sparse examples. I read through existing plugins, learned its signals, slots, timers and QProcess quirks, and built a fully asynchronous plugin that fetches, caches and renders my tree as I type. Each node is a selectable item with route-based navigation, tab completion, strikethrough for completed items, and actions like Edit, Remove and Complete. If a node doesn't exist, it offers to create it, updating the cache optimistically and resyncing in a background thread so it stays smooth. I tried fuzzy search too, but left it out because it didn't fit the interaction well.",
				"It's now my daily companion: one key combo, a few characters, and I'm at any node in my knowledge base or writing a new thought in the right place, with no mouse and no app switching. More than a plugin, it was a lesson in reverse engineering, automation, asynchronous programming, and bending rigid systems to fit how I actually work.",
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
				"In the neighborhood where I spent 10th through 12th grade, the tennis, basketball and badminton courts each ran on paper logbooks, and double bookings, no-shows and miscommunication were routine, not from negligence but because the system couldn't scale with the people using it. I ran into it myself trying to book a tennis court after school, and saw a chance not just to digitize the process but to make coordination feel effortless for residents and administrators alike.",
				"I built a full-stack booking system for apartment complexes. The React frontend has calendar-based booking views, time-slot selection and live updates through Axios, and the backend is a Spring Boot REST API with endpoints for creating, viewing, changing and cancelling bookings, role checks and conflict validation. SQLite was the right database for the job: lightweight, easy to deploy, fine without heavy concurrency, and simple enough to iterate on quickly, with a schema of users, bookings, courts and time slots.",
				"The key design decision was how to handle availability. Instead of pre-generating and storing every possible slot, the system computes them on request from admin-defined opening hours and booking durations, then filters out ones already taken. It stored far less, made changes instant, and kept the interface responsive. Every booking also triggers a confirmation email with the court, date and time.",
				"Residents got a simple interface, while admins got a separate dashboard to see every booking across all courts, override schedules, and change hours, default durations and which courts are available.",
				"The project gave me something no tutorial could: an end-to-end look at solving a real problem for real people, from gathering requirements from non-technical users to building the API, connecting the layers securely, and designing an interface that works in daily life.",
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
				"Uplift was born at a hackathon from a simple, human idea: sometimes you want to help someone who's hurting, but you don't know what to say. You take a screenshot of the conversation, choose the tone you want (comfort, advice or validation), and get suggested replies. The goal wasn't to replace human empathy but to amplify it, helping people find their voice when it matters most.",
				"It was my first time with React Native, but coming from React I picked it up quickly. OCR was harder. We used Tesseract.js to pull text from screenshots, but lighting, font rendering and compression artifacts often produced noisy or partial text, so we added preprocessing and error handling, and used message bubble colors to tell which person sent each message.",
				"With clean text, we used LangChain and OpenAI to generate suggestions, which was a crash course in prompt engineering: separate prompts per tone, and carefully tuned few-shot examples to teach the difference between advice and empathy, or encouragement and simply being there. It showed me how powerful language models are, and how deliberately they need to be used when someone is in a vulnerable moment.",
				"It was also my first real lesson in mobile UI/UX. Designing for emotion isn't like designing for function; it's about softness, clarity and ease, so we spent hours on padding, typography and button placement, because in a stressful moment even small friction breaks the experience.",
				"Building it overnight as a team taught me what fast engineering collaboration feels like: dividing work, merging different levels of experience, trusting each other's instincts, and adapting when plans changed, all against the deadline.",
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
				"Keeping an online résumé current usually means juggling downloads, file moves and redeploys. I wanted that boiled down to one command. The first version used a Google Cloud service account to export my résumé Google Doc as a PDF and push it to my portfolio. As my résumé grew more complex, Google Docs got in the way, so I moved to LaTeX for full control over formatting and rewrote the fetcher around it.",
				"The current script takes the compiled PDF from my LaTeX repository and copies it into my job documents, onto my home NAS, and into my portfolio's public folder. It then runs a production build, commits with a conventional chore message, and pushes to GitHub, which kicks off the site's deployment. A shell alias, rupd, wraps it all, so from any terminal my résumé and portfolio are in sync within minutes.",
				"Copying individual sections of my résumé into application forms got exhausting too, so I built a PyQt5 Résumé Viewer. It parses my résumé into a collapsible tree, and clicking any heading or bullet copies its text to the clipboard.",
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
		title: "Reverse Engineering a Legacy Laptop",
		description:
			"Disassembled an Acer Aspire 4736G and working to repurpose components such as battery, fan, LCD screen, keyboard, trackpad, and fingerprint reader.",
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
				"This laptop has been part of our family for nearly two decades. It ran homework, streamed movies, and powered my first lines of code, and it evolved alongside me: a home server on Ubuntu, a Kodi media center, a Kali Linux pentesting lab, even a virtualized home lab on a Type-1 hypervisor. In 11th grade, purely out of curiosity, I took it apart down to the last screw, not to repair it but to understand what made it tick. Now, with little use for it as a whole, I've returned to give its parts new life.",
				"It began with the fan, which I repurposed as active cooling for my Raspberry Pi. From there I dug into schematics and datasheets, traced the motherboard layout, and tested signals and voltages with a multimeter to decode how each subsystem talks. Through probing and reasoning, I worked out that the fingerprint sensor communicated over 3V USB, an inference grounded in electrical behavior and datasheet breadcrumbs rather than a guess.",
				"The LCD uses LVDS (Low Voltage Differential Signaling), common in older display hardware. I paired it with a third-party controller board to turn it into a display for my Raspberry Pi, which became my wall-mounted Spotify display, TPS-L2. It wasn't plug-and-play; it was research, solder, test, fail, repeat.",
				"The stereo speakers found a second life too. Using op-amp circuits from my ECE 110 course, I first built an amplifier around an LM358. It worked, barely: faint, distorted and underpowered. So I moved to an LM386-based module wired to a salvaged 3.5mm jack from broken earbuds, and got a compact speaker that plays music from my Pi with real clarity and volume.",
				"Every component is a puzzle, and each teaches me how signals propagate and how standards like I²C, LVDS and USB show up in real hardware. In a world obsessed with the new, I'm finding wonder in the old: not just recycling it, but reverse engineering and rebuilding it, piece by piece.",
			],
		},
	},
	{
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
				"It started, as many things in college do, with a lost remote. In the chaos of freshman move-out, the controller for the LED strip under my bed vanished, leaving it as decorative wire. I could have ordered a replacement, but the challenge was too tempting: what if I could build something better, controlled by the internet, by code, by me?",
				"The first prototype was pragmatic: a Raspberry Pi driving three MOSFETs with PWM from its GPIO pins, since the Pi's 3.3V can't drive a 12V strip directly. I wrote a Flask app to control it over the local network and containerized it with Docker, and within hours I could set the room's lighting from a browser. To make it feel like a product, I persisted the last color, brightness and mode to JSON, so after a power cut the lights came back exactly as I'd left them.",
				"Then I wanted real smart home integration, which led me to MQTT, the lightweight publish/subscribe protocol behind a lot of IoT. I moved LED control to an ESP32 and turned the Pi into the MQTT broker running DietPi, configured as its own Wi-Fi access point, which also got around my apartment network that made connecting IoT devices nearly impossible. The ESP32 subscribed to lighting commands, the Flask interface became just one of many publishers, my Echo Show gained voice control of the lights, and the ESP32 persisted its state to flash so every setting survived reboots.",
				"Next I tried to move it to Matter, the new cross-vendor smart home standard backed by Apple, Google and Amazon. I cloned bleeding-edge repositories and fought gn, ninja and idf.py through cross-compilation, dependency loops, version mismatches and unresolved symbols. In the end, Matter never worked on my hardware in the time I had.",
				"That failure wasn't a dead end. I didn't just read about protocols, I implemented them; I designed for security, and I saw firsthand how fragile modern ecosystems are and how much complexity hides behind turning on a light. The lost remote was never the real problem. The real problem was that I couldn't leave a broken system alone, and the real victory was that I never stopped trying to fix it.",
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
				"After finishing my cybersecurity certification, I understood how vulnerable our digital lives really are, and how little of that knowledge reaches the people who need it most: not developers, but students, parents and friends navigating the internet on instinct and luck. So I built Cyber Awareness, a responsive, interactive website that explains essential security concepts to the general public in a way that's engaging, non-intimidating and practical.",
				"It was my first interactive website, and I deliberately avoided frameworks: no React, no Bootstrap, just HTML, CSS and JavaScript, to learn the fundamentals of semantic markup, reusable and accessible components, and interactivity without abstractions. I designed it in Figma first, mobile-first, with a palette that felt secure without being cold, and card-based lessons with expandable sections, tooltips and light animations.",
				"The JavaScript layer was where I learned the most: dynamic navigation, adaptive spacing, interactive activities, and a lightweight quiz with instant feedback, which taught me to handle DOM events cleanly, debounce input, and keep code modular without a framework. The layout itself was plain CSS with flexbox and media queries, built to degrade gracefully across screen sizes.",
				"One of my favorite parts was writing the content. Translating multi-factor authentication, ransomware and public-key encryption into everyday language was an exercise in empathy: understanding what someone who doesn't know needs to hear first, leading with stories, and respecting their intelligence without assuming technical literacy.",
				"Teaching forced me to understand what I'd learned, not just repeat it. The site became a statement of intent: learning is only useful when it's shared, and I want to build secure systems and help people protect themselves.",
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
				"Passwords are the front line of digital security, yet most people use them without knowing how they fail. After completing a cybersecurity certification, I wanted to answer a deceptively simple question: does leet speak, swapping letters for symbols or numbers, actually make passwords more secure? Common wisdom said it could trick strength meters while keeping passwords memorable, but that seemed too easy, so I set out to measure it.",
				"I started from a filtered version of Daniel Miessler's well-known password list, removing numeric-only entries, and wrote a Python script that leet-ified each password using a weighted character map, so substitutions were inconsistent the way real users make them. I then evaluated both sets three ways: Dropbox's zxcvbn for strength scores and estimated crack times, a custom entropy calculator for a theoretical view, and a real attack, hashing every password with SHA-1 and running Hashcat against them.",
				"The results were a surprise. Leet passwords often scored higher on entropy, but zxcvbn consistently rated them lower than the originals, and in the Hashcat attack, the most realistic test, the difference in crack rate was statistically insignificant. Cracking tools already understand our substitutions through pattern dictionaries and targeted heuristics, so leet speak may fool a meter but not an attacker. It's closer to security theater than security.",
				"I wrote every line of Python and ran every test myself, and published the paper in the International Journal of Scientific Research in Science and Technology under the guidance of a professor at Shobhit University.",
				"More than the result, it taught me to think like an adversary: to break a security claim down, test it rigorously, and separate myth from reality. That mindset is what I carry from it.",
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
