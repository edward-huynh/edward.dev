import { FloatRoute } from "../FloatRoute";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";

export const RootLayoutPage = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  return (
    <SidebarProvider className="bg-primary/20">
      {/* <AppSidebar /> */}
      <SidebarInset className="py-5 px-3 bg-transparent">
        <div className=" rounded-lg bg-background overflow-y-scroll h-[calc(100vh-40px)] scrollbar-hide">
          {children}
        </div>
        <FloatRoute />
      </SidebarInset>
    </SidebarProvider>
  );
};
