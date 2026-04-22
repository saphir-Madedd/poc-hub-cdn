import type { NextAuthOptions } from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak"

declare module "next-auth" {
  interface Session {
    accessToken?: string
    idToken?: string
    profile?: Record<string, unknown>
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    idToken?: string
    profile?: Record<string, unknown>
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    KeycloakProvider({
      issuer: process.env.AUTH_KEYCLOAK_ISSUER!,
      clientId: process.env.AUTH_KEYCLOAK_ID!,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.accessToken = account.access_token
        token.idToken = account.id_token
      }

      if (profile) {
        token.profile = profile as Record<string, unknown>
      }

      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string | undefined
      session.idToken = token.idToken as string | undefined
      session.profile = token.profile as Record<string, unknown> | undefined
      return session
    },
  },
}
