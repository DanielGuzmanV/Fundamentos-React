import { ChevronRight} from "lucide-react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface HeaderDesktopWeb {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  isSubscreen?: boolean;
}

export const HeaderDesktopWeb = ({title, breadcrumbs = [], isSubscreen = false}: HeaderDesktopWeb) => {

  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 py-4">
      {isSubscreen && breadcrumbs.length > 0 ? (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">

          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-gray-400" />
                {isLast || !item.href ? (
                  <span className="text-xl font-semibold text-gray-900">{item.label}</span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-xl font-semibold transition-colors hover:text-indigo-600"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      ) : (
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      )}
    </header>
  )

}