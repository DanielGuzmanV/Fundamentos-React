import { ArrowLeft, Menu } from "lucide-react"
import { useNavigate } from "react-router-dom";

interface Props {
  isSubscreen: boolean;
  setIsSidebarOpen: ()=> void;
  title: string;
}

export const HeaderMobile = ({isSubscreen, setIsSidebarOpen, title}: Props) => {
  const navigate = useNavigate();

  return (
    <header className="lg:hidden flex items-center gap-2 p-2 bg-white border-b border-gray-200">
      {isSubscreen? (
        <button 
          onClick={() => navigate(-1)} 
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Volver atrás"
        >
          <ArrowLeft size={24} />
        </button>
      ) : (
        <button onClick={setIsSidebarOpen} className="p-2 text-gray-600">
          <Menu size={24} />
        </button>
      )}
      <span className='font-bold text-lg'>{title}</span>
    </header>
  )
}