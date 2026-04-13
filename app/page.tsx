import PageContainer from "@/components/PageContainer";
import { getClientFromHost, getMediaUrl } from "@/lib/branding";
import { headers } from "next/headers";

export default async function Home() {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const client = getClientFromHost(host);
  const mediaUrl = getMediaUrl({ client, host });
  return <PageContainer mediaUrl={mediaUrl} />;
}
