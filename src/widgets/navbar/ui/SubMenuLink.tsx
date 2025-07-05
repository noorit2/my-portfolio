import Link from "next/link";
import { MenuItem } from "../types";

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
      <Link
        className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
        href={item.url}
      >
        <div className="text-foreground">{item.icon}</div>
        <div>
          <div className="text-sm font-semibold">{item.title}</div>
          {item.description && (
            <p className="text-sm leading-snug text-muted-foreground">
              {item.description}
            </p>
          )}
        </div>
      </Link>
    );
  };

  export default SubMenuLink;