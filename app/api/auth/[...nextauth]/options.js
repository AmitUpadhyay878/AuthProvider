import axios from "axios";
import CredentialsProvider from "next-auth/providers/credentials";
import { headers } from "next/headers";
export const options = {
  pages: {
    // signIn: "/login", // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // Used for check email page
    // newUser: '/api/auth/signup' // If set, new users will be directed here on first sign in
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
          placeholder: "email@site.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials, _req) {
        try {
          const data = await axios.post(
            "https://staging.multiqos.com:8014/admin/login",
            {
              email: credentials?.email,
              password: credentials?.password,
            }
          );

        //    const data = res.json()

          console.log(data, "dta in auth ");

          if (!data || data?.error) {
            return null;
          }
          return data;
        } catch (error) {
          return error;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      console.log(session?.data?.data, "session from session async");
      console.log(token, "Token from session async");
      if (token?.data) {
        session.user = token.data;
      }
      return session;
    },

    async jwt({ token, user }) {
      console.log(token, "token from JWT async");
      console.log(user, "user from JWT async");
      if (user) {
        token.data = user?.data?.meta?.token;
      }
      return token;
    },
  },
};
