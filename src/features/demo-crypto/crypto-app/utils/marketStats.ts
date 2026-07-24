import type { Coin, GlobalMarketStats } from "../types/crypto";

export const calculateGlobalStats = (coins: Coin[]): GlobalMarketStats => {

  let totalMarketCapUsd = 0;
  let totalVolumeUsd24Hr = 0;
  let bitcoinMarketCapUsd = 0;

  coins.forEach(coin => {
    const marketCap = parseFloat(coin.marketCapUsd);
    const volume = parseFloat(coin.volumeUsd24Hr);
    
    if(!isNaN(marketCap)) totalMarketCapUsd += marketCap;
    if(!isNaN(volume)) totalVolumeUsd24Hr += volume;

    if(coin.id === 'bitcoin' && !isNaN(marketCap)) {
      bitcoinMarketCapUsd = marketCap
    }
  });

  const bitcoinDominance = totalMarketCapUsd > 0
    ? ((bitcoinMarketCapUsd / totalMarketCapUsd) * 100).toFixed(2)
    : '0.00';
  
  return {
    totalMarketCapUsd: totalMarketCapUsd.toFixed(2),
    totalVolumeUsd24Hr: totalVolumeUsd24Hr.toFixed(2),
    bitcoinDominance: bitcoinDominance
  }
}