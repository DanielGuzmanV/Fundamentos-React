import { getAssetsCoins } from "../services/assetsApi";
import { useQuery } from "@tanstack/react-query";

export const useAssets = () => {
  const {data: coins, isLoading, error } = useQuery({
    queryKey: ['assets'], // Llave unica para esta consulta
    queryFn: () => getAssetsCoins(),
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false
  });

  return {
    coins: coins || [], isLoading, error: error?.message || null};
}