import { FC } from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/src/shared/utils";

interface CustomLinkProps extends LinkProps {
  variant?: "filled" | "outlined";
  className?: string;
  title: string;
  Icon?:   React.ElementType;
  iconPosition?: "left" | "right"; 
  iconSize?: "small" | "medium" | "large"; // Optional size prop for the icon
}

const CustomLink: FC<CustomLinkProps> = ({
  className,
  variant = "outlined",
  title,
  Icon,
  iconPosition = "right", // Default position is left
  iconSize = "medium", // Default size is medium
  ...props
}) => {
  return (
    <Link
      className={cn(
        "px-3 py-2 text-md text-primary-text grid justify-center items-center", // Base styles
        variant === "outlined" &&
          "  glass-card !bg-transparent !backdrop-blur-none hover:bg-surface-3/25! hover:border-white/25 border border-transparent hover:shadow-2xl! ", // Secondary variant
        variant === "filled" && "glass-card ",

        className
      )}
      {...props}
    >
      <span
        className={cn(
          "inline-flex z-1 relative flex-wrap justify-center uppercase  overflow-hidden    items-center gap-2 min-w-fit",
          variant === "filled" && ""
        )}
      >
                <span className="min-w-fit order-2 ">{title}</span>
        {Icon && (
           (
            <Icon  className={cn(
                "w-4 h-4 text-primary-text align-middle",
                iconPosition === "left" ? "order-1" : "order-3",
                iconSize === "small" ? "w-3 h-3" : iconSize === "medium" ? "w-4 h-4" : "w-5 h-5"
          
            )}></Icon>
          )
        )}
      </span>
    </Link>
  );
};

export default CustomLink;
