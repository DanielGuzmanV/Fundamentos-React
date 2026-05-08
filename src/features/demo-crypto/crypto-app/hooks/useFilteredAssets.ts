import { useMemo } from 'react';
import type { Coin } from '../types/crypto';

export const useFilteredAssets = (coins: Coin[], searchQuery: string): Coin[] => {
  const filteredCoins = useMemo(() => {
    if (!searchQuery) {
      return coins; // Si no hay búsqueda, mostramos todas las monedas
    }
    const lowerCaseQuery = searchQuery.toLowerCase();
    return coins.filter(coin => 
      coin.name.toLowerCase().includes(lowerCaseQuery) ||
      coin.symbol.toLowerCase().includes(lowerCaseQuery)
    );
  }, [coins, searchQuery]); // Dependencias: re-ejecutar solo si coins o searchQuery cambian

  return filteredCoins;
};