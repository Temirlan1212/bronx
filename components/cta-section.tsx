import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-black py-24">
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
        <p className="font-condensed text-3xl font-bold uppercase leading-tight text-white md:text-4xl">
          Не понравится —
          <br />
          вернём деньги
        </p>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <p className="font-condensed text-4xl font-black uppercase text-white md:text-5xl">
            Стрижём&nbsp;&amp;&nbsp;бреем
          </p>
          <Button size="lg">Записаться</Button>
        </div>
      </div>
    </section>
  );
}
