interface Translation {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  home: {
    greeting: string;
    sequences: string[];
    roles: string[];
    description: string;
    cta: string;
  };
  about: {
    title: string;
    role: string;
    location: string;
    summary: string;
    skills: string;
    experience: string;
    education: string;
    projects: string;
  };
  projects: {
    title: string;
    description: string;
    viewDetails: string;
    viewDemo: string;
    viewGithub: string;
    categories: {
      all: string;
      web: string;
      mobile: string;
      ai: string;
      devops: string;
    };
    sortBy: string;
    search: string;
    noResults: string;
    projects: Array<{
      title: string;
      description: string;
      technologies: string[];
      features: string[];
    }>;
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
    period: string;
    location: string;
    description: string;
    achievements: string[];
  }>;
}

export const translations: Record<"en" | "fr", Translation> = {
  en: require("./translations/en.json"),
  fr: require("./translations/fr.json"),
};
