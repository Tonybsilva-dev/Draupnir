import Box from "../Box/Box";
import { tv, VariantProps } from "tailwind-variants";
import Typography from "../Typography/Typography";
import { ComponentProps, useEffect } from "react";
import { Button } from "../Button/Button";
import { AlertCircle, CheckCircle2, Info, X } from "lucide-react";


const notice = tv({
  base: [
    ""
  ],
  variants: {
    type: {
      success: "text-green-600",
      error: "text-white",
      alert: "text-yellow-600",
    },
    defaultVariants: {
      variant: "success"
    },
  },
});


export type NoticeProps = ComponentProps<"div"> & {
  type: "alert" | "success" | "error";
  children?: React.ReactNode;
  message: string;
  onClose?: () => void;
} & React.HTMLAttributes<HTMLDivElement>;

const getIcon = (type: NoticeProps["type"]) => {
  switch (type) {
    case "success":
      return <CheckCircle2 className="w-5 h-5" />;
    case "alert":
      return <Info className="w-5 h-5" />;
    case "error":
      return <AlertCircle className="w-5 h-5" />;
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
  // useEffect(() => {
  //   const handleEscKeyPress = (event: KeyboardEvent) => {
  //     if (event.key === "Escape" && onClose) {
  //       onClose();
  //     }
  //   };

  //   document.addEventListener("keydown", handleEscKeyPress);

  //   return () => {
  //     document.removeEventListener("keydown", handleEscKeyPress);
  //   };
  // }, [onClose]);

  return (
    <Box filledBackground rounded type={type} {...rest}>
      <div className="flex justify-between items-center">
        <div
          className={`flex gap-2 justify-between items-center ${notice({
            type,
          })}`}
        >
          <div className="px-2">
          {getIcon(type)}
          </div>
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
