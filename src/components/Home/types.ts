import { ReactNode } from "react";

export interface ExpertiseItem {
  icon: string;
  title: string;
  description: string;
  skills: string[];
}

export interface StatItem {
  icon: ReactNode;
  value: string;
  label: string;
}

export interface ExpertiseCardProps {
  item: ExpertiseItem;
  index: number;
}

export interface StatCardProps {
  item: StatItem;
  delay?: number;
}
