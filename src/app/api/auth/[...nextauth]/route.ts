import { verifyCredentials } from "@/backend/auth/action"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
        signIn: '/'
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "text"},
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            try {
                const user = await verifyCredentials(credentials);
                return {
                  id: user.id.toString(),
                  name: user.name,
                  email: user.email,
                };
              } catch (e: unknown) {
                console.log("ERROR: " + e)
                return null;
              }
        }
      })
    ]
})

export { handler as GET, handler as POST }