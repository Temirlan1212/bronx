"use client";
import { Clock } from "lucide-react";
export function ScheduleSection() {
  return (
    <section id="schedule" className="bg-black">
      <div className="container flex h-full items-center justify-between">
        <div className="flex items-start gap-4 rounded-2xl border-l-2 border-primary bg-secondary p-6 md:p-8 w-full">
          <Clock
            className="mt-1 h-5 w-5 shrink-0 text-primary"
            strokeWidth={1.5}
          />
          <div>
            <p className="text-xs uppercase tracking-widest text-primary">
              График работы
            </p>
            <p className="mt-2 text-lg font-semibold text-white">
              Работаем каждый день c 10:00 до 21:00
            </p>
            <p className="mt-1 text-white/60">
              Кроме вторника — в этот день у мастеров выходной.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
