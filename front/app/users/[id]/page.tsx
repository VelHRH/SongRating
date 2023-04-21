// @ts-nocheck
import Song from "@/components/song";
import Link from "next/link";
async function getData(_id: string) {
 const res = await fetch(`${process.env.API_HOST}/songs/findById/${_id}`, {
  cache: "no-store",
 });
 return res.json();
}

export default async function Home({ params }: { params: { id: string } }) {
 const songs = await getData(params.id);
 return (
  <main className={``}>
   {songs.map((song) => (
    <Link key={song._id} href={`/song/${song._id}`}>
     <Song rating={song.ratings[0].star}>
      {song.name} - {song.author[0]}
     </Song>
    </Link>
   ))}
   <div></div>
  </main>
 );
}
