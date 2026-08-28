import { AlertCircle, CheckCircle2, Code2 } from "lucide-react";

export function JsxTopic() {
  return (
    <div className="space-y-4">
      {/* Titulo y descripcion */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Code2 className="h-5 w-5 text-indigo-400"/>
          Que es JSX
        </h2>
        <p className="text-slate-300 text-base leading-relaxed">
          <strong>JSX (JavaScript XML)</strong> es una extensión de sintaxis para JavaScript que permite escribir estructuras similares a HTML directamente dentro de componentes de React. No es HTML real ni un string; se transforma mediante compiladores (como Babel) en llamadas estándar a <code className="text-indigo-300 bg-slate-800 px-1.5 py-0.5 rounded">React.createElement()</code>.
        </p>
      </div>

      {/* Reglas fundamentales */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-200 text-lg mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400"/>
            Reglas de Sintaxis
          </h3>
          <ul className="space-y-2 text-base text-slate-300 list-disc list-inside leading-relaxed">
            <li><strong>Elemento Raíz Único:</strong> Debe retornar un solo nodo raíz (o usar un Fragment <code className="text-indigo-300">&lt;&gt;&lt;/&gt;</code>).</li>
            <li><strong>Cierre Obligatorio:</strong> Todas las etiquetas deben cerrarse, ej: <code className="text-indigo-300">&lt;img /&gt;</code> o <code className="text-indigo-300">&lt;br /&gt;</code>.</li>
            <li><strong>Atributos en camelCase:</strong> <code className="text-indigo-300">className</code> en lugar de <code className="text-slate-400">class</code>, <code className="text-indigo-300">onClick</code> en lugar de <code className="text-slate-400">onclick</code>.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h3 className="font-semibold text-slate-200 text-lg mb-3 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-amber-400" />
            Expresiones en JSX
          </h3>
          <p className="text-base text-slate-300 leading-relaxed mb-3">
            Cualquier código ejecutable de JavaScript (variables, operaciones, llamadas a funciones) se escribe dentro de llaves <code className="text-indigo-300 font-bold">{`{ }`}</code>.
          </p>
          <pre className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-indigo-300 font-mono overflow-x-auto">
{`const user = "Carlos";
const element = <h1>Hola, {user}!</h1>;`}
          </pre>
        </div>
      </div>

      {/* Ejemplo practico */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
        <h3 className="font-semibold text-slate-200 text-sm mb-4">Ejemplo Completo en React</h3>
        <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-mono leading-relaxed overflow-x-auto">
{`export function UserProfile() {
  const isLoggedIn = true;
  const skills = ["React", "TypeScript", "Tailwind"];

  return (
    <div className="profile-card">
      <h2>Estado: {isLoggedIn ? "Conectado" : "Desconectado"}</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}`}
        </pre>
      </div>

    </div>
  );
}