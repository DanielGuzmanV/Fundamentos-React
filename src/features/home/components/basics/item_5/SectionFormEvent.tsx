import { useState, type ChangeEvent, type FormEvent } from "react";
import { MousePointerClick, Send } from "lucide-react";

export const SectionFormEvent = () => {
  const [inputValue, setInputValue] = useState("");
  const [submittedData, setSubmittedData] = useState<string | null>(null);

  // Ejemplo 2:
  const [inputTextValue, setInputTextValue] = useState("");

  // Evento onChange con tipado estricto
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  
  // Evento onSubmit con e.preventDefault()
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que el navegador recargue la página

    // Validacion, verificamos si no esta vacio
    if(inputValue.trim() === "") {
      alert("El campo no puede estar vacio");
      return;
    }
    setSubmittedData(inputValue);
  };

  // Ejemplo 2: Evento para cambiar el valor del input
  const handleInputText = (e:ChangeEvent<HTMLInputElement>) => {
    setInputTextValue(e.target.value);
  }
  

  return (
    <div className="rounded-xl border border-indigo-500/30 bg-slate-900/60 p-6 space-y-4">
      <h3 className="font-semibold text-white text-sm mb-4 flex items-center gap-2">
        <Send className="h-4 w-4 text-emerald-400" />
        Laboratorio: Captura de Formulario (onChange + onSubmit)
      </h3>

      {/* Primer ejemplo de eventos: */}
      <div className="rounded-xl border border-indigo-500/30 bg-slate-900/60 p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-base font-medium text-slate-300 mb-1">
              Evento <code className="text-indigo-300">onChange</code>:
            </label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Escribe algo aquí..."
              className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-base text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <MousePointerClick className="h-3.5 w-3.5" />
            Disparar Evento onSubmit
          </button>
        </form>

        {submittedData && (
          <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
            <strong>Datos capturados del evento:</strong> "{submittedData}"
          </div>
        )}
      </div>

      {/* Segundo ejemplo de eventos: */}
      <div className="rounded-xl border border-indigo-500/30 bg-slate-900/60 p-6">
        <div className="flex flex-col lg:flex-row mb-4 gap-2">
          <h2 className="block text-base font-medium text-green-300">Texto en tiempo real: </h2>
          <p className="block text-sm">{inputTextValue}</p>
        </div>
        <input
          type="text"
          placeholder="Escribe algun texto: "
          value={inputTextValue}
          onChange={handleInputText}
          className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-base text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>
    </div>
  )
}