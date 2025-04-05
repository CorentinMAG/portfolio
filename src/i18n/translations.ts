interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  home: {
    greeting: string;
    buttons: {
      viewProjects: string;
      contactMe: string;
    };
    expertise: {
      title: string;
      items: string[];
    };
    sequences: string[];
    roles: string[];
    description: string;
    cta: string;
  };
  about: {
    title: string;
    role: string;
    location: string;
    professionalSummary: string;
    summaryText: string;
    skills: string;
    experience: string;
    education: string;
    projects: string;
  };
  contact: {
    title: string;
    description: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
    error: string;
  };
  experiences: Array<{
    title: string;
    company: string;
    icon: string;
    period: string;
    location: string;
    description: string;
    achievements: string[];
  }>;
  projects: {
    title: string;
    placeholder: string;
    results: {
      projects: string;
      found: string;
    };
    categories: {
      all: string;
      web: string;
      mobile: string;
      ai: string;
      devops: string;
      security: string;
    };
    sortBy: {
      newest: string;
      oldest: string;
    };
    search: string;
    noResults: string;
    demo: string;
    code: string;
    resume: Array<{
      title: string;
      description: string;
      technologies: string[];
      image: string;
      demo: string;
      category: string;
      date: string;
      enabled: boolean;
      wip: boolean;
      features: string[];
    }>;
  };
  footer: {
    quickLinks: string;
  };
  education: {
    title: string;
    degree: string;
    location: string;
    period: string;
    description: string;
  };
  notFound: {
    title: string;
    description: string;
    backToHome: string;
  };
}
export const translations: Record<"en" | "fr", Translation> = {
  en: require("./translations/en.json"),
  fr: require("./translations/fr.json"),
};
