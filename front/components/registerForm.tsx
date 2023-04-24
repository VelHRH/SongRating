"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

async function register(login, email, password) {
 const res = await fetch(`http://localhost:4444/user/register`, {
  method: "POST",
  headers: {
   "Content-Type": "application/json;charset=utf-8",
  },
  body: JSON.stringify({
   email,
   login,
   password,
  }),
 });
 const data = res.json();
 return data;
}

const RegisterForm = () => {
 const router = useRouter();
 const [email, setEmail] = useState("");
 const [login, setLogin] = useState("");
 const [pass, setPass] = useState("");
 const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await register(login, email, pass);
  if (!res.message) router.push("/users/login");
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
    type="text"
    value={login}
    onChange={(e) => setLogin(e.target.value)}
    placeholder="Login"
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

export default RegisterForm;
