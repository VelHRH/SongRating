"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

async function addSong(token, name, authors, url, mins, secs) {
 const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/song/add`, {
  method: "POST",
  headers: {
   "Content-Type": "application/json;charset=utf-8",
   Authorization: `${token}`,
  },
  body: JSON.stringify({
   name,
   author: authors.split(", "),
   src: url,
   length: `${mins}:${secs}`,
  }),
 });
 const data = res.json();
 return data;
}

const AddForm = () => {
 const router = useRouter();
 const session = useSession();
 const [name, seName] = useState("");
 const [authors, setAuthors] = useState("");
 const [url, setUrl] = useState("");
 const [mins, setMins] = useState(0);
 const [secs, setSecs] = useState(0);
 const handleSubmit = async (e) => {
  e.preventDefault();
  const res = await addSong(
   session.data?.user?.sessionToken,
   name,
   authors,
   url,
   mins,
   secs
  );
  if (res && !res.message) router.push("/");
 };
 return (
  <form onSubmit={handleSubmit} className="w-[70%] flex flex-col items-center">
   <input
    type="text"
    value={name}
    onChange={(e) => seName(e.target.value)}
    placeholder="Name of song"
    className="bg-transparent w-full border-4 border-blue-600 text-white outline-none p-2 text-xl mb-5"
   />
   <input
    type="text"
    value={authors}
    onChange={(e) => setAuthors(e.target.value)}
    placeholder="Song artists (with ',')"
    className="bg-transparent w-full border-4 border-blue-600 text-white outline-none p-2 text-xl mb-5"
   />
   <input
    type="text"
    value={url}
    onChange={(e) => setUrl(e.target.value)}
    placeholder="Video url"
    className="bg-transparent w-full border-4 border-blue-600 text-white outline-none p-2 text-xl mb-5"
   />
   <div className="flex text-xl items-center mb-2">
    <div className="mr-3">Duration:</div>
    <input
     type="number"
     value={mins}
     onChange={(e) => setMins(e.target.value)}
     placeholder="Video mins"
     className="bg-transparent w-full border-4 border-blue-600 text-white outline-none p-2 text-xl mb-5"
    />
    <div className="ml-3 mr-7">mins</div>
    <input
     type="number"
     value={secs}
     onChange={(e) => setSecs(e.target.value)}
     placeholder="Video seconds"
     className="bg-transparent w-full border-4 border-blue-600 text-white outline-none p-2 text-xl mb-5"
    />
    <div className="ml-3">seconds</div>
   </div>
   <button
    type="submit"
    className="w-[50%] rounded-xl bg-blue-600 text-slate-950 font-bold py-2 border-2 duration-300 text-2xl border-blue-600 hover:bg-transparent hover:text-blue-600"
   >
    Submit
   </button>
  </form>
 );
};

export default AddForm;
