import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Song = ({ name, rating }: { name: string; rating: number }) => {
 return (
  <div className="w-full p-3 rounded-xl flex items-center justify-between border-2 border-slate-100 mt-5 text-2xl cursor-pointer hover:scale-105 duration-300 font-bold">
   <div>{name}</div>
   <div className="flex items-center">
    {rating}
    <FontAwesomeIcon icon={faStar} className="text-yellow-600 ml-1" />
   </div>
  </div>
 );
};

export default Song;
