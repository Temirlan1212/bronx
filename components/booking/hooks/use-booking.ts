"use client";

import { useCallback, useMemo, useState } from "react";
import { SERVICES } from "../data/services";
import type { BookingRequest } from "../types";
import { PHONE_NUMBER } from "@/lib/consts";

export function generateContactLink(serviceIds: string[], totalPrice: number) {
  // 1. Сопоставляем переданные ID с реальными названиями услуг
  const selectedServicesText = serviceIds
    .map((id) => {
      const service = SERVICES.find((s) => s.id === id);
      return service ? `— ${service.title} (${service.price} сом)` : null;
    })
    .filter(Boolean)
    .join("\n");

  // 2. Формируем красивый шаблон сообщения
  const message =
    `Привет! Хочу записаться в барбершоп.\n\n` +
    `Выбранные услуги:\n${selectedServicesText}\n\n` +
    `💰 Итого: ${totalPrice} сом.`;

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

interface UseBookingResult {
  selectedIds: string[];
  totalPrice: number;
  totalDurationMinutes: number;
  isServiceSelected: (id: string) => boolean;
  toggleService: (id: string) => void;
  reset: () => void;
  isValid: boolean;
  buildRequest: () => BookingRequest | null;
}

/**
 * Инкапсулирует состояние формы записи: выбранные услуги, контакты клиента
 * и расчёт итоговой суммы/длительности. Ничего не знает про UI —
 * переиспользуется в BookingDrawer (и в любом другом месте, если
 * понадобится, например в отдельной странице записи).
 */
export function useBooking(): UseBookingResult {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleService = useCallback((id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }, []);

  const isServiceSelected = useCallback(
    (id: string) => selectedIds.includes(id),
    [selectedIds],
  );

  const { totalPrice, totalDurationMinutes } = useMemo(() => {
    const selected = SERVICES.filter((service) =>
      selectedIds.includes(service.id),
    );
    return {
      totalPrice: selected.reduce((sum, service) => sum + service.price, 0),
      totalDurationMinutes: selected.reduce(
        (sum, service) => sum + service.durationMinutes,
        0,
      ),
    };
  }, [selectedIds]);

  const isValid = selectedIds.length > 0;

  const reset = useCallback(() => {
    setSelectedIds([]);
  }, []);

  const buildRequest = useCallback((): BookingRequest | null => {
    if (!isValid) return null;
    return {
      serviceIds: selectedIds,
      totalPrice,
      totalDurationMinutes,
    };
  }, [isValid, selectedIds, totalPrice, totalDurationMinutes]);

  return {
    selectedIds,
    totalPrice,
    totalDurationMinutes,
    isServiceSelected,
    toggleService,
    reset,
    isValid,
    buildRequest,
  };
}
