// @ts-nocheck

import Profile from "@/components/profile";
import Link from "next/link";

async function getData() {
 const res = await fetch(`${process.env.API_HOST}/user/getAll`, {
  cache: "no-store",
 });
 return res.json();
}

export default async function Home() {
 const users = await getData();
 return (
  <main className={`grid grid-cols-3 gap-4`}>
   {users.map((user) => (
    <Link key={user._id} href={`/users/${user._id}`}>
     <Profile
      imgUrl="https://www.cartonionline.com/wordpress/wp-content/uploads/2022/10/Pikachu.jpg"
      rated={4}
      created={user.songs.length}
     >
      {user.login}
     </Profile>
    </Link>
   ))}
  </main>
 );
}
