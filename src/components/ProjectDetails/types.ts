export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface ProjectDates {
  startDate: string;
  endDate: string;
}

export interface CodeBlockProps {
  language: string;
  value: string;
}

export interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export interface DateDisplayProps {
  dates: ProjectDates;
}
