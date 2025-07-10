import { useEffect } from "react";
import "../css/anime.css";
import { useState } from "react";
import { useParams } from "react-router";
import useSpecific from "../../utilis/useSpecific";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { SlControlPlay } from "react-icons/sl";
import { additems } from "../../utilis/bookmarkSlice";
import { removeitems } from "../../utilis/bookmarkSlice";

import React from "react";
import { useDispatch } from "react-redux";

const Anime = () => {
  const { l_id } = useParams();
  const [readmore, setReadmore] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [vol, setVol] = useState([]);

  console.log(l_id)

  useEffect(() => {
    animeFetch();
    console.log("useSpecific");
  }, []);

  async function animeFetch() {
    try {
      const responce1 = await fetch("https://api.jikan.moe/v4/anime/" + l_id);
      const specificdata = await responce1.json();
      setVol(specificdata.data);
    } catch (error) {
      console.error(error);
    }
  }

  function readText() {
    setReadmore(!readmore);
  }
  const dispatch = useDispatch();
  function handelDispatch(vol) {
    if (clicked == false) {
      dispatch(additems(vol));
    } else {
      dispatch(removeitems(vol));
    }
    setClicked(!clicked);
    console.log(clicked);
  }
  const z = String(vol.synopsis);

  return (
    <div className="w-full flex justify-center pt-10 pb-10">
      <div className="bg-neutral-100 w-7/8 flex rounded-3xl flex-wrap">
        <div className="p-20 h-fit-contet w-1/2 sm:w-[400px] ">
          <img
            src={vol?.images?.jpg?.large_image_url}
            alt="images"
            className=" rounded-3xl text-sm  sm:w-[300px]"
          />
        </div>
        <div className=" w-[200px] sm:w-[600px] ">
          <div className="flex flex-col pt-20 ">
            <h1 className="text-2xl font-bold">{vol.title_english}</h1>
            <h4 className="opacity-60 pb-10 pt-2">{vol.title_japanese}</h4>
            <p className="w-3xl" onClick={readText}>
              {readmore ? z.slice(0, 500) : z}
              <span className="text-emerald-500">
                {readmore ? "...read more" : "...show less"}{" "}
              </span>
            </p>
            <div className="flex flex-row gap-10 pt-10  w-180">
              {!clicked ? (
                <button className="h-13 border-2 border-red-400 rounded-2xl w-80 flex items-center justify-center gap-2" onClick={()=>handelDispatch(vol)}>
                  <FaRegBookmark className="" />
                  Bookmark
                </button>
              ) : (
                <button
                  className="h-13 bg-red-400 rounded-2xl w-80 flex items-center justify-center gap-2"
                  onClick={() => handelDispatch(vol)}
                >
                  <FaBookmark className="" />
                  Bookmarked
                </button>
              )}
              <button className="h-13 border-2 border-red-300 bg-red-400 rounded-2xl w-80 flex items-center justify-center gap-2">
                <SlControlPlay />
                Watch Trailer
              </button>{" "}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Anime;
