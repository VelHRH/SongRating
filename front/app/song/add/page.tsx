async function getData(_id: string) {
 const res = await fetch(`${process.env.API_HOST}/song/getOne/${_id}`, {
  cache: "no-store",
 });
 return res.json();
}

export default async function Home({ params }: { params: { id: string } }) {
 return <main className={``}></main>;
}
