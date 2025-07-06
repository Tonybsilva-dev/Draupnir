import { ReactNode, FunctionComponent, useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";
import { colors, spacing, borders, borderRadius, typography } from '../../../tokens';

type ModalVariant = "default" | "warning" | "success";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  variant?: ModalVariant;
  title?: string;
  description?: string;
};

const modalVariantStyleMap: Record<ModalVariant, React.CSSProperties> = {
  default: {
    backgroundColor: colors.background.light,
    color: colors.text.primary,
    border: `${borders.sm} solid ${colors.divider}`,
  },
  warning: {
    backgroundColor: colors.warning[50],
    color: colors.warning[700],
    border: `${borders.sm} solid ${colors.warning[200]}`,
  },
  success: {
    backgroundColor: colors.success[50],
    color: colors.success[700],
    border: `${borders.sm} solid ${colors.success[200]}`,
  },
};

const Modal: FunctionComponent<ModalProps> = ({
  isOpen,
  onClose,
  children,
  variant = "default",
  title,
  description,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const handleEsc = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements && focusableElements.length > 0) {
          (focusableElements[0] as HTMLElement).focus();
        }
      }, 100);
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, handleEsc]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Tab") {
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements) return;
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
      if (event.shiftKey) {
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  };

  const backdrop = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const modal = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  if (!isOpen) return null;

  const variantStyle = modalVariantStyleMap[variant];
  const modalId = "modal-dialog";
  const titleId = "modal-title";
  const descriptionId = "modal-description";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 40,
            overflowY: 'auto',
            background: 'rgba(107, 114, 128, 0.5)', // cinza escuro com opacidade
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={onClose}
          variants={backdrop}
          initial="visible"
          animate="visible"
          exit="hidden"
          role="presentation"
        >
          <motion.div
            ref={modalRef}
            id={modalId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-describedby={description ? descriptionId : undefined}
            style={{
              ...variantStyle,
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              borderRadius: borderRadius.md,
              padding: spacing[5],
              width: '100%',
              maxWidth: 480,
              margin: spacing[6],
              outline: 'none',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={handleKeyDown}
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const ModalHeader: FunctionComponent<{
  children: ReactNode;
  onClose?: () => void;
}> = ({ children, onClose }) => (
  <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing[4] }}>
      <div
        id="modal-title"
        style={{ fontWeight: typography.fontWeight.bold, fontSize: typography.title.lg, textAlign: 'center', color: colors.text.primary, flex: 1 }}
      >
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          style={{ marginLeft: spacing[3], padding: spacing[1], color: colors.text.secondary, border: 'none', background: 'none', borderRadius: borderRadius.sm, outline: 'none', cursor: 'pointer' }}
          aria-label="Fechar modal"
        >
          <svg style={{ width: 24, height: 24 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
    <hr style={{ marginBottom: spacing[2], borderColor: colors.divider }} />
  </>
);

const ModalBody: FunctionComponent<{
  children: ReactNode;
  description?: string;
}> = ({ children, description }) => (
  <div style={{ marginBottom: spacing[4], overflowY: 'auto' }}>
    {description && (
      <div id="modal-description" className="sr-only">
        {description}
      </div>
    )}
    {children}
  </div>
);

const ModalFooter: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => <div style={{ display: 'flex', justifyContent: 'flex-end', gap: spacing[3] }}>{children}</div>;

export { Modal, ModalHeader, ModalBody, ModalFooter };
