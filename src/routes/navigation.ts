import { LayoutDashboard, BookOpen, Settings, type LucideIcon, LampDesk } from 'lucide-react';
import { PATHS } from './paths';

export interface DataMenu  {
  name: string;
  icon: LucideIcon;
  href?: string;
  isSubmenu?: boolean;
  children?: {
    name: string;
    href: string;
  }[];
}

export const MENU_ITEMS: DataMenu[] = [
  { 
    name: 'Inicio', 
    icon: LayoutDashboard, 
    href: PATHS.HOME
  },
  {
    name: 'Proyecto 1',
    icon: LampDesk,
    href: PATHS.PROJECT_ONE
  },
  { 
    name: 'Demos', 
    icon: BookOpen,
    isSubmenu: true,
    children: [
      { name: 'CryptoPulse', href: PATHS.DEMO_1 },
      { name: 'JobMatch', href: PATHS.DEMO_2 },
    ]
  },
  { 
    name: 'Ajustes', 
    icon: Settings,
    href: PATHS.SETTINGS 
  },
];