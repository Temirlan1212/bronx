import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { PHONE_NUMBER } from "./consts";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Форматирует сумму в сомах (KGS) для отображения пользователю.
 */
export function formatSom(amount: number): string {
  return `${new Intl.NumberFormat("ru-RU").format(amount)} с`;
}

export function generateWhatsAppLink(
  message: string = "Здравствуйте, хочу записаться на стрижку.",
) {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
