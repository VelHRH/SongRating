import AddForm from "@/components/addForm";

export default async function Home({ params }: { params: { id: string } }) {
 return (
  <main className={`flex w-full flex-col items-center`}>
   <div className="text-5xl font-bold mb-5">Adding song</div>
   <AddForm />
  </main>
 );
}
