"use client";

import { useState, type ReactNode } from "react";
import { Check, Scissors } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { formatSom } from "@/lib/utils";
import { SERVICES, SERVICE_CATEGORIES } from "../data/services";
import { generateContactLink, useBooking } from "../hooks/use-booking";
import { ServiceCheckboxItem } from "./service-checkbox-item";
import type { BookingRequest } from "../types";
import { BARBERSHOP_NAME } from "@/lib/consts";

interface BookingDrawerProps {
  trigger: ReactNode;
  /** Вызывается при успешной отправке формы записи. По умолчанию — заглушка. */
  onSubmit?: (request: BookingRequest) => void;
}

export function BookingDrawer({ trigger, onSubmit }: BookingDrawerProps) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    totalPrice,
    totalDurationMinutes,
    isServiceSelected,
    toggleService,
    reset,
    isValid,
    buildRequest,
  } = useBooking();

  function handleOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      // Сбрасываем форму с небольшой задержкой, чтобы не было "мигания"
      // пустой формы во время анимации закрытия.
      setTimeout(() => {
        reset();
        setSubmitted(false);
      }, 300);
    }
  }

  const getWhatsappLink = () => {
    const request = buildRequest();
    if (!request) return "";
    return generateContactLink(request.serviceIds, request.totalPrice);
  };

  function handleSubmit() {
    const request = buildRequest();
    if (!request) return;
    onSubmit?.(request);
    setSubmitted(true);
  }

  return (
    <Drawer
      open={open}
      onOpenChange={handleOpenChange}
      // direction={isDesktop ? "right" : "bottom"}
      showSwipeHandle
    >
      <DrawerTrigger className="w-full">{trigger}</DrawerTrigger>
      <DrawerContent className="max-h-[80dvh] rounded-lg">
        <>
          <DrawerHeader>
            <DrawerTitle className="flex items-center gap-2">
              <Scissors className="h-5 w-5" />
              Запись в {BARBERSHOP_NAME}
            </DrawerTitle>
          </DrawerHeader>

          <div className="flex-1 overflow-y-auto px-6 pb-4 mt-6">
            <div className="space-y-6">
              {SERVICE_CATEGORIES.map((category) => {
                const items = SERVICES.filter(
                  (service) => service.category === category.id,
                );
                if (items.length === 0) return null;
                return (
                  <div key={category.id}>
                    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {items.map((service) => (
                        <ServiceCheckboxItem
                          key={service.id}
                          service={service}
                          checked={isServiceSelected(service.id)}
                          onToggle={toggleService}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <DrawerFooter>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                {totalDurationMinutes > 0
                  ? `Итого: ~${totalDurationMinutes} мин`
                  : "Выберите хотя бы одну услугу"}
              </span>
              <span className="text-lg font-semibold">
                {formatSom(totalPrice)}
              </span>
            </div>

            <Button size="lg" disabled={!isValid} onClick={handleSubmit}>
              <a
                href={getWhatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Записаться
              </a>
            </Button>
          </DrawerFooter>
        </>
      </DrawerContent>
    </Drawer>
  );
}

// function BookingSuccess({
//   totalPrice,
//   onClose,
// }: {
//   totalPrice: number;
//   onClose: () => void;
// }) {
//   return (
//     <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-10 text-center">
//       <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
//         <Check className="h-7 w-7" />
//       </div>
//       <h3 className="text-lg font-semibold text-white">Заявка принята</h3>
//       <p className="max-w-xs text-sm text-white/60">
//         Мы свяжемся с вами, чтобы подтвердить время. Сумма к оплате в барбершопе
//         — {formatSom(totalPrice)}.
//       </p>
//       <Button className="mt-2" onClick={onClose}>
//         Готово
//       </Button>
//     </div>
//   );
// }
