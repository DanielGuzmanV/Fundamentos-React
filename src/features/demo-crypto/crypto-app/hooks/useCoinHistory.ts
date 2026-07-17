import { getAssetsCoinHistory } from "../services/assetsApi";
import { useQuery } from "@tanstack/react-query";

export const useCoinHistory = (coinId: string, interval: string = 'd1') => {
  const {data: history, isLoading: isLoadingHistory, error: errorHistory} = useQuery({
    queryKey: ['coinHistory', coinId, interval], // la clave incluye los parametros para invalidacion
    queryFn: () => getAssetsCoinHistory(coinId, interval),
    enabled: !!coinId, // La consulta solo se ejecuta si coinId existe
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });

  return {
    history: history || [], 
    isLoadingHistory, 
    errorHistory: errorHistory?.message || null
  };
}