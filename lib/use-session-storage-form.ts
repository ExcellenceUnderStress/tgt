"use client";

import { useCallback, useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";

type StringFormData<TFormData> = {
  [K in keyof TFormData]: string;
};

type UseSessionStorageFormOptions<TFormData extends StringFormData<TFormData>> = {
  key: string;
  initialValue: TFormData;
  enabled?: boolean;
};

type UseSessionStorageFormResult<TFormData extends StringFormData<TFormData>> = {
  data: TFormData;
  setData: Dispatch<SetStateAction<TFormData>>;
  hydrated: boolean;
  saved: boolean;
  clearSavedData: () => void;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

function readSavedFormData<TFormData extends StringFormData<TFormData>>(
  key: string,
  initialValue: TFormData,
): TFormData | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as unknown;
    if (!isRecord(parsed)) return null;

    const saved = { ...initialValue };

    for (const field of Object.keys(initialValue) as Array<keyof TFormData>) {
      const value = parsed[String(field)];
      if (typeof value === "string") {
        saved[field] = value as TFormData[keyof TFormData];
      }
    }

    return saved;
  } catch {
    return null;
  }
}

export function useSessionStorageForm<TFormData extends StringFormData<TFormData>>({
  key,
  initialValue,
  enabled = true,
}: UseSessionStorageFormOptions<TFormData>): UseSessionStorageFormResult<TFormData> {
  const [data, setData] = useState<TFormData>(initialValue);
  const [hydrated, setHydrated] = useState(false);
  const [saved, setSaved] = useState(false);
  const hasHydratedRef = useRef(false);

  useEffect(() => {
    const storedData = readSavedFormData(key, initialValue);

    setData(storedData ?? initialValue);
    setHydrated(true);
    hasHydratedRef.current = true;
  }, [key, initialValue]);

  useEffect(() => {
    if (!enabled || !hasHydratedRef.current) return;

    try {
      window.sessionStorage.setItem(key, JSON.stringify(data));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }, [data, enabled, key]);

  const clearSavedData = useCallback(() => {
    try {
      window.sessionStorage.removeItem(key);
    } catch {
      return;
    }
  }, [key]);

  return {
    data,
    setData,
    hydrated,
    saved,
    clearSavedData,
  };
}
