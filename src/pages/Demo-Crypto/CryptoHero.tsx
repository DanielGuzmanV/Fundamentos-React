import { PATHS } from "../../routes/paths";
import { HeaderHero } from "../../features/demo-crypto/Hero/components/HeaderHero";
import { GridCardsHero } from "../../features/demo-crypto/Hero/components/GridCardsHero";
import { ButtonPages } from "../../components/ButtonPages";

export const CryptoHero = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-10">
      {/* Hero Section */}
      <HeaderHero/>

      {/* Grid de Conceptos Clave */}
      <GridCardsHero/>

      {/* Nota sobre la navegación */}
      <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">¿Listo para explorar la Demo?</h2>
          <p className="text-slate-400">
            La aplicación abrirá un entorno dedicado con su propia navegación horizontal y herramientas específicas de trading.
          </p>
        </div>

        <ButtonPages pathname={PATHS.CRYPTO_APP} titleLink="Entrar a CryptoPulse"/>
      </div>
    </div>
  );
};