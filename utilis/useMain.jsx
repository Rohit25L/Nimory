import { useEffect, useState } from "react";

const useSpecific = (api) => {
  const [vol, setVol] = useState([]);
  useEffect(() => {
    animeFetch();
  }, []);

  async function animeFetch() {
    try {
      const responce1 = await fetch(api);
      const specificdata = await responce1.json();
      setVol(specificdata.data);
    } catch (error) {
        console.error(error)
    }
  }
  return vol;
};
export default useSpecific;
