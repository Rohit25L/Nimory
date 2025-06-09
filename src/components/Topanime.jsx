import React from "react";
import { useSelector } from "react-redux";
import Bcard from "./Bcard";
import Fetching from "../../utilis/Fetching";
import { Link } from "react-router";

const Topanime = () => {
  const photos = useSelector((e) => e.apiData);

  return (
    <div className="w-full flex justify-center">
      <div className="w-7/8 flex justify-center flex-wrap gap-5">
      {photos.map((photo) => (
        <Link
          className="linkre"
          to={"/anime/" + photo?.malid}
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
      <Fetching></Fetching>
      </div>
    </div>
  );
};

export default Topanime;
