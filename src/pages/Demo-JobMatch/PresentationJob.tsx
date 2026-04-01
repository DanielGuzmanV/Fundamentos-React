import { Link } from "react-router-dom"
import { PATHS } from "../../routes/paths"

export const PresentationJob = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Presentacion de Job-Match</h1>
        <p className="text-slate-500">Presentacion de la demo explicando todo y lo que se hizo</p>
      </div>

      <section className="bg-white p-6 rounded-xl border border-slate-200 text-center">
        <p>La demo se encontrara en la siguiente pantalla con su propio sidebar o header con opciones netamente solo para esa demo</p>
      
        <div className="mt-6">
          <Link
            to={PATHS.JOB_MATCH_APP}
            className="bg-blue-600 text-white font-semibold hover:bg-blue-400 rounded-2xl border border-gray-700 text-center py-2 px-4"
          >
            Ir a la demo
          </Link>
        </div>
      </section>
    </div>
  )
}