import { TrendingUp } from "lucide-react"

export const HeaderHero = () => {
  return (
    <header className="text-center space-y-4">
      <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
        <TrendingUp size={32} />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl">
        CryptoPulse Dashboard
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Una plataforma de visualización de criptomonedas en tiempo real diseñada para demostrar el manejo de datos masivos y optimización avanzada en React.
      </p>
    </header>
  )
}