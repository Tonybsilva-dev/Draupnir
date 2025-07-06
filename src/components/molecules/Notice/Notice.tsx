import Box from "../../atoms/Box/Box";
import Typography from "../../atoms/Typography/Typography";
import { ComponentProps, useEffect, useRef, useState, useCallback } from "react";
import { Button } from "../../atoms/Button/Button";
import { AlertCircle, CheckCircle2, Info, X, XCircle } from "lucide-react";
import { colors, spacing, typography } from '../../../tokens';

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
  const iconStyle = { color: colors.text.primary, width: 20, height: 20 };
  switch (type) {
    case "success":
      return <CheckCircle2 style={iconStyle} aria-hidden="true" />;
    case "alert":
      return <AlertCircle style={iconStyle} aria-hidden="true" />;
    case "error":
      return <XCircle style={iconStyle} aria-hidden="true" />;
    case "info":
      return <Info style={iconStyle} aria-hidden="true" />;
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

const noticeStyleMap = {
  success: {
    backgroundColor: colors.success[50],
    color: colors.success[700],
  },
  error: {
    backgroundColor: colors.error[50],
    color: colors.error[700],
  },
  alert: {
    backgroundColor: colors.warning[50],
    color: colors.warning[700],
  },
  info: {
    backgroundColor: colors.info[50],
    color: colors.info[700],
  },
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

  const handleClose = useCallback(() => {
    setIsLeaving(true);
    leaveTimeout.current = setTimeout(() => {
      setIsVisible(false);
      if (onClose) onClose();
    }, 300); // tempo da animação
  }, [onClose]);

  useEffect(() => {
    if (autoCloseMs !== null) {
      const timer = setTimeout(() => {
        handleClose();
      }, autoCloseMs);
      return () => clearTimeout(timer);
    }
  }, [autoCloseMs, handleClose]);

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
  }, [handleClose]);

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
      style={{
        ...noticeStyleMap[type],
        minWidth: 320,
        maxWidth: 480,
        margin: '0 auto',
        border: 'none',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
      className={animationClass + (className || "")}
      role="alert"
      aria-live={ariaLive}
      aria-labelledby={title ? `${noticeId}-title` : undefined}
      aria-describedby={`${noticeId}-message`}
      {...props}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: spacing[2] }}>
        <div style={{ display: 'flex', gap: spacing[2], alignItems: 'center' }}>
          <div style={{ paddingLeft: spacing[2], paddingRight: spacing[2] }}>{getIcon(type)}</div>
          <div style={{ flex: 1 }}>
            {title && (
              <div
                id={`${noticeId}-title`}
                style={{ fontWeight: typography.fontWeight.semibold, fontSize: typography.text.sm, marginBottom: spacing[1] }}
              >
                {title}
              </div>
            )}
            <Typography
              size={"md"}
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
            style={{ color: colors.text.secondary, padding: spacing[1], minWidth: 0, minHeight: 0 }}
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            aria-label={`Fechar notificação ${type}`}
          >
            <X style={{ width: 20, height: 20 }} aria-hidden="true" />
          </Button>
        )}
      </div>
    </Box>
  );
};

export default Notice;
