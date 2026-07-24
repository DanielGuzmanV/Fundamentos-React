import { useQuery } from "@tanstack/react-query"
import type { Coin, GlobalMarketStats } from "../types/crypto"
import { calculateGlobalStats } from "../utils/marketStats";
import { getAssetsCoins } from "../services/assetsApi";

export const useGlobalMarketStats = () => {
	const { data: stats, isLoading, error } = useQuery<Coin[], Error, GlobalMarketStats> ({
		queryKey: ['globalMarketStats'],
		queryFn: () => getAssetsCoins(10),
		select: (coins) => calculateGlobalStats(coins),
		staleTime: 1000 * 60 * 10,
		refetchOnWindowFocus: false,
	});

	return {
		stats,
		isLoading,
		error: error?.message || null
	};
}