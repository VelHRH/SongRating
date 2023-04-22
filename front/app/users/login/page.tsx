// @ts-nocheck

import LoginForm from "@/components/loginForm";

export default async function Home({ params }: { params: { id: string } }) {
 return (
  <main className={`w-full flex flex-col items-center`}>
   <div className="text-4xl font-bold mb-7">Login</div>
   <LoginForm />
  </main>
 );
}
