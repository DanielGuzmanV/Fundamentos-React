import { useCallback } from 'react';

export const useScrollToElement = (elementId: string) => {
  const scrollToElement = useCallback(() => {
    // Usamos setTimeout con 0ms para asegurar que el DOM ha sido actualizado por React
    // antes de intentar hacer scroll.
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }, [elementId]); // El hook se re-crea si el ID del elemento cambia

  return scrollToElement;
};