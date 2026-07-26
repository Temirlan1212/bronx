import type { Service, ServiceCategoryInfo } from "../types";

export const SERVICE_CATEGORIES: ServiceCategoryInfo[] = [
  { id: "hair", title: "Стрижка" },
  { id: "beard", title: "Борода / Бритье" },
  { id: "combo", title: "Комплексы" },
];

export const SERVICES: Service[] = [
  // --- СТРИЖКА ---
  {
    id: "haircut-classic",
    title: "Стрижка",
    price: 500,
    durationMinutes: 40,
    category: "hair",
  },
  {
    id: "haircut-kids",
    title: "Детская стрижка",
    price: 300,
    durationMinutes: 30,
    category: "hair",
  },
  {
    id: "haircut-scissors",
    title: "Стрижка ножницами",
    price: 700,
    durationMinutes: 50,
    category: "hair",
  },
  {
    id: "haircut-father-son",
    title: "Папа + сын",
    price: 700,
    durationMinutes: 70,
    category: "hair",
  },

  // --- БОРОДА / БРИТЬЕ ---
  {
    id: "beard-modeling",
    title: "Моделирование бороды",
    price: 700,
    durationMinutes: 35,
    category: "beard",
  },
  {
    id: "royal-shave",
    title: "Королевское бритье (опасной бритвой)",
    price: 700,
    durationMinutes: 45,
    category: "beard",
  },
  {
    id: "beard-toning",
    title: "Тонирование бороды",
    price: 500,
    durationMinutes: 25,
    category: "beard",
  },

  // --- КОМПЛЕКСЫ ---
  {
    id: "head-toning",
    title: "Тонирование головы",
    price: 500,
    durationMinutes: 30,
    category: "combo",
  },
  {
    id: "wax-zone",
    title: "Воск (одна зона)",
    price: 100,
    durationMinutes: 10,
    category: "combo",
  },
  {
    id: "facials-care",
    title: "Комплекс по уходу за кожей лица",
    price: 1000,
    durationMinutes: 40,
    category: "combo",
  },
  {
    id: "combo-hair-beard",
    title: "Стрижка + моделирование бороды",
    price: 1000,
    durationMinutes: 75,
    category: "combo",
  },
  {
    id: "combo-full-wax",
    title: "Стрижка + моделирование бороды + уход + воск",
    price: 2000,
    durationMinutes: 105,
    category: "combo",
  },
];
