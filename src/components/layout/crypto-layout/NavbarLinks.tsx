import { NavLink } from 'react-router-dom';
import { CRYPTO_NAV_LINKS } from '../../../features/demo-crypto/crypto-app/constants/navigation';

interface Props {
  onLinkClick?: () => void; // Para cerrar el menú móvil al hacer click
  isMobile?: boolean;
}

export const NavbarLinks = ({ onLinkClick, isMobile = false }: Props) => {
  
  // Estilos base para los enlaces
  const baseStyles = "flex items-center gap-2 font-medium transition-all duration-200";
  
  // Función para determinar las clases dependiendo de si el link está activo
  const getLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return `
      ${baseStyles} 
      ${isActive 
        ? "text-blue-600 bg-blue-50 lg:bg-transparent lg:text-blue-600" 
        : "text-slate-500 hover:text-blue-500 hover:bg-slate-50 lg:hover:bg-transparent"}
      ${isMobile ? "p-3 rounded-xl w-full" : "text-sm"}
    `;
  };

  return (
    <>
      {CRYPTO_NAV_LINKS.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onLinkClick}
          className={getLinkStyles}
          end // 'end' asegura que solo esté activo si la ruta coincide exactamente
        >
          <link.icon size={isMobile ? 22 : 18} />
          <span>{link.label}</span>
        </NavLink>
      ))}
    </>
  );
};