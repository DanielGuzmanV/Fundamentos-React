import { CRYPTO_API_BASE_URL, CRYPTO_API_KEY, DEFAULT_ASSET_LIMIT } from "../config/apiConfig";
import type { Coin, HistoryData } from "../types/crypto";

// Funcion para obtener la lista de las monedas
export const getAssetsCoins = async (limit: number = DEFAULT_ASSET_LIMIT): Promise<Coin[]> => {
  try {
    const response = await fetch(`${CRYPTO_API_BASE_URL}/assets?limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${CRYPTO_API_KEY}`,
        'Accept': 'application/json'
      }
    });

    if(!response.ok) throw new Error("Error al obtener los datos de la API");

    const result = await response.json();
    return result.data;

  } catch (error) {
    console.error("Error en getCoins:", error);
    throw error;
  }
}

// Funcion para obtener el historial de precios de una moneda especifica
export const getAssetsCoinHistory = async (coinId: string, interval: string = 'd1'): Promise<HistoryData[]> => {
  try {
    const response = await fetch(`${CRYPTO_API_BASE_URL}/assets/${coinId}/history?interval=${interval}`, {
      headers: {
        'Authorization': `Bearer ${CRYPTO_API_KEY}`,
        'Accept': 'application/json'
      }
    });

    if(!response.ok) throw new Error(`Error al obtener el historial de ${coinId}`);

    const result = await response.json();
    return result.data;

  } catch (error) {
    console.error(`Error en getCoinHistory para ${coinId}:`, error);
    throw error;
  }
}