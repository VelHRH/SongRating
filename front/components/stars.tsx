"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Stars = () => {
 const [curHover, SetCurHover] = useState(0);
 const [rating, setRating] = useState(0);
 const handleClick = (r: number) => {
  (rating === 0 || r === 0) && setRating(r);
 };
 return (
  <div className="w-full flex flex-col items-center">
   <div className="flex text-2xl cursor-pointer mb-2">
    <FontAwesomeIcon
     icon={faStar}
     onMouseOver={() => rating === 0 && SetCurHover(1)}
     onMouseOut={() => rating === 0 && SetCurHover(0)}
     onClick={() => handleClick(1)}
     className={`mr-1 duration-200 ${
      curHover >= 1 || rating >= 1 ? "text-yellow-600" : "text-slate-500"
     }`}
    />
    <FontAwesomeIcon
     icon={faStar}
     onMouseOver={() => rating === 0 && SetCurHover(2)}
     onMouseOut={() => rating === 0 && SetCurHover(0)}
     onClick={() => handleClick(2)}
     className={`mr-1 duration-200 ${
      curHover >= 2 || rating >= 2 ? "text-yellow-600" : "text-slate-500"
     }`}
    />
    <FontAwesomeIcon
     icon={faStar}
     onMouseOver={() => rating === 0 && SetCurHover(3)}
     onMouseOut={() => rating === 0 && SetCurHover(0)}
     onClick={() => handleClick(3)}
     className={`mr-1 duration-200 ${
      curHover >= 3 || rating >= 3 ? "text-yellow-600" : "text-slate-500"
     }`}
    />
    <FontAwesomeIcon
     icon={faStar}
     onMouseOver={() => rating === 0 && SetCurHover(4)}
     onMouseOut={() => rating === 0 && SetCurHover(0)}
     onClick={() => handleClick(4)}
     className={`mr-1 duration-200 ${
      curHover >= 4 || rating >= 4 ? "text-yellow-600" : "text-slate-500"
     }`}
    />
    <FontAwesomeIcon
     icon={faStar}
     onMouseOver={() => rating === 0 && SetCurHover(5)}
     onMouseOut={() => rating === 0 && SetCurHover(0)}
     onClick={() => handleClick(5)}
     className={`mr-1 duration-200 ${
      curHover >= 5 || rating >= 5 ? "text-yellow-600" : "text-slate-500"
     }`}
    />
   </div>
   <button
    onClick={() => handleClick(0)}
    className={`text-blue-600 ${rating === 0 ? "hidden" : "flex"}`}
   >
    Change my rating
   </button>
  </div>
 );
};

export default Stars;
