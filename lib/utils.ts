import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sanitizeInput(str: string): string {
  // basic strip tags
  return str.replace(/<[^>]*>?/gm, "").trim()
}
