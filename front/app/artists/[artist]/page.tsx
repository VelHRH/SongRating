// @ts-nocheck

import Artist from "@/components/artist";
import Link from "next/link";
import Song from "@/components/song";

async function getData(artist: string) {
 const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_HOST}/artist/getAll/${artist}`,
  {
   cache: "no-store",
  }
 );
 return res.json();
}

export default async function Artist({ params }: { params: { id: string } }) {
 const { songs } = await getData(params.artist);
 return (
  <main className={``}>
   <div className="text-4xl font-bold mb-5">
    Songs of {decodeURI(params.artist)}:
   </div>
   <hr className="mb-5" />
   {songs.map((song) => (
    <Link key={song._id} href={`/song/${song._id}`}>
     <Song rating={song.ratings[0]?.star}>
      {song.name} - {song.author.join(", ")}
     </Song>
    </Link>
   ))}
  </main>
 );
}
