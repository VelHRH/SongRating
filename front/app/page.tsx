// @ts-nocheck

import Song from "@/components/song";

async function getData() {
 const res = await fetch(`${process.env.API_HOST}/user/getAll`);
 return res.json();
}

export default async function Home() {
 const users = await getData();
 return (
  <main className={``}>
   <Song name="Song" rating={4} />
  </main>
 );
}
