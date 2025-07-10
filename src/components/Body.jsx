import React, { useEffect, useState } from "react";
import Card from "./Card";
import Bcard from "./Bcard";
import Simmer from "./Simmers";
import { Link } from "react-router";
import { TopAnimeApi } from "../../utilis/constnce";
import { useSelector } from "react-redux";
import { AiOutlineDoubleRight } from "react-icons/ai";

const Body = () => {
  const photos = useSelector((e) => e.apiData);
  console.log(photos);
  return photos.length == 0 ? (
    <Simmer />
  ) : (
    <div className="app-container">
      <div className="headcon">
        <div className="top-section part1">
          {photos.slice(2, 3).map((photo) => (
            <Card
              key={photo?.mal_id}
              image={photo?.trailer?.images?.large_image_url}
              title={photo?.title_english || photo?.title}
              size="large"
              classs="card"
            />
          ))}
        </div>
        <div className="top-section part2">
          {photos.slice(3, 4).map((photo) => (
            <Card
              key={photo?.mal_id}
              image={photo?.trailer?.images?.large_image_url}
              title={photo?.title}
              size="large"
              classs="card"
            />
          ))}
        </div>
      </div>
      <div className="horizontal-scroll h-[500px] overflow-hidden">
        <div className="w-7/8 flex flex-col justify-center">
          <div className=" bg-red-300 w-full h-0.5 z-20 mb-4"></div>
          <div className="flex justify-between">
            <h2 className="w-40 font-bold text-2xl">Top Animes</h2>
            <Link to="/topanime" className=" z-20 w-25 self-baseline-last border-0 ml-4 pb-2  text-gray-700 flex content-center gap-1 text-sm">
              View more
              <AiOutlineDoubleRight className=" h-full pt-[2.5px]" />
            </Link>
          </div>
        </div>
        {photos.slice(0,6).map((photo) => (
          <Link
            className="linkre"
            to={"/anime/" + photo?.mal_id}
            key={photo?.mal_id}
          >
            <Bcard
              image={photo?.images.jpg.image_url}
              title={photo?.title}
              episodes={photo?.episodes}
              status={photo?.status}
              rating={photo?.score}
              rank={photo?.rank}
              size="large"
              classs="sm-card"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
