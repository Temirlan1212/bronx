"use client";

import { useState } from "react";
import {
  ChevronDown,
  Scissors,
  Layers,
  Sparkles,
  Droplets,
  type LucideIcon,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { BARBERSHOP_NAME } from "@/lib/consts";

type ServiceItem = {
  name: string;
  price: string;
};

type ServiceGroup = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: ServiceItem[];
};

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "haircut",
    title: "Стрижка",
    icon: Scissors,
    items: [
      { name: "Стрижка", price: "500 сом" },
      { name: "Детская стрижка", price: "300 сом" },
      { name: "Стрижка ножницами", price: "700 сом" },
      { name: "Папа + сын", price: "700 сом" },
    ],
  },
  {
    id: "beard",
    title: "Борода / бритьё",
    icon: Layers,
    items: [
      { name: "Моделирование бороды", price: "700 сом" },
      { name: "Королевское бритьё (опасной бритвой)", price: "700 сом" },
      { name: "Тонирование бороды", price: "500 сом" },
    ],
  },
  {
    id: "complex",
    title: "Комплексы",
    icon: Sparkles,
    items: [
      { name: "Тонирование головы", price: "500 сом" },
      { name: "Воск (одна зона)", price: "100 сом" },
      { name: "Комплекс по уходу за кожей лица", price: "1000 сом" },
      { name: "Стрижка + моделирование бороды", price: "1000 сом" },
      {
        name: "Стрижка + моделирование бороды + уход + воск",
        price: "2000 сом",
      },
    ],
  },
  {
    id: "face-care",
    title: "Уход за лицом",
    icon: Droplets,
    items: [
      { name: "Чистка лица", price: "800 сом" },
      { name: "Увлажняющая маска", price: "600 сом" },
      { name: "Массаж лица", price: "700 сом" },
    ],
  },
];

export function ServicesSection() {
  // По умолчанию открыта первая группа, остальные свёрнуты — классический аккордеон
  const [openId, setOpenId] = useState<string | null>(
    SERVICE_GROUPS[0]?.id ?? null,
  );

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="services" className="bg-black">
      <div className="container flex flex-col gap-12">
        <div className="eyebrow">Что мы делаем</div>
        <h2 className="section-title">Услуги</h2>

        <div className="flex flex-col gap-4">
          {SERVICE_GROUPS.map((group) => {
            const isOpen = openId === group.id;
            const Icon = group.icon;
            return (
              <div
                key={group.id}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-card transition-colors",
                  isOpen ? "border-primary/50" : "border-white/10",
                )}
              >
                {/* Заголовок группы — иконка + название + стрелка, кликабельно на всю ширину */}
                <button
                  type="button"
                  onClick={() => toggle(group.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${group.id}`}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.03] md:px-6 md:py-5"
                >
                  <span className="flex items-center gap-3 md:gap-4">
                    <span>
                      <Icon
                        className="h-5 w-5 transition-colors md:h-6 md:w-6 text-primary"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span
                      className={cn(
                        "text-base font-semibold uppercase tracking-wide text-white md:text-lg",
                        isOpen && "text-primary",
                      )}
                    >
                      {group.title}
                    </span>
                  </span>

                  {/* Стрелка — вращается на 180°, когда группа раскрыта */}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>

                {/*
                  Раскрытие без лишнего JS: grid-rows 0fr → 1fr анимирует высоту
                  плавно и работает адаптивно на любой ширине экрана.
                */}
                <div
                  id={`panel-${group.id}`}
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col divide-y divide-white/5 border-t border-white/10 px-5 md:px-6">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between gap-4 py-3 md:py-4"
                        >
                          <span className="text-sm text-white/80 md:text-base">
                            {item.name}
                          </span>
                          <span className="whitespace-nowrap text-sm font-medium text-white md:text-base">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="h-5 md:h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-secondary p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">
              {BARBERSHOP_NAME}
            </p>
            <p className="mt-2 max-w-xl text-white/70">
              Топ-Барбер {BARBERSHOP_NAME} — специалист с многолетним опытом,
              регулярно повышающий квалификацию.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
