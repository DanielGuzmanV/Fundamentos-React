import { Link } from "react-router-dom";
import type { DataMenu } from "../../../routes/navigation";

interface NavItemProps {
  item: DataMenu;
  isActive: boolean;
  onClick: ()=> void;
}

export const NavItem = ({item, isActive, onClick}: NavItemProps) => {
  const  Icon = item.icon;

  return(
    <Link
      to={item.href || "#"}
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg font-medium transition-colors ${
        isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      <Icon size={20}/>
      <span>{item.name}</span>
    </Link>
  )
}