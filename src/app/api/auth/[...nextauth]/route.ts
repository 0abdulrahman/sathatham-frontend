import { loginWithToken } from "@/lib/apis/auth.api";
import { API_JSON_HEADER, TOKEN_NAME } from "@/lib/constants/api";
import { LoginResponse } from "@/lib/types/auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";

const handler = NextAuth({
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        username: {},
        password: {},
      },

      async authorize(credentials) {
        const locale = cookies().get("NEXT_LOCALE")?.value || "en";

        try {
          const response = await fetch(process.env.API + "/auth/login", {
            cache: "no-store",
            method: "POST",
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
            headers: {
              ...API_JSON_HEADER,
              "Accept-Language": locale,
            },
          });

          const payload: APIResponse<LoginResponse> = await response.json();

          if (!payload.success) {
            // It was an error response, so throw the error returned from the backend
            throw new Error(payload.message);
          }

          // Otherwise, it was successful response, so save the tokens in the cookies after subtracting 1 minute from its expiration time
          cookies().set(TOKEN_NAME, JSON.stringify(payload.data.token), {
            httpOnly: true,
            expires: 7 * 24 * 60 * 60 * 1000 - 1 * 1000 * 60,
          });

          // Return the user data if login was successful, but add an `id` property since it's required for next-auth
          return {
            ...payload.data.user,
          };
        } catch (error) {
          // Throw the error so that we catch it in the login component
          throw new Error((error as Error).message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // Add the user data to be saved in the `next-auth.session-token` cookie
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.familyName = user.familyName;
        token.fullName = user.fullName;
        token.photo = user.photo;
        token.sex = user.sex;
        token.role = user.role;
        token.photo = user.photo;
        token.grade = user.grade;
        token.studentData = user.studentData;
      }

      // Fetch the new user data whenever the session is triggered
      const userProfile = await loginWithToken();

      if (userProfile.success) {
        token.id = userProfile.data.user.id;
        token.firstName = userProfile.data.user.firstName;
        token.familyName = userProfile.data.user.familyName;
        token.fullName = userProfile.data.user.fullName;
        token.photo = userProfile.data.user.photo;
        token.sex = userProfile.data.user.sex;
        token.role = userProfile.data.user.role;
        token.photo = userProfile.data.user.photo;
        token.grade = userProfile.data.user.grade;
        token.studentData = userProfile.data.user.studentData;
      }

      return token;
    },
    async session({ session, token }) {
      // Save user data returned from decoded token in the session to use it across the application,
      // but excluded any sensitive data since we don't want it to be exposed on the client-side
      // when using `useSession` in client components
      if (token) {
        session.id = token.id;
        session.firstName = token.firstName;
        session.familyName = token.familyName;
        session.fullName = token.fullName;
        session.photo = token.photo;
        session.sex = token.sex;
        session.role = token.role;
        session.photo = token.photo;
        session.grade = token.grade;
        session.studentData = token.studentData;
      }

      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    // Make the token expire 7 (-1 minute) days after login
    maxAge: 60 * 60 * 24 * 7 - 60,
  },
});

export { handler as GET, handler as POST };
