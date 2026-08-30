export const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40">
      <table className="w-full text-center text-xs text-slate-300">
        <thead className="bg-slate-950 text-slate-200 uppercase font-semibold border-b border-slate-800">
          <tr>
            <th className="p-3.5">Característica</th>
            <th className="p-3.5 text-indigo-400">Funcionales (Estándar Actual)</th>
            <th className="p-3.5 text-slate-400">De Clase (Legacy)</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/60">
          <tr className="transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-lg">
            <td className="p-3.5 font-medium text-slate-200">Sintaxis</td>
            <td className="p-3.5">Funciones JavaScript / Arrow Functions.</td>
            <td className="p-3.5">Clases ES6 extendiendo <code className="text-indigo-300">React.Component</code>.</td>
          </tr>
          <tr className="transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-lg">
            <td className="p-3.5 font-medium text-slate-200">Manejo de Estado</td>
            <td className="p-3.5">Hook <code className="text-indigo-300">useState</code>.</td>
            <td className="p-3.5">Objeto <code className="text-slate-400">this.state</code> y <code className="text-slate-400">this.setState()</code>.</td>
          </tr>
          <tr className="transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-lg">
            <td className="p-3.5 font-medium text-slate-200">Ciclo de Vida</td>
            <td className="p-3.5">Hook <code className="text-indigo-300">useEffect</code>.</td>
            <td className="p-3.5">Métodos como <code className="text-slate-400">componentDidMount</code>, etc.</td>
          </tr>
          <tr className="transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500/40 hover:bg-slate-900/80 hover:shadow-lg">
            <td className="p-3.5 font-medium text-slate-200">Renderizado</td>
            <td className="p-3.5"><code className="text-emerald-400">return ( &lt;JSX /&gt; )</code> directo.</td>
            <td className="p-3.5">Requiere método explícito <code className="text-slate-400">render()</code>.</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}