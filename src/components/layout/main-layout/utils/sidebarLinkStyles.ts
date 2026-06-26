export const SIDEBAR_LINK_STYLES = {
  active: 'bg-indigo-50 text-indigo-600',
  inactive: 'text-gray-600 hover:bg-gray-100',
  base: 'flex items-center gap-3 p-3 rounded-lg font-medium transition-colors'
};

/**
 * Función para obtener las clases completas de un enlace del sidebar.
 * @param isActive Indica si el enlace está activo.
 * @returns String con las clases CSS.
 */
export const getSidebarLinkClasses = (isActive: boolean): string => {
  return `${SIDEBAR_LINK_STYLES.base} ${isActive ? SIDEBAR_LINK_STYLES.active : SIDEBAR_LINK_STYLES.inactive}`;
};