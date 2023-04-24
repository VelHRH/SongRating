import RegisterForm from "@/components/registerForm";

const Register = ({ params }: { params: { id: string } }) => {
 return (
  <main className={`w-full flex flex-col items-center`}>
   <div className="text-4xl font-bold mb-7">Registration</div>
   <RegisterForm />
  </main>
 );
};

export default Register;
