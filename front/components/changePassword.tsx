"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

async function changePassword(token, oldPassword, newPassword) {
 const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_HOST}/user/changePassword`,
  {
   method: "PUT",
   headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `${token}`,
   },
   body: JSON.stringify({
    oldPassword,
    newPassword,
   }),
  }
 );
 const data = res.json();
 return data;
}

const ChangePassword = ({ userID }) => {
 const { data: session } = useSession();
 const [isChanging, setIsChanging] = useState(false);
 const [isError, setIsError] = useState(false);
 const [pass, setPass] = useState("");
 const [pass2, setPass2] = useState("");
 const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await changePassword(session?.user?.sessionToken, pass, pass2);
  if (res.message === "success") {
   setIsChanging(false);
   setIsError(false);
   setPass("");
   setPass2("");
  } else {
   setIsError(true);
  }
 };
 return (
  <>
   {!isChanging ? (
    <button
     onClick={() => setIsChanging(true)}
     className={`text-blue-600 hover:underline ${
      session?.user?._id === userID ? "flex" : "hidden"
     }`}
    >
     Change password
    </button>
   ) : (
    <form onSubmit={handleSubmit} className="flex items-center">
     <input
      type="password"
      value={pass}
      onChange={(e) => setPass(e.target.value)}
      placeholder="Old password"
      className={`bg-transparent w-full border-2 ${
       isError ? "border-red-500" : "border-blue-600"
      } text-white outline-none py-1 text-md mr-3`}
     />
     <input
      type="password"
      value={pass2}
      onChange={(e) => setPass2(e.target.value)}
      placeholder="New password"
      className={`bg-transparent w-full border-2 ${
       isError ? "border-red-500" : "border-blue-600"
      } text-white outline-none py-1 text-md mr-3`}
     />
     <button
      type="submit"
      className="rounded-xl bg-blue-600 text-slate-950 font-bold p-1 border-2 duration-300 text-xl border-blue-600 hover:bg-transparent hover:text-blue-600"
     >
      Ok
     </button>
    </form>
   )}
  </>
 );
};

export default ChangePassword;
