import { GRID_DATA } from "../constants/gridData";

export const GridCardsHero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-6">
      {GRID_DATA.map((item, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
        >
          <item.Icon className={`${item.IconColor} mb-4`} size={28} />
          <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
          <p className="text-slate-600">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  )
};