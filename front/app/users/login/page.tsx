"use client";
// @ts-nocheck

import LoginForm from "@/components/loginForm";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const Home = ({ params }: { params: { id: string } }) => {
 const session = useSession();
 if (session.data?.user || session.user) {
  signOut();
 }
 return (
  <main className={`w-full flex flex-col items-center`}>
   <div className="text-4xl font-bold mb-7">Login</div>
   <LoginForm />
  </main>
 );
};

export default Home;
