import { useEffect, useState } from "react"
import type { HistoryData } from "../types/crypto";
import { getAssetsCoinHistory } from "../services/assetsApi";

export const useCoinHistory = (coinId: string, interval: string = 'd1') => {
  const [history, setHistory] = useState<HistoryData[]>([]);
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);
  const [errorHistory, setErrorHistory] = useState<string | null>(null);

  useEffect(() => {
    if(!coinId) {
      setErrorHistory("ID de moneda no proporcionado para el historial");
      setIsLoadingHistory(false);
      return;
    }

    const fetchHistory = async () => {
      try {
        setIsLoadingHistory(true);
        setErrorHistory(null);
        
        const data = await getAssetsCoinHistory(coinId, interval);
        setHistory(data);
      } catch (err) {
        setErrorHistory(`No se pudo cargar el historial de ${coinId}`);
        console.error("Error al obtener historial:", err);
      } finally {
        setIsLoadingHistory(false);
      }
    };

    fetchHistory();
  }, [coinId, interval]);

  return {history, isLoadingHistory, errorHistory};
}