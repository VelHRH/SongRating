"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

const Login = () => {
 const { data: session } = useSession();
 console.log(session);
 return session?.user?.email ? (
  <div className="flex">
   <Link
    href="/song/add"
    className="bg-blue-600 text-white px-2 flex items-center font-bold text-2xl hover:scale-105 duration-300 mr-3 rounded-full aspect-square"
   >
    Add
   </Link>
   <button
    onClick={() => signOut()}
    className="text-2xl cursor-pointer hover:underline duration-200"
   >
    Log out
   </button>
  </div>
 ) : (
  <div className="text-2xl">
   <Link
    onClick={() => signIn()}
    href={"/users/login"}
    className="cursor-pointer hover:underline duration-200"
   >
    login
   </Link>
   /
   <Link
    href={"/users/register"}
    className="cursor-pointer hover:underline duration-200"
   >
    register
   </Link>
  </div>
 );
};

export default Login;
