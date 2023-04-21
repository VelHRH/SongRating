// @ts-nocheck

import { Andika } from "next/font/google";

const andika = Andika({ weight: "400", subsets: ["latin"] });

async function getData() {
 const res = await fetch(`${process.env.API_HOST}/user/getAll`);
 return res.json();
}

export default async function Home() {
 const users = await getData();
 return <main className={`${andika.className} text-8xl text-red-600`}></main>;
}
