export const PageLoader = () => {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-3 p-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500/20 border-t-indigo-500" />
      <p className="text-sm font-medium text-slate-400 animate-pulse">Cargando...</p>
    </div>
  )
}