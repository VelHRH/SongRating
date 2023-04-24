// @ts-nocheck
import ChangePassword from "@/components/changePassword";
import Song from "@/components/song";
import Link from "next/link";
async function getSongs(_id: string) {
 const res = await fetch(`${process.env.API_HOST}/songs/findById/${_id}`, {
  cache: "no-store",
 });
 return res.json();
}

async function getUser(_id: string) {
 const res = await fetch(`${process.env.API_HOST}/user/${_id}`, {
  cache: "no-store",
 });
 return res.json();
}

export default async function Home({ params }: { params: { id: string } }) {
 const songs = await getSongs(params.id);
 const user = await getUser(params.id);
 return (
  <main className={``}>
   <div className="flex justify-between mb-2 items-center">
    <div className="text-4xl font-bold">{user.login}</div>
    <ChangePassword userID={params.id} />
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
