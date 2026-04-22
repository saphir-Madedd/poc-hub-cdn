"use client";

import {
  Euricia,
  Logitricks,
  Mfiles,
  Netexplorer,
  Odoo,
  Salesforce,
  Sellsy,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactElement } from "react";

interface AppCard {
  id: string;
  name: string;
  logo?: ReactElement;
  href: string;
  bgColor: string;
}

const LogoPlaceholder = ({ name }: { name: string }) => (
  <div className="flex h-12 w-18 items-center justify-center rounded-md border border-dashed border-external-app-card-border px-2 text-[10px] font-medium uppercase tracking-[0.08em] text-external-app-card-logo-placeholder">
    {name}
  </div>
);

const appCards: AppCard[] = [
  {
    id: "eurecia",
    name: "EURECIA",
    href: "#",
    logo: <Euricia />,
    bgColor: "#323232",
  },
  {
    id: "sellsy",
    name: "SELLSY",
    href: "#",
    logo: <Sellsy />,
    bgColor: "#02016F",
  },
  {
    id: "m-files",
    name: "M-FILES",
    href: "#",
    logo: <Mfiles />,
    bgColor: "#338BF2",
  },
  {
    id: "salesforce",
    name: "SALESFORCE",
    href: "#",
    logo: <Salesforce />,
    bgColor: "#00A1E0",
  },
  { id: "odoo", name: "ODOO", href: "#", logo: <Odoo />, bgColor: "#9C5789" },
  {
    id: "netexplorer",
    name: "NETEXPLORER",
    href: "#",
    logo: <Netexplorer />,
    bgColor: "#EA4643",
  },
  {
    id: "logitricks",
    name: "LOGITRICKS",
    href: "#",
    logo: <Logitricks />,
    bgColor: "#252B37",
  },
];

interface AppCardItemProps {
  card: AppCard;
  className?: string;
}

function AppCardItem({ card, className }: AppCardItemProps) {
  return (
    <Link
      style={{ backgroundColor: card.bgColor }}
      href={card.href}
      className="h-33.75 w-33.75 rounded-xl p-5 flex-col text-white  flex items-center justify-between"
    >
      {card.logo}
      <span className="first-letter:uppercase">{card.name}</span>
    </Link>
  );
}

interface AppsCardsProps {
  className?: string;
}

export function AppsCards({ className }: AppsCardsProps) {
  return (
    <div className={cn("flex flex-wrap gap-6", className)}>
      {appCards.map((card) => (
        <AppCardItem key={card.id} card={card} />
      ))}
    </div>
  );
}

export { AppCardItem, type AppCard };
