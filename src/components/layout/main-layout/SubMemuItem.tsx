import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from 'lucide-react';
import type { DataMenu } from "../../../routes/navigation";
import { getSidebarLinkClasses } from "./utils/sidebarLinkStyles";

interface SubMenuItemProps {
  item: DataMenu;
  onClose: () => void;
}

export const SubMenuItem = ({ item, onClose }: SubMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // Validación: Si no hay children, no renderizar nada
  if (!item.children || item.children.length === 0) {
    return null;
  }

  const Icon = item.icon;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 text-gray-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <Icon size={20} />
          <span>{item.name}</span>
        </div>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="ml-9 flex flex-col border-l border-gray-100">
          {item.children.map((sub) => {
            const isActiveChild = location.pathname === sub.href;
          
            return (
              <Link
                key={sub.href}
                to={sub.href}
                onClick={onClose}
                className={`mb-2 pl-4 text-sm rounded-lg ${getSidebarLinkClasses(isActiveChild)}`}
                aria-current={isActiveChild ? 'page' : undefined} // Accesibilidad
              >
                {sub.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  );
};