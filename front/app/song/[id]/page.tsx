// @ts-nocheck

import { usePathname } from "next/navigation";

async function getData(_id: string) {
 const res = await fetch(`${process.env.API_HOST}/song/getOne/${_id}`, {
  cache: "no-store",
 });
 return res.json();
}

export default async function Home({ params }) {
 const song = await getData(params.id);
 return <main className={``}>{song.name}</main>;
}
