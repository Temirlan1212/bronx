import { ABOUT_HIGHLIGHTS } from "../data/highlights";

export function AboutSection() {
  return (
    <section id="about" className="">
      <div className="container grid gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow">О барбершопе</p>
          <h2 className="section-title mt-2">О нас</h2>
          <p className="mt-4 text-white/60">
            Bronx открылся в с. Романовка как барбершоп для района: без
            очередей, без переплат и без лишних формальностей. Мы стрижём и
            бреем так, как хотели бы, чтобы стригли нас самих — аккуратно,
            вовремя и с вниманием к деталям.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-1">
          {ABOUT_HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-card p-5"
            >
              <h3 className="font-condensed text-lg font-bold uppercase tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm text-white/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
