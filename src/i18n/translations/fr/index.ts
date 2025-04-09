import { education } from "./education.ts";
import { experiences } from "./experiences";
import { projects } from "./projects";
import { Translation } from "../type";

const fr: Translation = {
  nav: {
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
  },
  home: {
    greeting: "Bonjour, je suis",
    buttons: {
      viewProjects: "Voir mes projets",
      contactMe: "Contactez-moi",
    },
    expertise: {
      title: "Domaines de compétence",
      items: [
        {
          title: "DevOps & Cloud",
          icon: "cloud",
          description:
            "Expert en Kubernetes, Docker, Terraform et pipelines CI/CD. Spécialisé dans l'infrastructure cloud et les solutions automatisées.",
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
          title: "Développement logiciel",
          icon: "code",
          description:
            "Développement full-stack avec des technologies modernes. Création d'applications web réactives et performantes.",
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
          title: "Développement mobile",
          icon: "devices",
          description:
            "Développement d'applications mobiles natives et hybrides. Création d'applications performantes et natives pour iOS et Android.",
          skills: ["Flutter", "Dart", "Kotlin", "React Native", "Mobile UI/UX"],
        },
      ],
    },
    description:
      "Passionné par le développement de solutions innovantes et l'automatisation des processus. Spécialisé dans le développement web, le DevOps et l'IA.",
    cta: "Voir mes projets",
    roles: ["Ingénieur DevOps", "Développeur Full Stack"],
    sequences: [
      "Je crée des applications web",
      "Je développe des applications mobiles",
      "Je construis des solutions de monitoring",
      "Je mets en place des solutions automatisées",
      "Je conçois des solutions innovantes",
    ],
  },
  about: {
    title: "À propos de moi",
    role: "Ingénieur DevOps & Développeur Full Stack",
    location: "Paris, France",
    professionalSummary: "Introduction",
    summaryText:
      "Ingénieur DevOps passionné avec une solide expérience dans le développement web et l'automatisation. Spécialisé dans la création de solutions évolutives et l'optimisation des processus de développement.",
    skills: "Compétences",
    experience: "Expérience",
    education: "Formation",
    projects: "Projets",
  },
  contact: {
    title: "Contactez-moi",
    description:
      "N'hésitez pas à me contacter pour discuter de projets ou d'opportunités.",
    name: "Nom",
    email: "Email",
    message: "Message",
    send: "Envoyer",
    success: "Message envoyé avec succès!",
    error: "Une erreur est survenue. Veuillez réessayer.",
  },
  experiences: experiences,
  projects: {
    title: "Mes Projets",
    placeholder:
      "Rechercher un projet par titre, description, technologies ou fonctionnalités...",
    results: {
      projects: "projet",
      found: "trouvés",
    },
    categories: {
      all: "Tous",
      web: "Web",
      mobile: "Mobile",
      ai: "IA",
      devops: "DevOps",
      security: "Sécurité",
    },
    sortBy: {
      newest: "Nouveau",
      oldest: "Ancien",
    },
    search: "Rechercher un projet",
    noResults: "Aucun projet trouvé",
    demo: "Démo",
    code: "voir le code",
    resume: projects,
  },
  footer: {
    quickLinks: "Liens rapides",
  },
  education: education,
  notFound: {
    title: "Oops! Page non trouvée.",
    description:
      "La page que vous cherchez peut avoir été supprimée, renommée ou être temporairement indisponible. Vérifiez l'URL ou essayez de rechercher autre chose.",
    backToHome: "Retour à l'accueil",
  },
};

export default fr;
