// @ts-nocheck

import Profile from "@/components/profile";

async function getData() {
 const res = await fetch(`${process.env.API_HOST}/user/getAll`);
 return res.json();
}

export default async function Home() {
 const users = await getData();
 return (
  <main className={`grid grid-cols-3 gap-4`}>
   {users.map((user) => (
    <Profile
     key={user._id}
     imgUrl="https://www.cartonionline.com/wordpress/wp-content/uploads/2022/10/Pikachu.jpg"
     rated={4}
     created={user.songs.length}
    >
     {user.login}
    </Profile>
   ))}
  </main>
 );
}
