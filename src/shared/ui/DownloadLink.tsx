import { FC } from "react";
import { cn } from "@/src/shared/utils";
import { CustomImageProps } from "../types";
import Image from "next/image";

interface DownloadLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "filled" | "outlined";
  className?: string;
  title: string;
  Icon?: React.ElementType;
  iconPosition?: "left" | "right";
  iconSize?: "small" | "medium" | "large"; // Optional size prop for the icon
  image?: CustomImageProps;
}

const DownloadLink: FC<DownloadLinkProps> = ({
  className,
  variant = "outlined",
  title,
  Icon,
  iconPosition = "left", // Default position is left
  iconSize = "medium", // Default size is medium
  image,
  ...props
}) => {
  return (
    <a
      className={cn(
        "px-3 py-2 text-md text-primary-text grid justify-center items-center transition-all duration-200 rounded-lg", // Base styles
        variant === "outlined" &&
          "  glass-card !bg-transparent !backdrop-blur-none enabled-hover dark:hover:bg-surface-3/25! hover:bg-surface-2/30!  !border-3 border-transparent  ", // Secondary variant
        variant === "filled" && " glass-card enabled-hover  bg-[radial-gradient(circle_at_center,_hsl(var(--primary-900))_0%,_transparent_60%)]! hover:bg-surface-1/30!  dark:bg-[radial-gradient(circle_at_center,_hsl(var(--primary-400))_0%,_transparent_80%)]! dark:hover:bg-accent-1/30!  transition-all duration-200  !border-transparent", // Primary variant

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
        {title.length > 0 && (
          <span className="min-w-fit order-2 ">{title}</span>
        )}
        {Icon && (
          <Icon
            className={cn(
              "w-4 h-4 text-primary-text align-middle overflow-clip",
              iconPosition === "left" ? "order-1" : "order-3",
              iconSize === "small"
                ? "w-3 h-3"
                : iconSize === "medium"
                ? "w-4 h-4"
                : "w-5 h-5"
            )}
          ></Icon>
        )}
        {image && (
          <Image
            src={image.src}
            alt={image.alt || "icon"}
            width={image.width || 20}
            height={image.height || 20}
            className={cn(
              "align-middle text-primary-text dark:invert",
              iconPosition === "left" ? "order-1" : "order-3"
            )}
          />
        )}
      </span>
    </a>
  );
};

export default DownloadLink;
