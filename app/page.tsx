import PageContainer from "@/components/PageContainer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin/keycloak");
  }

  return <PageContainer session={session} />;
}
