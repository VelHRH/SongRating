// @ts-nocheck

import Song from "@/components/song";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

async function getData(token) {
 const res = await fetch(`${process.env.API_HOST}/song/getAll`, {
  method: "GET",
  headers: {
   "Content-Type": "application/json;charset=utf-8",
   Authorization: `${token}`,
  },
  cache: "no-store",
 });
 const data = await res.json();
 return data;
}

export default async function Home() {
 const session = await getServerSession(authOptions);
 const songs = await getData(session?.user?.sessionToken || "");
 console.log(session);
 if (songs.message) {
  redirect("/users/login");
 }
 return (
  <main className={``}>
   {songs.map((song) => (
    <Link key={song._id} href={`/song/${song._id}`}>
     <Song rating={song.avg}>
      {song.name} - {song.author[0]}
     </Song>
    </Link>
   ))}
  </main>
 );
}
