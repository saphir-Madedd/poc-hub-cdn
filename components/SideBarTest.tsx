"use client";

import { AppSidebar } from "@jade-innovation/template-design";
import { Home } from "lucide-react";

export default function SideBarTest({ logoUrl }: { logoUrl: string }) {
  return (
    <div className="fixed top-4 left-5 z-40 ">
      <AppSidebar
        defaultOpen={false}
        logoSrc={logoUrl}
        primaryNav={[
          {
            id: "home",
            icon: <Home className="h-5 w-5" />,
            label: "Accueil",
            isActive: true,
          },
        ]}
        user={{
          name: "Michaël Lacroix",
          email: "m.lacroix@lms.com",
          avatarSrc: "/avatar-user.png",
          avatarFallback: "ML",
        }}
      />
    </div>
  );
}
