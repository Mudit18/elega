import { FirestoreAdapter } from '@auth/firebase-adapter';
import NextAuth from 'next-auth';
import LinkedInProvider from 'next-auth/providers/linkedin';
import { cert } from "firebase-admin/app"

const crt = process.env.FIREBASE_PRIVATE_KEY.replace(
  /\\n/g,
 '\n',
);

const handler = NextAuth({
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      authorization: { params: { scope: 'profile email openid' } },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      async profile(profile) {
          return {
              id: profile.sub,
              name: profile.name,
              firstname: profile.given_name,
              lastname: profile.family_name,
              email: profile.email,
              picture: profile.picture
          }
      },
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: crt,
    })
  }),
  callbacks: {
    async session({ session, user }) {
      return {...session, user: {...session.user, ...user}};
    },
  },
});

export { handler as GET, handler as POST };
