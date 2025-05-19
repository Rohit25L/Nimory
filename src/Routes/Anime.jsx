import { useEffect } from "react";
import "../css/anime.css";
import { useState } from "react";
import { useParams } from "react-router";
import useSpecific from "../../utilis/useSpecific";
import { SpecificAnimeApi } from "../../utilis/constnce";

import React from "react";

const Anime = () => {
  const { l_id } = useParams();
  const [readmore, setReadmore] = useState(true);

  const vol = useSpecific(SpecificAnimeApi, l_id);
  console.log(vol);
  const z = String(vol.synopsis);

  function readText() {
    setReadmore(!readmore);
  }

  return (
    <div className="w-full flex justify-center pt-10 pb-10">
      <div className="bg-neutral-100 w-7/8 flex rounded-3xl">
        <div className="p-20 h-[600px] w-1/2 sm:w-[400px]">
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
            <div className="flex flex-row bg-black text-cyan-50">
              <button>fcgfcgf</button>
              <button> hvgh</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Anime;
