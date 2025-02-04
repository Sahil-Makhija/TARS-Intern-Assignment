import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Truncate a string to a specified length and add an ellipsis if it exceeds that length.
 * @param {string} text - The text to truncate.
 * @param {number} maxLength - The maximum length of the truncated text.
 * @returns {string} - The truncated text.
 */
export function truncateText(text: string, maxLength: number) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength - 3) + "...";
}
