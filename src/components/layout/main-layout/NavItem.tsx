import { Link, useLocation } from "react-router-dom";
import type { DataMenu } from "../../../routes/navigation";
import { getSidebarLinkClasses } from "./utils/sidebarLinkStyles";

interface NavItemProps {
  item: DataMenu;
  onClose: ()=> void;
}

export const NavItem = ({item, onClose}: NavItemProps) => {
  const  Icon = item.icon;
  const location = useLocation();

  const isActive = location.pathname === item.href;

  return(
    <Link
      to={item.href || "#"}
      onClick={onClose}
      className={getSidebarLinkClasses(isActive)}
    >
      <Icon size={20}/>
      <span>{item.name}</span>
    </Link>
  )
}