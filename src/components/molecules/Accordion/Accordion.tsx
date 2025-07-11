import * as React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';

export const Accordion = RadixAccordion.Root;

export const AccordionItem = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>>(
  ({ className, ...props }, ref) => (
    <RadixAccordion.Item
      ref={ref}
      className={['AccordionItem', className].filter(Boolean).join(' ')}
      style={{
        background: colors.background.light,
      }}
      {...props}
    />
  )
);
AccordionItem.displayName = 'AccordionItem';

export const AccordionHeader = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, ...props }, ref) => (
    <RadixAccordion.Header
      ref={ref}
      className={['AccordionHeader', className].filter(Boolean).join(' ')}
      style={{ margin: 0 }}
      {...props}
    />
  )
);
AccordionHeader.displayName = 'AccordionHeader';

export const AccordionTrigger = React.forwardRef<HTMLButtonElement, React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>>(
  ({ children, className, ...props }, ref) => (
    <RadixAccordion.Trigger
      ref={ref}
      className={['AccordionTrigger', className].filter(Boolean).join(' ')}
      style={{
        width: '100%',
        background: 'none',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: typography.text.md,
        fontWeight: typography.fontWeight.medium,
        padding: `${spacing[3]} ${spacing[4]}`,
        color: colors.text.primary,
        transition: 'background 0.2s',
      }}
      {...props}
    >
      <span className="AccordionTriggerText">{children}</span>
      <ChevronDown
        className="AccordionChevron"
        aria-hidden
        style={{
          transition: 'transform 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
          marginLeft: spacing[2],
        }}
      />
    </RadixAccordion.Trigger>
  )
);
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>>(
  ({ children, className, ...props }, ref) => (
    <RadixAccordion.Content
      ref={ref}
      className={['AccordionContent', className].filter(Boolean).join(' ')}
      style={{
        overflow: 'hidden',
        transition: 'max-height 0.3s cubic-bezier(0.87, 0, 0.13, 1)',
        background: colors.background.default,
      }}
      {...props}
    >
      <div
        className="AccordionContentText"
        style={{
          padding: `${spacing[3]} ${spacing[4]}`,
          color: colors.text.secondary,
          fontSize: typography.text.sm,
        }}
      >
        {children}
      </div>
    </RadixAccordion.Content>
  )
);
AccordionContent.displayName = 'AccordionContent';

// Exports para uso padrão

export default Accordion; 