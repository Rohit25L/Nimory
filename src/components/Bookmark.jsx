import { useSelector } from "react-redux";

import Booked from "./ChildComponents/Booked";
const Bookmark = () => {
  const book = useSelector((e) => e.bookmark.items);
  console.log(book);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-7/8  rounded-2xl pb-20  ">
        <h1 className="text-center text-2xl font-bold pt-5 pb-10">
          Bookmarked
        </h1>
        <div className="flex flex-wrap ">
          <Booked/>
        </div>
      </div>
    </div>
  );
};
export default Bookmark;
