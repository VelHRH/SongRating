import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPlus } from "@fortawesome/free-solid-svg-icons";

const Profile = (props: {
 children: string;
 imgUrl: string;
 rated: number;
 created: number;
}) => {
 const { children, imgUrl, rated, created } = props;
 return (
  <div
   className={`mb-4 w-full duration-700 text-xl from-slate-900 text-slate-50 to-sky-800 bg-gradient-to-tr p-2 flex flex-col items-center rounded-lg hover:scale-105 cursor-pointer`}
  >
   <img
    src={imgUrl}
    alt="Profile"
    className="w-20 h-20 rounded-full object-cover mb-2"
   ></img>
   <div className="w-11/12 text-center overflow-hidden">{children}</div>
   <div className="flex w-full justify-around mt-2">
    <div className="flex items-center">
     <FontAwesomeIcon icon={faCheck} className="text-sm" />
     <div className="ml-2">{rated}</div>
    </div>

    <div className="border-l-2 border-slate-50"></div>
    <div className="flex items-center">
     <FontAwesomeIcon icon={faPlus} className="text-sm" />
     <div className="ml-2">{created}</div>
    </div>
   </div>
  </div>
 );
};

export default Profile;
