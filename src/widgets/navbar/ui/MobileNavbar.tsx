import {
  Sheet,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  Button,
  SheetContent,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/shared/ui";
import { Menu } from "lucide-react";
import { MenuItem, NavbarProps } from "../types";
import SubMenuLink from "./SubMenuLink";

function MobileNavbar({logo,action,menu}: NavbarProps) {
  return (
    <div className="block lg:hidden mobile">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a href={logo.url} className="flex items-center gap-2">
          <span className="text-lg  font-semibold tracking-tighter">
            {logo.title}
          </span>
        </a>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle>
                <a href={logo.url} className="flex items-center gap-2">
                  {logo.title}
                </a>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 p-4">
              <Accordion
                type="single"
                collapsible
                className="flex w-full flex-col gap-4"
              >
                {menu.map((item) => renderMobileMenuItem(item))}
              </Accordion>

              <div className="flex flex-col gap-3">
                <a href={action.contanct.url}>{action.contanct.title}</a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

export default MobileNavbar;
