import Logo from "./logo";
import Login from "./login";
import Menu from "./menu";

const Navbar = () => {
 return (
  <div className="w-full h-16 flex justify-between items-center text-6xl mb-7">
   <Logo />
   <Menu />
   <Login />
  </div>
 );
};

export default Navbar;
