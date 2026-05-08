
const listStatistics = [
  "Estadisticas 1",
  "Estadisticas 2",
  "Estadisticas 3",
  "Estadisticas 4",
]

export const MarketStatistics = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {listStatistics.map(item => (
        <div key={item} className="bg-white p-6 rounded-xl shadow border border-slate-200 h-32 flex items-center justify-center text-slate-400">
          {item}
        </div>
      ))}
    </section>
  )
}