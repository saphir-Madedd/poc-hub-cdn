import { clsx, type ClassValue } from "clsx";

import { twMerge } from "tailwind-merge";
import {
  getClientFromHost,
  getLogoUrl,
  getMediaUrl,
  getThemeCssUrl,
} from "./branding";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getUrls = async (headers: ReadonlyHeaders) => {
  const host = headers.get("x-forwarded-host") ?? headers.get("host");
  const client = getClientFromHost(host);
  const themeCssUrl = getThemeCssUrl({ client, host });
  const logoUrl = getLogoUrl({ client, host });
  const mediaUrl = getMediaUrl({ client, host });

  return { themeCssUrl, logoUrl, client, mediaUrl };
};
