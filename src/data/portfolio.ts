import type { LucideIcon } from "lucide-react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  FileText,
} from "lucide-react";

/**
 * =============================================================
 *  SINGLE SOURCE OF TRUTH FOR PORTFOLIO CONTENT
 *  Update anything here and the whole site updates.
 *  NOTE: A few external URLs (Naukri, Credly badges) are best
 *  guesses / placeholders — replace them with your real links.
 * =============================================================
 */

export const profile = {
  name: "Pratik Kore",
  role: "Senior Full-Stack Developer",
  tagline: "Java • React.js • Microservices • Cloud",
  location: "Pune, Maharashtra 411028, India",
  email: "mr.pratikore87@gmail.com",
  phone: "+91 97304 11764",
  phoneRaw: "+919730411764",
  avatar: "/profile.png",
  resume: "/Pratik_Kore_Resume.pdf",
  summary:
    "Java developer with 4.2+ years of experience building enterprise solutions and microservices for global telecom leaders across Australia, Ireland and Bulgaria. Promoted to Software Developer in just 18 months for outstanding technical and leadership abilities. I engineer robust CI/CD pipelines with Jenkins & Maven and have elevated software reliability with a 25% boost in bug detection.",
  highlights: [
    { value: "4.2+", label: "Years Experience" },
    { value: "25%", label: "Performance Boost" },
    { value: "4x", label: "Cloud Certified" },
    { value: "10+", label: "Cross-functional Teams" },
  ],
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  handle: string;
};

export const socials: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pratik-kore-pk",
    icon: Linkedin,
    handle: "in/pratik-kore-pk",
  },
  {
    label: "GitHub",
    href: "https://github.com/Pratikore",
    icon: Github,
    handle: "@Pratikore",
  },
  {
    label: "Naukri",
    href: "https://www.naukri.com/mnjuser/profile",
    icon: Briefcase,
    handle: "Naukri Profile",
  },
  {
    label: "Email",
    href: "mailto:mr.pratikore87@gmail.com",
    icon: Mail,
    handle: "mr.pratikore87@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+919730411764",
    icon: Phone,
    handle: "+91 97304 11764",
  },
  {
    label: "Location",
    href: "https://maps.google.com/?q=Pune,Maharashtra,India",
    icon: MapPin,
    handle: "Pune, India",
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Developer",
    company: "Amdocs",
    period: "May 2022 — Present",
    location: "Pune, India",
    points: [
      "Earned promotion within 1.5 years to Software Developer, driven by strong performance, a quick learning curve, and effective collaboration.",
      "Designed and delivered scalable templates and reusable components for enterprise solutions, supporting telecom leaders like Optus, Vodafone Ireland and PPF — reducing development time by 20%.",
      "Modernized Amdocs' flagship MCO application, improving system performance by 25%.",
      "Migrated the platform to microservices and cloud-native architecture, enhancing deployment speed and reliability.",
      "Collaborated with 10+ cross-functional teams in Scrum Agile to ensure seamless integration and delivery.",
      "Engaged in Agile ceremonies — sprint planning, code reviews and retrospectives — refining code quality and reducing post-release bugs by 15%.",
    ],
    tech: ["React.js", "Next.js", "Java", "Microservices", "Jenkins", "Maven", "JIRA"],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  points: string[];
  tech: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Amdocs MCO — Mass Change Orchestration",
    subtitle: "Telecom Solutions · UI Development & Production Optimization",
    period: "May 2022 — Present",
    description:
      "Led production for telecom clients across Australia, Ireland and Bulgaria — ensuring system stability, rapid issue resolution and high availability during early deployment.",
    points: [
      "Built and developed user interfaces for MCO, Amdocs' flagship product, using React.js and Next.js — enhancing responsiveness and user experience.",
      "Led optimization efforts with client-tailored solutions, delivering a 20% increase in operational efficiency and a 20% boost in user adoption.",
      "Delivered features ahead of sprint deadlines under strict timelines, improving release velocity and client satisfaction.",
      "Resolved production bugs and performance issues, achieving a 25% improvement in system efficiency and reduced downtime.",
    ],
    tech: [
      "React.js",
      "Java",
      "JavaScript",
      "MySQL",
      "REST APIs",
      "Microservices",
      "Maven",
      "Jenkins",
      "JUnit/Mockito",
    ],
    featured: true,
  },
  {
    title: "Online Movie Ticket Booking System",
    subtitle: "Full-Stack Web Application",
    period: "Jan 2022 — Mar 2022",
    description:
      "Engineered a full-stack booking solution that increased software efficiency by 20%, with scalable data management powered by RESTful APIs and MySQL.",
    points: [
      "Built a responsive front-end with React.js and a robust Spring Boot back-end.",
      "Integrated RESTful APIs with MySQL for scalable, reliable data management.",
      "Applied JPA for clean persistence and tested endpoints with Postman.",
    ],
    tech: ["Java", "React.js", "Spring Boot", "MySQL", "REST API", "JPA", "AWS", "Git"],
    link: "https://github.com/Pratikore/Movie_Ticket_Booking_Project",
    featured: true,
  },
];

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "React.js", "HTML/CSS", "MySQL", "Unit Testing"],
  },
  {
    category: "Frameworks & APIs",
    skills: [
      "Spring Boot",
      "REST APIs",
      "Hibernate/JPA",
      "Spring MVC",
      "Spring Security",
      "Node.js",
    ],
  },
  {
    category: "Tools & Technology",
    skills: ["Maven", "Git", "JIRA", "Octane", "Postman"],
  },
  {
    category: "Cloud / DevOps",
    skills: [
      "Kubernetes",
      "Docker",
      "CI/CD",
      "Jenkins",
      "AWS (EC2, S3, Lambda)",
      "Kafka",
    ],
  },
  {
    category: "Core Concepts",
    skills: [
      "Microservices",
      "OOP",
      "SOLID",
      "Agile / Scrum",
      "SDLC",
    ],
  },
];

export type Certification = {
  name: string;
  code: string;
  issuer: string;
  date: string;
  credlyUrl: string;
  brand: "aws" | "kubernetes";
};

export const certifications: Certification[] = [
  {
    name: "Certified Kubernetes Application Developer (CKAD)",
    code: "CKAD",
    issuer: "The Linux Foundation",
    date: "Jan 2026",
    credlyUrl:
      "https://www.credly.com/badges/29abf6a6-65db-47be-ad56-c6734f8538ec/public_url",
    brand: "kubernetes",
  },
  {
    name: "AWS Certified AI Practitioner",
    code: "AIF-C01",
    issuer: "Amazon Web Services",
    date: "May 2025",
    credlyUrl:
      "https://www.credly.com/badges/3889574d-5bd9-4850-85d6-461e3be1ea89/public_url",
    brand: "aws",
  },
  {
    name: "AWS Certified Developer — Associate",
    code: "DVA-C02",
    issuer: "Amazon Web Services",
    date: "Apr 2025",
    credlyUrl:
      "https://www.credly.com/badges/9d80c66d-a9e5-4f83-87ad-b86c2f338bdd/public_url",
    brand: "aws",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    code: "CLF-C02",
    issuer: "Amazon Web Services",
    date: "Feb 2025",
    credlyUrl:
      "https://www.credly.com/badges/7356ec2e-a3d6-43a9-96dd-1cfda7ec862f/public_url",
    brand: "aws",
  },
];

export type Education = {
  degree: string;
  institution: string;
  period: string;
  location: string;
};

export const education: Education[] = [
  {
    degree: "PG-Diploma in Advanced Computing (PG-DAC)",
    institution: "Centre for Development of Advanced Computing (C-DAC)",
    period: "Sep 2021 — Apr 2022",
    location: "Pune, India",
  },
  {
    degree: "Bachelor of Engineering",
    institution: "JSPM's Rajarshi Shahu College of Engineering",
    period: "Jul 2017 — Jul 2020",
    location: "Pune, India",
  },
];

export const resumeIcon: LucideIcon = FileText;
