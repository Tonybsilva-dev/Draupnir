import Box from "../Box/Box";
import { tv } from "tailwind-variants";
import Typography from "../Typography/Typography";
import { ComponentProps, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { AlertCircle, CheckCircle2, Info, X, XCircle } from "lucide-react";

const notice = tv({
  base: [""],
  variants: {
    type: {
      primary: "text-green-600",
      dark: "text-white",
      secondary: "text-white",
      success: "text-green-600",
      error: "text-white",
      alert: "text-yellow-600",
      info: "text-white",
    },
    defaultVariants: {
      variant: "success",
    },
  },
});

export type NoticeProps = ComponentProps<"div"> & {
  type:
    | "alert"
    | "success"
    | "error"
    | "info"
    | "primary"
    | "secondary"
    | "dark";
  children?: React.ReactNode;
  message: string;
  onClose?: () => void;
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
  ...rest
}: NoticeProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <Box filledBackground rounded type={type} {...rest}>
      <div className="flex justify-between items-center">
        <div
          className={`flex gap-2 justify-between items-center ${notice({
            type,
          })}`}
        >
          <div className="px-2">{getIcon(type)}</div>
          <Typography size={"md"} className={`${notice({ type })}`}>
            {message}
          </Typography>
        </div>
        {children}
        {onClose && (
          <Button
            variant="ghost"
            className="text-white hover:text-black"
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
