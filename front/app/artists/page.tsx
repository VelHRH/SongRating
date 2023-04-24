// @ts-nocheck

import Artist from "@/components/artist";
import ArtistsComponent from "@/components/artists";
import Link from "next/link";

async function getData() {
 const res = await fetch(`${process.env.API_HOST}/artist/getAll`, {
  cache: "no-store",
 });
 return res.json();
}

export default async function Artists() {
 const { artists } = await getData();
 return (
  <main>
   <ArtistsComponent artists={artists} />
  </main>
 );
}
