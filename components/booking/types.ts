/**
 * Категории услуг барбершопа — используются для группировки в списке выбора.
 */
export type ServiceCategory = "hair" | "beard" | "combo" | "kids" | "extra";

export interface Service {
  id: string;
  title: string;
  description?: string;
  price: number;
  durationMinutes: number;
  category: ServiceCategory;
}

export interface ServiceCategoryInfo {
  id: ServiceCategory;
  title: string;
}

/**
 * Итоговое состояние формы записи, которое уходит в submit-обработчик.
 */
export interface BookingRequest {
  serviceIds: string[];
  totalPrice: number;
  totalDurationMinutes: number;
}
