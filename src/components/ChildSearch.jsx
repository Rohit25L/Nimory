import React from "react";

const ChildSearch = ({ id, img, title, rating, episodes, inquary }) => {
  if (title == 0) {
    title = "";
  }
  const lowerTitle = title?.toLowerCase() || "";
  const lowerQuery = inquary.toLowerCase();

  const isMatch = lowerTitle.startsWith(lowerQuery);

  let firstPart = title;
  let fadedPart;

  if (isMatch) {
    firstPart = title?.slice(inquary.length);
    fadedPart = title?.slice(0, inquary.length);
  }

  return (
    <div className="flex w-full gap-1 pb-1">
      <img
        src={img}
        alt=""
        className="h-[100px] rounded-2xl bg-black w-[80px] bg-cover"
      />

      <div className="w-[380px]  pl-4">
        <p className="pt-1 font-bold">
          {fadedPart}<span className="text-black font-normal">{firstPart}</span>
        </p>
        <p className=" text-gray-700 font-semibold">
          Episodes :{episodes ? episodes : " Null"}
        </p>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
};

export default ChildSearch;
