import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "../data/contact-info";
import { generateWhatsAppLink } from "@/lib/utils";

/**
 * У барбершопа один адрес — блок ниже намеренно без переключателя
 * "Выбрать филиал"/список городов, только контакты и запись.
 */
export function ContactSection() {
  return (
    <section id="contacts" className="bg-black">
      <div className="container grid gap-10 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <p className="eyebrow">Контакты</p>
          <h2 className="section-title mt-2">Как нас найти</h2>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <p className="font-medium text-white">{CONTACT_INFO.address}</p>
                <p className="text-sm text-white/50">{CONTACT_INFO.city}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <a
                href={generateWhatsAppLink()}
                className="font-medium text-white hover:text-primary"
              >
                {CONTACT_INFO.phone}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="font-medium text-white">
                {CONTACT_INFO.workingHours}
              </p>
            </div>
          </div>
        </div>

        <a
          href={CONTACT_INFO.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex aspect-video flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-card text-white/50 transition-colors hover:border-primary hover:text-primary"
        >
          <MapPin className="h-8 w-8" />
          <span className="text-sm font-medium group-hover:underline">
            Открыть на карте (2ГИС)
          </span>
        </a>
      </div>
    </section>
  );
}
