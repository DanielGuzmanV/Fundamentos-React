// Helper para formatear la fecha/hora en el tooltip
export const formatXAxis = (tickItem: number) => {
  const date = new Date(tickItem);
  return date.toLocaleDateString('es-Es', {day: 'numeric', month: 'short'});
};

// Helper para formatear el precio en el tooltip y YAxis
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