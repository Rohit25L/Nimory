import React from "react";

const ChildSearch = ({id,img,title,rating,episodes}) => {
    if (title==0){
        title=""
    }
  return (
    <div className="flex w-full gap-1 pb-1">
      <img src={img} alt="" className="h-[100px] rounded-2xl bg-black w-[80px] bg-cover"/>
      <div className="w-[380px]  pl-4">

        <p className="pt-1 font-bold ">{title ? title : "Not rated"}</p>
        <p className=" text-gray-700 font-semibold">Episodes :{episodes ? episodes : " Null" }</p>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
};

export default ChildSearch;
