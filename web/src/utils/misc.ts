import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ConfigProvider } from "../providers/ConfigProvider";

// Will return whether the current environment is in a regular browser
// and not CEF
export const isEnvBrowser = (): boolean => !(window as any).invokeNative;

// Basic no operation function
export const noop = () => {};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function UpperFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatMoney(
  amount: number,
  keepSymbols: boolean,
  currencyFormat?: string
): string {
  let formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyFormat ?? "USD",
  }).format(amount);
  if (!keepSymbols) return formatted.replace(/[^0-9,.]/g, "");
  return formatted;
}
