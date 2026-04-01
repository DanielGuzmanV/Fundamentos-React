import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from 'lucide-react';
import type { DataMenu } from "../../../routes/navigation";

interface SubMenuItemProps {
  item: DataMenu;
  onClose: () => void;
  getActiveClass: (path: string) => string;
}

export const SubMenuItem = ({ item, onClose, getActiveClass }: SubMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // Validación: Si no hay children, no renderizar nada
  if (!item.children || item.children.length === 0) {
    return null;
  }

  const Icon = item.icon;

  return (
    <div key={item.name}>
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
        <div className="ml-9 mt-1 flex flex-col border-l border-gray-100">
          {item.children.map((sub) => (
            <Link
              key={sub.href}
              to={sub.href}
              onClick={onClose}
              className={`p-2 mb-2 pl-4 text-sm rounded-lg ${getActiveClass(sub.href)}`}
              aria-current={getActiveClass(sub.href).includes('bg-indigo-50') ? 'page' : undefined} // Accesibilidad
            >
              {sub.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};