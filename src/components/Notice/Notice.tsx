import {
  XMarkIcon,
  InformationCircleIcon,
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/solid";
import Box from "../Box/Box";
import { tv, VariantProps } from "tailwind-variants";
import Typography from "../Typography/Typography";
import { ComponentProps, useEffect } from "react";
import { Button } from "../Button/Button";
import { X } from "lucide-react";

export type NoticeProps = ComponentProps<"div"> & {
  type: "alert" | "success" | "error";
  children?: React.ReactNode;
  message: string;
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const getIcon = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return <CheckIcon className="w-5 h-5" />;
    case "alert":
      return <InformationCircleIcon className="w-5 h-5" />;
    case "error":
      return <ExclamationTriangleIcon className="w-5 h-5" />;
  }
};

const notice = tv({
  base: [],
  variants: {
    type: {
      success: "text-green-900",
      error: "text-white",
      alert: "text-yellow-900",
    },
    defaultVariants: {
      variant: {
        type: "success",
      },
    },
  },
});

const Notice = ({
  children,
  type,
  message,
  className,
  onClose,
  ...rest
}: NoticeProps) => {
  useEffect(() => {
    const handleEscKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [onClose]);

  return (
    <Box filledBackground rounded type={type} {...rest}>
      <div className="flex justify-between items-center">
        <div
          className={`flex gap-2 justify-between items-center ${notice({
            type,
          })}`}
        >
          {getIcon(type)}
          <Typography size={"md"} className={`${notice({ type })}`}>
            {message}
          </Typography>
        </div>
        {children}
        {onClose && (
          <Button variant="ghost">
            <X className="w-4 h-4 cursor-pointer" onClick={onClose} />
          </Button>
        )}
      </div>
    </Box>
  );
};

export default Notice;
