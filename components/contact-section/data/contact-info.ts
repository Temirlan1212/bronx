import type { ContactInfo } from "../types";
import { PHONE_NUMBER, WORKING_HOURS } from "@/lib/consts";

/**
 * У Bronx один адрес (филиалов нет), поэтому в шапке нет селектора
 * "Выбрать филиал" — контакты жёстко заданы здесь одним объектом.
 * ВАЖНО: телефон — плейсхолдер, замени на реальный номер барбершопа.
 */
export const CONTACT_INFO: ContactInfo = {
  address: "ул. Фрунзе, 41",
  city: "с. Романовка, Бишкек",
  phone: PHONE_NUMBER,
  phoneHref: PHONE_NUMBER,
  workingHours: WORKING_HOURS,
  mapUrl:
    "https://2gis.kg/bishkek/firm/70000001112729068/tab/menu?m=74.331017%2C42.86433%2F16.94",
};
