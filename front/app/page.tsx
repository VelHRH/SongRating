// @ts-nocheck

import Song from "@/components/song";
import Link from "next/link";

async function getData() {
 const res = await fetch(`${process.env.API_HOST}/song/getAll`, {
  cache: "no-store",
 });
 const data = await res.json();
 return data;
}

export default async function Home() {
 const songs = await getData();
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
