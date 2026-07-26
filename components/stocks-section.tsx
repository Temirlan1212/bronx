import { DISCOUNT_ON_FIRST_VISIT } from "@/lib/consts";

const STOCKS = [
  {
    title: `${DISCOUNT_ON_FIRST_VISIT} на первое посещение`,
    text: "Скидка для новых гостей сети",
  },
  {
    title: "Комплекс выгоднее",
    text: "Стрижка + борода дешевле, чем по отдельности",
  },
];

export function StocksSection() {
  return (
    <section className="bg-black">
      <div className="container">
        <div className="flex gap-6 overflow-x-auto pb-2">
          {STOCKS.map((s) => (
            <div
              key={s.title}
              className="min-w-[280px] flex-1 rounded-2xl bg-secondary p-6"
            >
              <p className="text-lg font-semibold uppercase text-primary">
                {s.title}
              </p>
              <p className="mt-2 text-sm text-white/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
