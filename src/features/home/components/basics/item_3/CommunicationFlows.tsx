import { CornerDownRight } from "lucide-react"

export const CommunicationFlows = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* PADRE A HIJO */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-indigo-300 text-sm mb-2 flex items-center gap-2">
            <CornerDownRight className="h-4 w-4 text-indigo-400" />
            1. Padre a Hijo (Datos)
          </h3>
          <p className="text-xs text-slate-400 mb-3">
            El padre envía valores directos o estados al componente hijo.
          </p>
          <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed">
{`// Componente Padre
<UserCard name="Carlos" age={25} />

// Componente Hijo
function UserCard({ name, age }: UserCardProps) {
  return <h3>{name} ({age} años)</h3>;
}`}
          </pre>
        </div>

        {/* HIJO A PADRE */}
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-emerald-300 text-sm mb-2 flex items-center gap-2">
            <CornerDownRight className="h-4 w-4 text-emerald-400" />
            2. Hijo a Padre (Callback)
          </h3>
          <p className="text-xs text-slate-400 mb-3">
            El padre le pasa una función al hijo para recibir datos mediante parámetros.
          </p>
          <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono overflow-x-auto leading-relaxed">
{`// Componente Hijo
function Button({ onSelect }: { onSelect: (id: string) => void }) {
  return <button onClick={() => onSelect("item-1")}>Elegir</button>;
}

// Componente Padre
<Button onSelect={(id) => console.log(id)} />`}
          </pre>
        </div>
      </div>
  )
}