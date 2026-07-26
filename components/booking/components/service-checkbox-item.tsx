"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatSom } from "@/lib/utils";
import type { Service } from "../types";

interface ServiceCheckboxItemProps {
  service: Service;
  checked: boolean;
  onToggle: (id: string) => void;
}

export function ServiceCheckboxItem({
  service,
  checked,
  onToggle,
}: ServiceCheckboxItemProps) {
  return (
    <Label
      htmlFor={service.id}
      className="flex cursor-pointer items-start justify-between gap-3 rounded-xl border border-white/10 bg-card p-3.5 transition-colors hover:border-white/25 has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-primary/10"
    >
      <div className="flex items-start gap-3">
        <Checkbox
          id={service.id}
          checked={checked}
          onCheckedChange={() => onToggle(service.id)}
          className="mt-0.5"
        />
        <div>
          <p className="text-sm font-medium leading-tight">{service.title}</p>
          {service.description ? (
            <p className="mt-0.5 text-xs text-muted-foreground">
              {service.description}
            </p>
          ) : null}
          <p className="mt-1 text-xs text-muted-foreground">
            ~{service.durationMinutes} мин
          </p>
        </div>
      </div>
      <span className="whitespace-nowrap text-sm font-semibold">
        {formatSom(service.price)}
      </span>
    </Label>
  );
}
