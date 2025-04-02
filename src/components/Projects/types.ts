import { ReactNode } from "react";

export enum Categories {
  ALL = "all",
  WEB = "web",
  MOBILE = "mobile",
  DEV_OPS = "devops",
  SECURITY = "security",
  AI = "ai",
}

export interface Project {
  title: string;
  description: string;
  image: string;
  date: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo: string;
  category: Categories;
  enabled: boolean;
  wip?: boolean;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CategoryFilterProps {
  selectedCategory: string;
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newCategory: string | null
  ) => void;
}

export interface SortOrderProps {
  sortOrder: "newest" | "oldest";
  onChange: (
    event: React.MouseEvent<HTMLElement>,
    newOrder: "newest" | "oldest" | null
  ) => void;
}

export interface PaginationProps {
  totalPages: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}
