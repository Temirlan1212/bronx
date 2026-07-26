import { Button } from "@/components/ui/button";
import {
  BARBERSHOP_NAME,
  BARBERSHOP_TAGLINE,
  DISCOUNT_ON_FIRST_VISIT,
} from "@/lib/consts";
import dynamic from "next/dynamic";
import { SocialLinks } from "./social-links";

const BookingDrawer = dynamic(
  () => import("./booking").then((mod) => mod.BookingDrawer),
  {
    ssr: false,
    loading: () => (
      <Button size="lg" className="w-full md:w-auto" disabled>
        Записаться{" "}
      </Button>
    ),
  },
);

export function HeroSection() {
  return (
    <section className="relative bg-black md:pt-[6rem]">
      {/* Зелёное свечение сверху — видно только на десктопе, где есть отступ до карточки */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-40 bg-[radial-gradient(ellipse_at_top,_rgba(166,206,57,0.25),_transparent_70%)] md:block" />

      {/*
        На мобильных — фото на всю ширину экрана, без скруглений и отступов
        (как в оригинале britvabarber.ru).
        На md+ — фото собрано в карточку внутри `container`, со скруглением и рамкой.
      */}
      <div className="relative w-full md:container">
        {/*
          overflow-hidden и rounded должны быть на ОДНОМ элементе — иначе
          прямоугольное фоновое фото просто вылезает за скруглённую рамку.
        */}
        <div className="relative min-h-[560px] w-full overflow-hidden md:h-[640px] md:rounded-[28px] md:border md:border-white/10 md:shadow-2xl">
          {/* Фоновое изображение барбершопа */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/images/hero-background.png')" }}
          />
          {/* Затемнение для читаемости текста */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Контент поверх фото */}
          <div className="relative z-10 flex h-full min-h-[560px] flex-col items-center justify-center gap-8 px-6 py-16 text-center md:min-h-0 md:items-start md:justify-end md:px-12 md:pb-14 md:text-left">
            <div className="animate-fade-up">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/70 md:text-sm">
                {BARBERSHOP_TAGLINE}
              </p>
              <h1 className="font-condensed text-5xl font-black uppercase leading-[0.95] text-white md:text-7xl">
                {BARBERSHOP_NAME}
              </h1>
              <p className="mt-3 font-condensed text-xl font-bold uppercase text-white md:text-2xl">
                Стрижём&nbsp;&amp;&nbsp;бреем
              </p>
            </div>

            {/* Блок про скидку — часть фото-баннера, как в оригинале */}
            <div className="animate-fade-up">
              <p className="font-condensed text-3xl font-black uppercase text-white md:text-4xl">
                Скидка {DISCOUNT_ON_FIRST_VISIT}
              </p>
              <p className="mt-2 max-w-xs text-sm text-white/70 md:max-w-sm md:text-base">
                на первое посещение сети.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Блок под фото — кнопка на всю ширину на мобиле, соцсети снизу по центру */}
      <div className="container mt-8 flex flex-col items-center gap-6 md:mt-10 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full flex-col items-center gap-4 md:w-auto md:flex-row">
          <BookingDrawer
            trigger={
              <Button size="lg" className="w-full md:w-auto">
                Записаться
              </Button>
            }
          />

          <Button variant="outline" size="lg" className="w-full md:w-auto">
            <a href="#contacts" key="#contacts">
              Мы находимся{" "}
            </a>
          </Button>
        </div>

        <SocialLinks />
      </div>
    </section>
  );
}
