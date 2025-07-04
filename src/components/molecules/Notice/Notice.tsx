import Box from "../../atoms/Box/Box";
import { tv } from "tailwind-variants";
import Typography from "../../atoms/Typography/Typography";
import { ComponentProps, useEffect, useRef, useState } from "react";
import { Button } from "../../atoms/Button/Button";
import { AlertCircle, CheckCircle2, Info, X, XCircle } from "lucide-react";

const notice = tv({
  base: [""],
  variants: {
    type: {
      success: "bg-notice-success-bg text-notice-success-text",
      error: "bg-notice-error-bg text-notice-error-text",
      alert: "bg-notice-alert-bg text-notice-alert-text",
      info: "bg-notice-info-bg text-notice-info-text",
    },
    defaultVariants: {
      variant: "success",
    },
  },
});

export type NoticeProps = ComponentProps<"div"> & {
  type: "alert" | "success" | "error" | "info";
  children?: React.ReactNode;
  message: string;
  onClose?: () => void;
  autoCloseMs?: number | null; // tempo em ms para auto-fechar, null desativa
  position?: "center-top" | "center-bottom";
} & React.HTMLAttributes<HTMLDivElement>;

const getIcon = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return <CheckCircle2 className="w-5 h-5" />;
    case "alert":
      return <AlertCircle className="w-5 h-5" />;
    case "error":
      return <XCircle className="w-5 h-5" />;
    case "info":
      return <Info className="w-5 h-5" />;
  }
};

const Notice = ({
  children,
  type,
  message,
  className,
  onClose,
  autoCloseMs = 3000,
  position,
  ...props
}: NoticeProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleClose = () => {
    setIsLeaving(true);
    leaveTimeout.current = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300); // tempo da animação
  };

  useEffect(() => {
    if (autoCloseMs !== null) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseMs);
      return () => clearTimeout(timer);
    }
  }, [autoCloseMs]);

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscKeyPress);
    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
      if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    };
  }, []);

  if (!isVisible) return null;

  // Animação de entrada/saída conforme posição
  let animationClass = "animate-fade-in ";
  if (isLeaving) {
    animationClass = "animate-fade-out ";
    if (position === "center-bottom") {
      animationClass += "animate-slide-out-to-bottom ";
    } else {
      animationClass += "animate-slide-out-to-top ";
    }
  } else {
    if (position === "center-bottom") {
      animationClass += "animate-slide-in-from-bottom ";
    } else {
      animationClass += "animate-slide-in-from-top ";
    }
  }

  return (
    <Box filledBackground type={type} className={"border-none min-w-[320px] max-w-[480px] mx-auto " + animationClass + (className || "")} {...props}>
      <div className={`flex justify-between items-center ${notice({ type })}`}>
        <div className="flex gap-2 justify-between items-center">
          <div className="px-2">{getIcon(type)}</div>
          <Typography size={"md"} className="">
            {message}
          </Typography>
        </div>
        {children}
        {onClose && (
          <Button
            variant="ghost"
            className="text-gray-600 hover:text-gray-900"
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
          >
            <X className="w-5 h-5 cursor-pointer" />
          </Button>
        )}
      </div>
    </Box>
  );
};

export default Notice;
