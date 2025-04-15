"use client";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuItem,
} from "../ui/sidebar";
import { usePathname } from "next/navigation";

const sidebarMenu = [
  {
    name: "Homepage",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
export const AppSidebar = () => {
  const pathName = usePathname();
  return (
    <Sidebar collapsible="icon" className="">
      <SidebarHeader className="">
        <div className="w-full flex gap-2 items-center py-3">
          <div className="size-10 rounded-full bg-black"></div>
          <div className="flex flex-col">
            <h2 className="font-semibold">Huỳnh Tấn Phát</h2>
            <span className="text-sm font-light">Front End Developer</span>
          </div>
        </div>
      </SidebarHeader>
      {/*  */}
      <SidebarContent className="">
        {/* Menu */}
        <SidebarGroup className="gap-2">
          {sidebarMenu.map((menu, index) => (
            <SidebarMenuItem
              className={`transition-all hover:bg-primary/70 cursor-pointer py-2 px-3 rounded-md font-medium ${
                pathName === menu.href ? "bg-primary/70" : ""
              }`}
              key={index}
            >
              <Link key={index} href={menu.href}>
                {menu.name}
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
      {/*  */}
    </Sidebar>
  );
};
