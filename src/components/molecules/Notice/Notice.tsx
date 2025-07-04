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
  title?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const getIcon = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return <CheckCircle2 className="w-5 h-5" aria-hidden="true" />;
    case "alert":
      return <AlertCircle className="w-5 h-5" aria-hidden="true" />;
    case "error":
      return <XCircle className="w-5 h-5" aria-hidden="true" />;
    case "info":
      return <Info className="w-5 h-5" aria-hidden="true" />;
  }
};

const getAriaLive = (type: NoticeProps["type"]) => {
  switch (type) {
    case "error":
    case "alert":
      return "assertive"; // Para erros e alertas críticos
    case "success":
    case "info":
      return "polite"; // Para sucessos e informações
    default:
      return "polite";
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
  title,
  ...props
}: NoticeProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const leaveTimeout = useRef<NodeJS.Timeout | null>(null);
  const noticeId = useRef(`notice-${Math.random().toString(36).substr(2, 9)}`).current;

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

  const ariaLive = getAriaLive(type);
  const generateAriaLabel = () => {
    if (title) {
      return `${title}: ${message}`;
    }
    return `${type} notification: ${message}`;
  };

  return (
    <Box
      filledBackground
      type={type}
      className={"border-none min-w-[320px] max-w-[480px] mx-auto " + animationClass + (className || "")}
      role="alert"
      aria-live={ariaLive}
      aria-labelledby={title ? `${noticeId}-title` : undefined}
      aria-describedby={`${noticeId}-message`}
      {...props}
    >
      <div className={`flex justify-between items-center ${notice({ type })}`}>
        <div className="flex gap-2 justify-between items-center">
          <div className="px-2">{getIcon(type)}</div>
          <div className="flex-1">
            {title && (
              <div
                id={`${noticeId}-title`}
                className="font-semibold text-sm mb-1"
              >
                {title}
              </div>
            )}
            <Typography
              size={"md"}
              className=""
              id={`${noticeId}-message`}
            >
              {message}
            </Typography>
          </div>
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
            aria-label={`Fechar notificação ${type}`}
          >
            <X className="w-5 h-5 cursor-pointer" aria-hidden="true" />
          </Button>
        )}
      </div>
    </Box>
  );
};

export default Notice;
