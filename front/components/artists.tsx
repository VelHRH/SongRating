"use client";

import Artist from "@/components/artist";
import Link from "next/link";
import { useState } from "react";

const ArtistsComponent = (props: { artists: string[] }) => {
 const { artists } = props;
 const [search, setSearch] = useState("");
 return (
  <>
   <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search"
    className="bg-transparent w-full border-4 border-blue-600 text-white outline-none p-2 text-xl mb-5"
   />
   <div className={`grid grid-cols-4 gap-4`}>
    {artists.map(
     (artist) =>
      artist.slice(0, search.length).toUpperCase() === search.toUpperCase() && (
       <Link key={artist} href={`/artists/${artist}`}>
        <Artist>{artist}</Artist>
       </Link>
      )
    )}
   </div>
  </>
 );
};

export default ArtistsComponent;
