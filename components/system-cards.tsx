"use client";

import { ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface SystemCard {
  id: string;
  name: string;
  icon: React.ReactNode;
  href?: string;
}

const SIMSIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42.4 44C42.9601 44 43.2401 44 43.454 43.891C43.6422 43.7951 43.7951 43.6422 43.891 43.454C44 43.2401 44 42.9601 44 42.4V21.6C44 21.0399 44 20.7599 43.891 20.546C43.7951 20.3579 43.6422 20.2049 43.454 20.109C43.2401 20 42.9601 20 42.4 20L37.6 20C37.0399 20 36.7599 20 36.546 20.109C36.3578 20.2049 36.2049 20.3578 36.109 20.546C36 20.7599 36 21.0399 36 21.6V26.4C36 26.9601 36 27.2401 35.891 27.454C35.7951 27.6422 35.6422 27.7951 35.454 27.891C35.2401 28 34.9601 28 34.4 28H29.6C29.0399 28 28.7599 28 28.546 28.109C28.3578 28.2049 28.2049 28.3578 28.109 28.546C28 28.7599 28 29.0399 28 29.6V34.4C28 34.9601 28 35.2401 27.891 35.454C27.7951 35.6422 27.6422 35.7951 27.454 35.891C27.2401 36 26.9601 36 26.4 36H21.6C21.0399 36 20.7599 36 20.546 36.109C20.3578 36.2049 20.2049 36.3578 20.109 36.546C20 36.7599 20 37.0399 20 37.6V42.4C20 42.9601 20 43.2401 20.109 43.454C20.2049 43.6421 20.3578 43.7951 20.546 43.891C20.7599 44 21.0399 44 21.6 44L42.4 44Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 13.6C20 13.0399 20 12.7599 20.109 12.546C20.2049 12.3578 20.3578 12.2049 20.546 12.109C20.7599 12 21.0399 12 21.6 12H26.4C26.9601 12 27.2401 12 27.454 12.109C27.6422 12.2049 27.7951 12.3578 27.891 12.546C28 12.7599 28 13.0399 28 13.6V18.4C28 18.9601 28 19.2401 27.891 19.454C27.7951 19.6422 27.6422 19.7951 27.454 19.891C27.2401 20 26.9601 20 26.4 20H21.6C21.0399 20 20.7599 20 20.546 19.891C20.3578 19.7951 20.2049 19.6422 20.109 19.454C20 19.2401 20 18.9601 20 18.4V13.6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 25.6C6 25.0399 6 24.7599 6.10899 24.546C6.20487 24.3578 6.35785 24.2049 6.54601 24.109C6.75992 24 7.03995 24 7.6 24H12.4C12.9601 24 13.2401 24 13.454 24.109C13.6422 24.2049 13.7951 24.3578 13.891 24.546C14 24.7599 14 25.0399 14 25.6V30.4C14 30.9601 14 31.2401 13.891 31.454C13.7951 31.6422 13.6422 31.7951 13.454 31.891C13.2401 32 12.9601 32 12.4 32H7.6C7.03995 32 6.75992 32 6.54601 31.891C6.35785 31.7951 6.20487 31.6422 6.10899 31.454C6 31.2401 6 30.9601 6 30.4V25.6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 5.6C4 5.03995 4 4.75992 4.10899 4.54601C4.20487 4.35785 4.35785 4.20487 4.54601 4.10899C4.75992 4 5.03995 4 5.6 4H10.4C10.9601 4 11.2401 4 11.454 4.10899C11.6422 4.20487 11.7951 4.35785 11.891 4.54601C12 4.75992 12 5.03995 12 5.6V10.4C12 10.9601 12 11.2401 11.891 11.454C11.7951 11.6422 11.6422 11.7951 11.454 11.891C11.2401 12 10.9601 12 10.4 12H5.6C5.03995 12 4.75992 12 4.54601 11.891C4.35785 11.7951 4.20487 11.6422 4.10899 11.454C4 11.2401 4 10.9601 4 10.4V5.6Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CARTIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4H6.61233C7.10436 4 7.35038 4 7.54837 4.09048C7.72284 4.17022 7.87069 4.29845 7.9743 4.45989C8.09187 4.64309 8.12666 4.88664 8.19625 5.37373L9.14286 12M9.14286 12L11.2466 27.4628C11.5136 29.425 11.6471 30.4062 12.1162 31.1447C12.5296 31.7954 13.1222 32.3129 13.8227 32.6347C14.6177 33 15.6079 33 17.5882 33H34.704C36.5891 33 37.5316 33 38.3019 32.6608C38.9811 32.3618 39.5637 31.8797 39.9846 31.2684C40.4619 30.5752 40.6382 29.6493 40.9909 27.7975L43.6382 13.8994C43.7624 13.2476 43.8244 12.9217 43.7345 12.667C43.6556 12.4435 43.4998 12.2554 43.2951 12.136C43.0617 12 42.73 12 42.0665 12H9.14286ZM20 42C20 43.1046 19.1046 44 18 44C16.8954 44 16 43.1046 16 42C16 40.8954 16.8954 40 18 40C19.1046 40 20 40.8954 20 42ZM36 42C36 43.1046 35.1046 44 34 44C32.8954 44 32 43.1046 32 42C32 40.8954 32.8954 40 34 40C35.1046 40 36 40.8954 36 42Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ERPIcon = () => (
  <svg
    width="42"
    height="42"
    viewBox="0 0 42 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 33V32.6C5 29.2397 5 27.5595 5.65396 26.2761C6.2292 25.1471 7.14708 24.2292 8.27606 23.654C9.55953 23 11.2397 23 14.6 23H27.4C30.7603 23 32.4405 23 33.7239 23.654C34.8529 24.2292 35.7708 25.1471 36.346 26.2761C37 27.5595 37 29.2397 37 32.6V33M5 33C2.79086 33 1 34.7909 1 37C1 39.2091 2.79086 41 5 41C7.20914 41 9 39.2091 9 37C9 34.7909 7.20914 33 5 33ZM37 33C34.7909 33 33 34.7909 33 37C33 39.2091 34.7909 41 37 41C39.2091 41 41 39.2091 41 37C41 34.7909 39.2091 33 37 33ZM21 33C18.7909 33 17 34.7909 17 37C17 39.2091 18.7909 41 21 41C23.2091 41 25 39.2091 25 37C25 34.7909 23.2091 33 21 33ZM21 33V13M9 13H33C34.8638 13 35.7957 13 36.5307 12.6955C37.5108 12.2895 38.2895 11.5108 38.6955 10.5307C39 9.79565 39 8.86377 39 7C39 5.13623 39 4.20435 38.6955 3.46927C38.2895 2.48915 37.5108 1.71046 36.5307 1.30448C35.7957 1 34.8638 1 33 1H9C7.13623 1 6.20435 1 5.46927 1.30448C4.48915 1.71046 3.71046 2.48915 3.30448 3.46927C3 4.20435 3 5.13623 3 7C3 8.86377 3 9.79565 3.30448 10.5307C3.71046 11.5108 4.48915 12.2895 5.46927 12.6955C6.20435 13 7.13623 13 9 13Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GEOIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 23.8824V13.6C40 10.2397 40 8.55953 39.346 7.27606C38.7708 6.14708 37.8529 5.2292 36.7239 4.65396C35.4405 4 33.7603 4 30.4 4H17.6C14.2397 4 12.5595 4 11.2761 4.65396C10.1471 5.2292 9.2292 6.14708 8.65396 7.27606C8 8.55953 8 10.2397 8 13.6V34.4C8 37.7603 8 39.4405 8.65396 40.7239C9.2292 41.8529 10.1471 42.7708 11.2761 43.346C12.5595 44 14.2397 44 17.6 44H28M28 22H16M20 30H16M32 14H16M30 34H42"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SICIcon = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.059 16.7037C25.9141 17.5199 24.5131 18 23 18C19.134 18 16 14.866 16 11C16 7.13401 19.134 4 23 4C25.506 4 27.7044 5.31683 28.941 7.29628M12 40.1743H17.2206C17.9013 40.1743 18.5778 40.2553 19.2376 40.4173L24.7538 41.7578C25.9507 42.0493 27.1976 42.0777 28.4069 41.8428L34.5059 40.6562C36.1171 40.3424 37.5992 39.5709 38.7607 38.441L43.0758 34.2434C44.3081 33.0467 44.3081 31.1049 43.0758 29.9061C41.9663 28.8269 40.2095 28.7054 38.9543 29.6206L33.9252 33.2897C33.205 33.8162 32.3286 34.0997 31.4273 34.0997H26.571L29.6621 34.0995C31.4044 34.0995 32.8157 32.7267 32.8157 31.0318V30.4183C32.8157 29.011 31.8311 27.7839 30.4282 27.4437L25.6572 26.2835C24.8808 26.0952 24.0856 26 23.2863 26C21.3567 26 17.8638 27.5976 17.8638 27.5976L12 30.0498M40 13C40 16.866 36.866 20 33 20C29.134 20 26 16.866 26 13C26 9.13401 29.134 6 33 6C36.866 6 40 9.13401 40 13ZM4 29.2L4 40.8C4 41.9201 4 42.4802 4.21799 42.908C4.40973 43.2843 4.71569 43.5903 5.09202 43.782C5.51984 44 6.07989 44 7.2 44H8.8C9.9201 44 10.4802 44 10.908 43.782C11.2843 43.5903 11.5903 43.2843 11.782 42.908C12 42.4802 12 41.9201 12 40.8V29.2C12 28.0799 12 27.5198 11.782 27.092C11.5903 26.7157 11.2843 26.4097 10.908 26.218C10.4802 26 9.92011 26 8.8 26L7.2 26C6.0799 26 5.51984 26 5.09202 26.218C4.7157 26.4097 4.40973 26.7157 4.21799 27.092C4 27.5198 4 28.0799 4 29.2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const systemCards: SystemCard[] = [
  { id: "sims", name: "SIMS", icon: <SIMSIcon />, href: "#" },
  { id: "ec", name: "EC", icon: <CARTIcon />, href: "#" },
  { id: "erp", name: "ERP", icon: <ERPIcon />, href: "#" },
  { id: "geo", name: "GEO", icon: <GEOIcon />, href: "#" },
  { id: "sic", name: "SIC", icon: <SICIcon />, href: "#" },
];

interface SystemCardItemProps {
  card: SystemCard;
  className?: string;
}

function SystemCardItem({ card, className }: SystemCardItemProps) {
  return (
    <a
      href={card.href}
      className={cn(
        "group relative flex h-35 w-45 flex-col items-start justify-between rounded-2xl border-2 p-4 border-system-card-border",
        "bg-system-card-background ",
        "hover:border-system-card-border hover:bg-system-card-hover-background hover:shadow-md",
        "transition-all duration-200",
        className,
      )}
    >
      <div className="text-system-card-icon">{card.icon}</div>

      <div className="absolute top-4 right-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg border bg-system-card-arrow-background border-system-card-arrow-border text-system-card-arrow-icon transition-colors group-hover:bg-system-card-hover-background">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <span className="text-lg font-semibold text-system-card-title">
        {card.name}
      </span>
    </a>
  );
}

interface AddCardButtonProps {
  onClick?: () => void;
  className?: string;
}

function AddCardButton({ onClick, className }: AddCardButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-35 w-45 items-center justify-center rounded-2xl border-2 border-dashed",
        "bg-system-card-background border-system-card-add-border",
        "hover:bg-system-card-hover-background hover:border-system-card-border",
        "transition-all duration-200",
        className,
      )}
    >
      <Plus className="h-8 w-8 text-system-card-add-icon" />
    </button>
  );
}

export function SystemCards() {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      {systemCards.map((card) => (
        <SystemCardItem key={card.id} card={card} />
      ))}
      <AddCardButton onClick={() => console.log("Add new system")} />
    </div>
  );
}

export { SystemCardItem, AddCardButton, type SystemCard };
