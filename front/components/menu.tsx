"use client";

import { usePathname } from "next/navigation";

const Menu = () => {
 const pathname = usePathname();

 return (
  <ul className="flex cursor-pointer bg-blue-950 h-full rounded-3xl flex-1 mx-7 text-3xl justify-around">
   <a
    href="/"
    className={`${
     !pathname.includes("/users") && "bg-blue-900"
    } w-full h-full hover:bg-blue-900 flex items-center rounded-l-3xl justify-center duration-300`}
   >
    songs
   </a>
   <a
    href="/authors"
    className={`${
     pathname.includes("/authors") && "bg-blue-900"
    } w-full h-full hover:bg-blue-900 flex items-center justify-center duration-300`}
   >
    users
   </a>
   <a
    href="/users"
    className={`${
     pathname.includes("/users") && "bg-blue-900"
    } w-full h-full hover:bg-blue-900 flex items-center rounded-r-3xl justify-center duration-300`}
   >
    users
   </a>
  </ul>
 );
};

export default Menu;
