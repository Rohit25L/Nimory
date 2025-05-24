import { useEffect, useState } from "react";
import ChildSearch from "./ChildSearch";
import { Link } from "react-router";

const SearchBar = () => {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState(false);
  const [inquary, setInquary] = useState("");
  const [data, setData] = useState([]);
  const [cache, setCache] = useState([]);

  async function quaryfetch() {
    if (cache[inquary]) {
      setData(cache[inquary]);
      return;
    }
    try {
      const fetchh = await fetch("https://api.jikan.moe/v4/anime?q=" + inquary);
      const fetchedData = await fetchh.json();
      setData(fetchedData.data);
      setCache((prev) => ({ ...prev, [inquary]: fetchedData?.data }));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const time = setTimeout(() => {
      quaryfetch();
    }, [400]);
    return () => clearTimeout(time);
  }, [inquary]);

  function handelSuggection() {
    setShow(true);
  }
  function handelhide() {
    if(hide==true){
    setShow(true);
    }else{
    setShow(false);
    }
  }
  function handelInput(e) {
    setInquary(e.target.value);
  }
  function handelDiv(){
        setHide(!hide);
  }
  return (
    <div className="h-12 flex flex-col mt-1">
      <input
        type="text"
        className="w-[500px] pl-4 h-11 border-2 border-black rounded-3xl z-15 bg-white "
        value={inquary}
        onChange={handelInput}
        onFocus={handelSuggection}
        onBlur={handelhide}
      />
      {show && data.length != 0 && (
        <div className="absolute max-h-[445px] border-2 border-t-0 border-black w-[480px] mt-5 ml-[10px] z-10 bg-white rounded-2xl overflow-hidden">
          <div className="pt-7 pl-2 pr-2 ">
            {data.map((data) => {
              return (
                <Link to={"/anime/"+data?.mal_id} key={data?.mal_id} onFocus={handelDiv}><ChildSearch
                  id={data?.mal_id}
                  img={data?.images?.jpg?.image_url}
                  title={data?.title_english}
                  rating={data?.score}
                  episodes={data.episodes}
                /></Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchBar;
