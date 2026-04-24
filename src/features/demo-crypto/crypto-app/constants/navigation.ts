import { LayoutDashboard, BarChart2, Briefcase } from 'lucide-react';
import { PATHS } from '../../../../routes/paths';

export const CRYPTO_NAV_LINKS = [
  { label: 'Dashboard', path: PATHS.CRYPTO_APP, icon: LayoutDashboard },
  { label: 'Mercados', path: PATHS.CRYPTO_MARKETS, icon: BarChart2 },
  { label: 'Portafolio', path: PATHS.CRYPTO_PORTFOLIO, icon: Briefcase },
];