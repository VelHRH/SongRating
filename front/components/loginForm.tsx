"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
 const [email, setEmail] = useState("");
 const [pass, setPass] = useState("");
 const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await signIn("credentials", {
   username: email,
   password: pass,
   redirect: true,
   callbackUrl: "/",
  });
 };
 return (
  <form onSubmit={handleSubmit} className="w-[70%] flex flex-col items-center">
   <input
    type="text"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Email"
    className="bg-transparent w-full border-4 border-blue-600 text-white outline-none p-2 text-xl mb-5"
   />
   <input
    type="password"
    value={pass}
    onChange={(e) => setPass(e.target.value)}
    placeholder="Password"
    className="bg-transparent w-full border-4 border-blue-600 text-white outline-none p-2 text-xl mb-5"
   />
   <button
    type="submit"
    className="w-[50%] rounded-xl bg-blue-600 text-slate-950 font-bold py-2 border-2 duration-300 text-2xl border-blue-600 hover:bg-transparent hover:text-blue-600"
   >
    Login
   </button>
  </form>
 );
};

export default LoginForm;
