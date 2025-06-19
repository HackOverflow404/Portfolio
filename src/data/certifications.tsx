type Certification = {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  link?: string;
};

const certifications: Certification[] = [
  {
    title: "NYUx MicroBachelors Certification in Cybersecurity Fundamentals",
    issuer: "NYUx",
    date: "June 2022 - April 2023",
    description: "Completed 9-course program (A grade) covering auth/access control, network security, and penetration testing",
  },
];

export default certifications;