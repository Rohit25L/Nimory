import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addFetch } from "./fetchData";
import SimmerBody from "../src/components/ChildComponents/SimmerBody";
import TopanimeSimmers from "../src/components/ChildComponents/TopanimeSimmers";
const Fetching = () => {
  const [page, setPage] = useState(1);
  const [dataa, setDataa] = useState([]);
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(true);

  async function animeFetch() {
    try {
      const responce1 = await fetch(
        "https://api.jikan.moe/v4/top/anime?limit=12&page=" + page
      );

      const specificdata = await responce1.json();
      setDataa((p) => [...p, ...specificdata?.data]);
      if (page == 1) {
        dispatch(addFetch(specificdata?.data));
      }
      setFetching(false);
    } catch (error) {
      console.error(error);
    }
  }

  const handelScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setFetching(true);
      setPage((p) => p + 1);
    }
  };

  useEffect(() => {
    animeFetch();
    const time = setTimeout(() => {
      document.documentElement.scrollTop =
        document.documentElement.scrollTop - 300;
    }, [300]);

    return () => clearTimeout(time);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  dispatch(addFetch(dataa));

  return (
    <div>
      {fetching && (
        <div className="flex w-full justify-center">
          <div className="w-7/8 flex justify-center flex-wrap gap-5">
            <TopanimeSimmers />
          </div>
        </div>
      )}
    </div>
  );
};

export default Fetching;
