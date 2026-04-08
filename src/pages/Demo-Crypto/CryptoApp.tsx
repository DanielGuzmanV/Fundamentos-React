import { ButtonPages } from "../../components/ButtonPages"
import { PATHS } from "../../routes/paths"

export const CryptoApp = () => {
  return (
    <div className="p-10">
      <h2 className="py-5 text-3xl font-bold text-slate-950 text-center">Bienvenidos a Crypto-App</h2>

      <div className="bg-slate-200 rounded-3xl p-8 flex flex-col items-center justify-between gap-6">
        <p className="text-slate-500">
          Pantalla principal de crypto-app
        </p>

        <ButtonPages pathname={PATHS.DEMO_1} titleLink="Volver a la presentacion"/>
      </div>
    </div>
  )
}