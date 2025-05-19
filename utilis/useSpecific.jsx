import { useEffect, useState } from "react";

const useSpecific = (api, l_id) => {
  const [vol, setVol] = useState([]);
  useEffect(() => {
    animeFetch();
    console.log("useSpecific")
     return(()=>{
      
     })
  }, []);

  async function animeFetch() {
    try {
      const responce1 = await fetch(api +l_id);
      const specificdata = await responce1.json();
      setVol(specificdata.data);
    } catch (error) {
        console.error(error)
    }
  }
  return vol;
};
export default useSpecific;
