import React, { useEffect, useState } from "react";
import Card from "./Card";
import Bcard from "./Bcard"
import Simmer from "./Simmers";
import { Link } from "react-router";
import { TopAnimeApi } from "../../utilis/constnce";
import { useSelector } from "react-redux";


const Body = () => {

  const photos = useSelector((e)=>e.apiData)
  return photos.length ==0?(
    <Simmer/>
  ):(
    <div className="app-container">
    <div className="headcon">
      <div className="top-section part1">
        {photos.slice(0, 1).map((photo) => (
          <Card
            key={photo?.mal_id}
            image={photo?.trailer?.images?.large_image_url}
            title={photo?.title_english || photo?.title }
            size="large"
            classs="card"
          />
        ))}
      </div>
     <div className="top-section part2">
        {photos.slice(5, 6).map((photo) => (
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
      <div className="horizontal-scroll">
        {photos.slice(0).map((photo) => (
          <Link className="linkre" to={"/anime/"+photo?.malid}key={photo?.mal_id}><Bcard
            image={photo?.images.jpg.image_url}
            title={photo?.title}
            episodes={photo?.episodes}
            status={photo?.status}
            rating={photo?.score}
            rank={photo?.rank}
            size="large"
            classs="sm-card"
          /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
