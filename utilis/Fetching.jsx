import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addFetch } from "./fetchData";

const Fetching = () => {
  const [page, setPage] = useState(1);
  const [dataa, setDataa] = useState([]);
  const dispatch = useDispatch();

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
    } catch (error) {
      console.error(error);
    }
  }

  const handelScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.documentElement.scrollHeight
    ) {
      setPage((p) => p + 1);
    }
  };

  useEffect(() => {
    animeFetch();
    console.log("useeffect");
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);
  dispatch(addFetch(dataa));

  return <div></div>;
};

export default Fetching;
