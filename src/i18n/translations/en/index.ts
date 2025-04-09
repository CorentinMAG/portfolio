import { education } from "./education.ts";
import { experiences } from "./experiences.ts";
import { projects } from "./projects.ts";
import { Translation } from "../type.ts";

const en: Translation = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  home: {
    greeting: "Hi, I'm",
    buttons: {
      viewProjects: "View my Work",
      contactMe: "Contact me",
    },
    expertise: {
      title: "Areas of Expertise",
      items: [
        {
          title: "DevOps & Cloud",
          icon: "cloud",
          description:
            "Expert in Kubernetes, Docker, Terraform and CI/CD pipelines. Specialized in cloud infrastructure and automation solutions.",
          skills: [
            "Kubernetes",
            "Docker",
            "Terraform",
            "Ansible",
            "CI/CD",
            "Cloud",
          ],
        },
        {
          title: "Software Development",
          icon: "code",
          description:
            "Full-stack development with modern technologies. Creating responsive and performant web applications.",
          skills: [
            "React",
            "Node.js",
            "TypeScript",
            "Python",
            "Django",
            "REST APIs",
          ],
        },
        {
          title: "Mobile Development",
          icon: "devices",
          description:
            "Building mobile applications using Flutter and Dart. Specialized in creating cross-platform solutions.",
          skills: ["Flutter", "Mobile", "Cross-platform", "React Native"],
        },
      ],
    },
    description:
      "Passionate about developing innovative solutions and automating processes. Specialized in web development, DevOps, and AI.",
    cta: "View my projects",
    roles: ["DevOps engineer", "Software engineer"],
    sequences: [
      "I create web applications",
      "I develop mobile applications",
      "I build monitoring solutions",
      "I implement automated solutions",
      "I design innovative solutions",
    ],
  },
  about: {
    title: "About Me",
    role: "DevOps Engineer & Full Stack Developer",
    location: "Paris, France",
    professionalSummary: "Professional Summary",
    summaryText:
      "Passionate DevOps engineer with solid experience in web development and automation. Specialized in creating scalable solutions and optimizing development processes.",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
  },
  contact: {
    title: "Contact Me",
    description: "Feel free to reach out to discuss projects or opportunities.",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    success: "Message sent successfully!",
    error: "An error occurred. Please try again.",
  },
  experiences: experiences,
  projects: {
    title: "My Projects",
    placeholder:
      "Search projects by title, description, technologies, or features...",
    results: {
      projects: "project",
      found: "found",
    },
    categories: {
      all: "All",
      web: "Web",
      mobile: "Mobile",
      ai: "AI",
      devops: "DevOps",
      security: "Security",
    },
    sortBy: {
      newest: "Newest",
      oldest: "Oldest",
    },
    search: "Search projects",
    noResults: "No projects found",
    demo: "Live Demo",
    code: "View Code",
    resume: projects,
  },
  footer: {
    quickLinks: "Quick Links",
  },
  education: education,
  notFound: {
    title: "Oops! Page not found.",
    description:
      "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Check the URL or try searching for something else.",
    backToHome: "Go to Home",
  },
};

export default en;
