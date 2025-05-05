import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import connectDB from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import AdminModel from "@/model/Admin.model";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any): Promise<any> {
        await connectDB();
        try {
          const admin = await AdminModel.findOne({
            email: credentials.identifier,
          });
          if (!admin) {
            throw new Error("user not found with this email");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            admin.password
          );
          if (!isPasswordCorrect) {
            throw new Error("enter correct password");
          }
          return admin;
        } catch (error: any) {
          throw new Error("error occured while signIn", error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id?.toString();
        token.fullName = user.fullName;
        token.phone = user.phone;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.fullName = token.fullName;
        session.user.phone = token.phone;
        session.user.email = token.email;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/sign-in",
  },
};
