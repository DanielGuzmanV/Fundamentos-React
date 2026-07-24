import { formatCurrency } from "../../../../utils/format_mainChart";
import type { GlobalMarketStats } from "../types/crypto";

export const buildMarketStatsDisplay = (stats: GlobalMarketStats) => [
  { 
		label: "Capitalización Total", 
		value: formatCurrency(parseFloat(stats.totalMarketCapUsd), true) 
	},
	{ 
		label: "Volumen 24h", 
		value: formatCurrency(parseFloat(stats.totalVolumeUsd24Hr), true) 
	},
	{ 
		label: "Dominancia BTC", 
		value: `${stats.bitcoinDominance}%` 
	},
	{ 
		label: "Índice Miedo/Codicia", 
		value: "N/A" // Placeholder, ya que no tenemos una API para esto aún
	},
]