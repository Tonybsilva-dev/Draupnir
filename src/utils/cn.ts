import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution
 * Combines clsx and tailwind-merge for optimal class handling
 * 
 * @param inputs - Class values to merge
 * @returns Merged class string
 * 
 * @example
 * ```tsx
 * cn('px-2 py-1', 'px-3', 'bg-red-500') // Returns: 'py-1 px-3 bg-red-500'
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Conditional class utility for better readability
 * 
 * @param condition - Boolean condition
 * @param trueClass - Class to apply when condition is true
 * @param falseClass - Class to apply when condition is false (optional)
 * @returns Class string based on condition
 * 
 * @example
 * ```tsx
 * conditionalClass(isActive, 'bg-green-500', 'bg-gray-300')
 * ```
 */
export function conditionalClass(
  condition: boolean,
  trueClass: string,
  falseClass?: string
): string {
  return condition ? trueClass : falseClass || '';
}

/**
 * Variant class utility for component variants
 * 
 * @param variants - Object with variant options
 * @param selectedVariant - Selected variant key
 * @param defaultVariant - Default variant key
 * @returns Class string for selected variant
 * 
 * @example
 * ```tsx
 * const variantClasses = {
 *   primary: 'bg-blue-500 text-white',
 *   secondary: 'bg-gray-500 text-white',
 * };
 * variantClass(variantClasses, variant, 'primary')
 * ```
 */
export function variantClass<T extends Record<string, string>>(
  variants: T,
  selectedVariant: keyof T | undefined,
  defaultVariant: keyof T
): string {
  const variant = selectedVariant || defaultVariant;
  return variants[variant] || variants[defaultVariant];
} 