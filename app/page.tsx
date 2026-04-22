import PageContainer from "@/components/PageContainer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/auth";
import { headers } from "next/headers";
import { getClientFromHost, getMediaUrl } from "@/lib/branding";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const client = getClientFromHost(host);
  const mediaUrl = getMediaUrl({ client, host });

  if (!session) {
    redirect("/api/auth/signin/keycloak");
  }

  return <PageContainer session={session} mediaUrl={mediaUrl} />;
}
