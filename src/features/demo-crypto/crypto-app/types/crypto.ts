// Interface para la data de la lista de monedas
export interface Coin {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
}

// Respuesta para la data de la lista de monedas
export interface CoinCapResponse {
  timestamp: number;
  data: Coin[];
}

// Interface para los datos historicos
export interface HistoryData {
  priceUsd: string;
  time: number;
  date: string;
}