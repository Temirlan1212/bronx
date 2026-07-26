import { INSTAGRAM_HREF, TELEGRAM_HREF } from "@/lib/consts";
import { generateWhatsAppLink } from "@/lib/utils";

export function SocialLinks() {
  return (
    <div className="flex gap-4 text-xs uppercase tracking-widest text-white/50">
      <a href={INSTAGRAM_HREF} className="hover:text-primary" target="_blank">
        Instagram
      </a>
      <a href={TELEGRAM_HREF} className="hover:text-primary">
        Telegram
      </a>
      <a href={generateWhatsAppLink()} className="hover:text-primary">
        Whatsapp
      </a>
    </div>
  );
}
