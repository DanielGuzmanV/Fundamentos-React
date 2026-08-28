import { FileCode2 } from "lucide-react"

interface Props {
  title?: string;
  description?: string;
}

export const NotFoundComponent = ({
  title = "Contenido en construcción",
  description = "Próximamente se agregará la explicación detallada para este tema."
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center  text-center rounded-xl border border-slate-800/80 bg-slate-900/30 p-8">
      <FileCode2 className="h-12 w-12 text-muted-foreground/50 mb-3" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground max-w-sm mt-1">
        {description}
      </p>
    </div>
  )
}