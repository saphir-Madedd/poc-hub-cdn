import { HelpCircle, Home, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type AppSidebarProps = {
  client: string;
  logoUrl: string;
};

export function AppSidebar({ client, logoUrl }: AppSidebarProps) {
  return (
    <Sidebar
      collapsible="none"
      className="max-h-225 w-18 rounded-[12px] border border-sidebar-border bg-sidebar shadow-md"
    >
      <SidebarHeader className="flex items-center justify-center py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary p-2">
          {/* eslint-disable-next-line @next/next/no-img-element -- Logo URL is tenant-controlled from the CDN. */}
          <img
            src={logoUrl}
            alt={`${client} logo`}
            width={32}
            height={32}
            className="h-full w-full object-contain"
          />
        </div>
      </SidebarHeader>

      <SidebarContent className="flex flex-col items-center gap-4 py-4">
        <SidebarMenu className="items-center">
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Accueil"
              isActive
              className="h-10 w-10 justify-center p-0"
            >
              <Home className="h-5 w-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="flex flex-col items-center gap-6 pb-8">
        <SidebarMenu className="items-center gap-4">
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Parametres"
              className="h-10 w-10 justify-center p-0"
            >
              <Settings className="h-5 w-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Aide"
              className="h-10 w-10 justify-center p-0"
            >
              <HelpCircle className="h-5 w-5" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <div className="relative pt-2">
          <Avatar className="h-9 w-9 cursor-pointer border-2 border-white ring-1 ring-slate-100 transition-transform hover:scale-105">
            <AvatarImage src="/avatar-user.jpg" />
            <AvatarFallback>SL</AvatarFallback>
          </Avatar>
          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
