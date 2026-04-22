import PageContainer from "@/components/PageContainer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/auth";
import { headers } from "next/headers";
import { getUrls } from "@/lib/utils";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const requestHeaders = await headers();
  const { mediaUrl } = await getUrls(requestHeaders);

  if (!session) {
    redirect("/api/auth/signin/keycloak");
  }

  return <PageContainer mediaUrl={mediaUrl} />;
}
