import { ReactNode, FunctionComponent, useEffect, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../atoms/Button/Button";
import Typography from "../../atoms/Typography/Typography";

type ModalVariant = "default" | "warning" | "success";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  variant?: ModalVariant;
  title?: string;
  description?: string;
};

const modalVariantStyles: Record<ModalVariant, string> = {
  default: "bg-white",
  warning: "bg-yellow-50 border border-yellow-200 text-yellow-800",
  success: "bg-green-50 border border-green-200 text-green-800",
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

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      // Salva o elemento que tinha foco antes do modal
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Adiciona listener para ESC
      window.addEventListener("keydown", handleEsc);

      // Previne scroll do body
      document.body.style.overflow = "hidden";

      // Focus trap - foca no primeiro elemento focável do modal
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

      // Restaura o foco ao elemento anterior
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
      }
    };
  }, [isOpen, onClose]);

  // Focus trap para manter o foco dentro do modal
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

  const variantClasses = modalVariantStyles[variant];
  const modalId = "modal-dialog";
  const titleId = "modal-title";
  const descriptionId = "modal-description";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center"
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
            className={twMerge(
              "p-4 shadow-lg w-full max-w-lg m-6 border border-gray-200",
              variantClasses
            )}
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
    <div className="flex justify-between items-center mb-4">
      <div
        id="modal-title"
        className="font-bold text-xl text-center text-gray-900 flex-1"
      >
        {children}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          aria-label="Fechar modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
    <hr className="mb-2 border-gray-200" />
  </>
);

const ModalBody: FunctionComponent<{
  children: ReactNode;
  description?: string;
}> = ({ children, description }) => (
  <div className="mb-4 overflow-y-auto">
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
}) => <div className="flex justify-end space-x-3">{children}</div>;

export const ModalStoryInfo = (args: ModalProps) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
      <Modal
        isOpen={isOpen}
        variant={"default"}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        description="Modal description for screen readers"
      >
        <ModalHeader onClose={() => setIsOpen(false)}>
          Modal Title
        </ModalHeader>
        <ModalBody description="Modal description for screen readers">
          <Typography size="md">
            Today, every company I talk to wants to implement a design system
            from scratch. Unfortunately, the details of a design system are not
            explored, so often they are not used to the maximum to create a
            useful user experience.
          </Typography>
          <Typography size="md">
            New designers can take a look at any of the design patterns listed
            below to learn best practices and make informed design decisions on
            their projects.
          </Typography>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)} variant="outline">
            Fechar
          </Button>
          <Button onClick={() => console.log("Action")}>Baixar </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export { Modal, ModalHeader, ModalBody, ModalFooter };
export default Modal;
