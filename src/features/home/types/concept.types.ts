import type { LucideIcon } from "lucide-react";

export type ConceptDifficulty = 'basic' | 'intermediate' | 'advanced';

export interface ConceptItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  level: ConceptDifficulty;
}

export interface ConceptLevel {
  id: ConceptDifficulty;
  title: string;
  icon: LucideIcon;
  description: string;
  items: ConceptItem[];
}