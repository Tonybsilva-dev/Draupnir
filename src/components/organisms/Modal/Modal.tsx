import { ReactNode, FunctionComponent, useEffect, useState } from "react";
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
}) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

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

  return (
    <AnimatePresence>
      {" "}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 overflow-y-auto bg-gray-500 bg-opacity-50 flex justify-center items-center"
          onClick={onClose}
          variants={backdrop}
          initial="visible"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className={twMerge(
              "p-4 shadow-lg w-full max-w-lg m-6 border border-gray-200",
              variantClasses
            )}
            onClick={(e) => e.stopPropagation()}
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

const ModalHeader: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => (
  <>
    <div className="font-bold text-xl mb-4 text-center text-gray-900">
      {children}
    </div>
    <hr className="mb-2 border-gray-200" />
  </>
);

const ModalBody: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => <div className="mb-4 overflow-y-auto">{children}</div>;

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
      >
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
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
