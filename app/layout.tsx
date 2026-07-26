import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import { BARBERSHOP_NAME, BARBERSHOP_TAGLINE } from "@/lib/consts";
import "./globals.css";

// Оригинал использует кастомный шрифт AkzidenzGroteskPro-britva (обычный и Condensed/Extended начертания).
// Он лицензионный и недоступен публично, поэтому берём близкие по духу гротески с Google Fonts:
// Inter — для основного текста, Oswald (узкий, жирный) — для крупных заголовков разделов.
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${BARBERSHOP_NAME} — ${BARBERSHOP_TAGLINE} | Стрижём & бреем`,
  description: `${BARBERSHOP_NAME} — барбершоп в Чуйской области. Мужские стрижки, оформление бороды, королевское бритьё. Улица Фрунзе, 41, с. Романовка.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${inter.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
