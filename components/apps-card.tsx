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
  classNames?: string;
}

function AppCardItem({ card, classNames }: AppCardItemProps) {
  return (
    <Link
      style={{ backgroundColor: card.bgColor }}
      href={card.href}
      className={cn(
        "h-33.75 w-33.75 rounded-xl p-5 flex-col text-white  flex items-center justify-between",
        classNames,
      )}
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
