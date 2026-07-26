import { CONTACT_EMAIL, WORKING_HOURS } from "@/lib/consts";
import { SocialLinks } from "./social-links";

const FOOTER_LINKS = [
  { label: "Услуги", href: "#services" },
  { label: "О нас", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

export function SiteFooter() {
  return (
    <footer id="footer" className="bg-black py-12">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-6 md:flex-row md:items-center">
          <SocialLinks />
          <div className="flex flex-col gap-1 text-sm text-white/50 md:items-end">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary">
              {CONTACT_EMAIL}
            </a>
            <span>{WORKING_HOURS}</span>
          </div>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wide text-white/50 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs leading-relaxed text-white/30">
          ИП Кормильцев Дмитрий Евгеньевич · ОГРНИП 316774600521210 · ИНН
          772072835461. Информация на сайте не является публичной офертой.
        </p>
      </div>
    </footer>
  );
}
