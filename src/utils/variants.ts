import { tv, type VariantProps } from 'tailwind-variants';

/**
 * Type-safe variant creator using tailwind-variants
 * Provides better TypeScript support for component variants
 * 
 * @param config - Tailwind variants configuration
 * @returns Typed variant function and props type
 * 
 * @example
 * ```tsx
 * const buttonVariants = createVariants({
 *   base: 'px-4 py-2 rounded',
 *   variants: {
 *     variant: {
 *       primary: 'bg-blue-500 text-white',
 *       secondary: 'bg-gray-500 text-white',
 *     },
 *     size: {
 *       sm: 'text-sm',
 *       md: 'text-base',
 *       lg: 'text-lg',
 *     },
 *   },
 *   defaultVariants: {
 *     variant: 'primary',
 *     size: 'md',
 *   },
 * });
 * 
 * type ButtonVariants = VariantProps<typeof buttonVariants>;
 * ```
 */
export function createVariants<T extends Record<string, any>>(config: T) {
  return tv(config);
}

/**
 * Utility type for extracting variant props from a variant function
 * 
 * @param T - Variant function type
 * @returns Extracted variant props type
 */
export type ExtractVariants<T extends (...args: any) => any> = VariantProps<T>;

/**
 * Utility to create compound variants with better type safety
 * 
 * @param baseVariants - Base variant function
 * @param compoundVariants - Compound variant configurations
 * @returns Enhanced variant function with compound variants
 * 
 * @example
 * ```tsx
 * const enhancedButtonVariants = createCompoundVariants(
 *   buttonVariants,
 *   [
 *     {
 *       variant: 'primary',
 *       size: 'lg',
 *       class: 'font-bold',
 *     },
 *   ]
 * );
 * ```
 */
export function createCompoundVariants<T extends Record<string, any>>(
  baseVariants: T,
  compoundVariants: Array<{
    [K in keyof T['variants']]?: keyof T['variants'][K];
  } & { class: string }>
) {
  return tv({
    ...baseVariants,
    compoundVariants,
  });
}

// Re-export tailwind-variants types for convenience
export type { VariantProps } from 'tailwind-variants'; 