import { useLocation } from "react-router-dom"
import { MENU_ITEMS } from "../routes/navigation";

export const useActiveTitle = () => {
  const location = useLocation();

  const activeItem = MENU_ITEMS.find(item => item.href === location.pathname);
  if(activeItem) return activeItem.name;

  for(const item of MENU_ITEMS) {
    if(item.isSubmenu && item.children) {
      return 'Demos de Prueba';
    }
  }

  return "Dashboard";
}