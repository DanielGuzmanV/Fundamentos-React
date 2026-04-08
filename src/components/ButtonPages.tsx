import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

interface Props {
  pathname: string;
  titleLink: string;
}

export const ButtonPages = ({pathname, titleLink}: Props) => {
  return (
    <Link
      to={pathname}
      className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white whitespace-nowrap px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-900/20"
    >
      <span>{titleLink}</span>
      <ArrowRight className="group-hover:translate-x-1 transition-transform shrink-0" size={20} />
    </Link>
  )
}