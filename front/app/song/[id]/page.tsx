import YoutubeEmbed from "@/components/youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Stars from "@/components/stars";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

async function getData(_id: string) {
 const res = await fetch(`${process.env.API_HOST}/song/getOne/${_id}`, {
  cache: "no-store",
 });
 return res.json();
}

export default async function Home({ params }: { params: { id: string } }) {
 const session = await getServerSession(authOptions);
 const song = await getData(params.id);
 return (
  <main className={``}>
   <div className="text-3xl mb-3 font-bold flex justify-between">
    <div>
     {song.name} ({song.author.join(", ")})
    </div>
    <div className="flex items-center">
     {song.ratings.reduce(
      (acc: number, curr: { userID: string; star: number }) => acc + curr.star,
      0
     ) / song.ratings.length}
     <FontAwesomeIcon icon={faStar} className="text-yellow-600 ml-1" />
    </div>
   </div>
   <hr className="mb-5" />
   <YoutubeEmbed
    embedId={song.src.slice(song.src.indexOf("=") + 1, song.src.indexOf("&"))}
   />
   <Stars
    defaultRating={
     song.ratings.find((r) => r.userID === session?.user?._id)?.star || 0
    }
   />
  </main>
 );
}
