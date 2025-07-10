import { useSelector } from "react-redux";

import Booked from "./ChildComponents/Booked";
import { useEffect, useState } from "react";

const Bookmark = () => {
  const [checkdata, SetCheckdata] = useState(true);
  const book = useSelector((e) => e.bookmark.items);
  console.log(book);
  useEffect(() => {
    if (book.length != 0) {
      SetCheckdata(false);
    }
  }, [book]);

  return (
    <div className="flex justify-center mt-10 h-[600px]">
      <div className="w-7/8  rounded-2xl pb-20  ">
        <h1 className="text-center text-2xl font-bold pt-5 pb-10">
          Bookmarked
        </h1>
        <div className=" bg-red-300 w-full h-0.5 z-20 mb-4"></div>

        {checkdata ? (
          <h1 className="text-center text-4xl font-bold pt-20 pb-10 opacity-70">
            Nothing is bookmarked yet
          </h1>
        ) : (
          <div className="flex flex-wrap">
            {book.map((ani) => (
              <Booked img={ani.images.jpg.image_url} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default Bookmark;
