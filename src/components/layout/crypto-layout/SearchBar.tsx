import { useEffect, useState, type ChangeEvent } from 'react';
import { Search, X } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Estado local para que el input sea fluido
  const [localQuery, setLocalQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const timer = setTimeout(() => {
      if(localQuery) {
        setSearchParams({q: localQuery});
      } else {
        searchParams.delete('q');
        setSearchParams(searchParams);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [localQuery, setSearchParams, searchParams]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value);
    console.log("Buscando:", e.target.value);
  };

  const clearSearch = () => setLocalQuery('');

  return (
    <div className="relative w-full lg:w-64 group">
      {/* Icono de Lupa */}
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
        <Search size={18} />
      </div>

      <input
        type="text"
        value={localQuery}
        onChange={handleInputChange}
        placeholder="Buscar moneda..."
        className="block w-full pl-10 pr-10 py-2 bg-slate-100 border-transparent border focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 rounded-xl text-sm transition-all outline-none text-slate-700 placeholder:text-slate-400"
      />

      {/* FUNDAMENTO: Renderizado Condicional del botón de borrar */}
      {localQuery.length > 0 && (
        <button
          onClick={clearSearch}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};