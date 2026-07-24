// Helper para formatear la fecha/hora en el tooltip
export const formatXAxis = (tickItem: number) => {
  const date = new Date(tickItem);
  return date.toLocaleDateString('es-ES', {day: 'numeric', month: 'short'});
};

// Helper para formatear el precio en el tooltip y YAxis (para el MainChartCoin)
export const formatPrice = (value: number) => {
  if (value >= 1_000_000_000) {
    return `$${(value / 1_000_000_000).toFixed(2)}B`; // Billones
  }
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;   // Millones
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`;       // Miles
  }
  if (value < 1 && value > 0) { // Para números muy pequeños, más decimales
    return `$${value.toFixed(4)}`;
  }
  return `$${value.toFixed(2)}`; // Valores por defecto con 2 decimales
};

// Formateador de Monedas
export const formatCurrency = (value: number, abbreviate: boolean = false): string => {
  if (isNaN(value)|| value === null || value === undefined) return '$0.00';

  // Manejo de valores extremadamente pequeño
  const absValue = Math.abs(value);
  if(absValue > 0 && absValue < 0.01) {
    return `$${value.toFixed(6)}`;
  }

  // Si se pide abreviar:
  if (abbreviate) {
    const units = [
      { limit: 1e12, symbol: 'T' },
      { limit: 1e9, symbol: 'B' },
      { limit: 1e6, symbol: 'M' },
      { limit: 1e3, symbol: 'K' },
    ];

    for (const {limit, symbol} of units) {
      if (absValue >= limit) {
        const formatted = (value / limit).toFixed(2);
        return `$${formatted}${symbol}`;
      }
    }
  }

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

// Formateador de Números Genéricos (Cantidades, Suministro, etc.)
export const formatNumber = (value: number, decimals: number = 2): string => {
  if (isNaN(value) || value === null || value === undefined) return '0';
  
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
};