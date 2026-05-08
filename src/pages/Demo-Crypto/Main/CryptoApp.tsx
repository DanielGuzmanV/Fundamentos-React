import { useSearchParams } from "react-router-dom"
import { useAssets } from "../../../features/demo-crypto/crypto-app/hooks/useAssets";
import { useState } from "react";
import { useCoinHistory } from "../../../features/demo-crypto/crypto-app/hooks/useCoinHistory";
import { LoadingPageCustom } from "../../../features/demo-crypto/crypto-app/components/LoadingPageCustom";
import { MarketStatistics } from "../../../features/demo-crypto/crypto-app/components/MarketStatistics";
import { MainChartCoin } from "../../../features/demo-crypto/crypto-app/components/MainChartCoin";
import { FeaturedCoins } from "../../../features/demo-crypto/crypto-app/components/FeaturedCoins";
import { useFilteredAssets } from "../../../features/demo-crypto/crypto-app/hooks/useFilteredAssets";
import { useScrollToElement } from "../../../features/demo-crypto/crypto-app/hooks/useScrollToElement";

export const CryptoApp = () => {
  // Parametros de busqueda:
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';

  // Estado local para el gráfico
  // Por defecto, mostramos Bitcoin. El usuario podría cambiarlo luego.
  const [selectedCoinId, setSelectedCoinId] = useState('bitcoin');
  const [graphInterval, setGraphInterval] = useState('d1');

  // hook para obtener la lista de monedas
  const {coins, isLoading, error} = useAssets();

  // Uso de useCoinHistory para el gráfico de la moneda seleccionada
  const { history, isLoadingHistory, errorHistory } = useCoinHistory(selectedCoinId, graphInterval);

  // useMemo para filtrar la lista de monedas por la búsqueda de la URL
  const filteredCoins = useFilteredAssets(coins, searchQuery);

  // hook para el scroll
  const scrollToChart = useScrollToElement('main-chart-section');

  // función que selecciona la moneda Y hace scroll
  const handleSelectCoinAndScroll = (coinId: string) => {
    setSelectedCoinId(coinId)
    scrollToChart();
  }
  
  if(isLoading) {
    return <LoadingPageCustom label="Cargando datos del mercado global..."/>
  }

  if(error) {
    return <LoadingPageCustom label={`Error al cargar el mercado: ${error}. Inténtelo de nuevo.`} />
  }

  return (
    <div className="space-y-8 py-4">
      {/* Seccion 1: Estadisticas generales del mercado */}
      <MarketStatistics/>

      {/* Seccion 2: Grafico principal de una moneda */}
      <section 
        id="main-chart-section" 
        className="bg-white p-6 rounded-xl shadow border border-slate-200 scroll-mt-14"
      >
        <MainChartCoin
          selectedCoinId={selectedCoinId}
          isLoadingHistory={isLoadingHistory}
          errorHistory={errorHistory}
          history={history}
        />
      </section>

      {/* Seccion 3: lista de monedas destacas */}
      <FeaturedCoins
        filteredCoins={filteredCoins}
        searchQuery={searchQuery}
        setSelectedCoinId={handleSelectCoinAndScroll}
      />
    </div>
  )
}