import React, { useEffect, useState } from "react";
// import './styles.css'
function Chipsinput() {
  const [chips, setChips] = useState([]);
  const [inputval, setInputval] = useState("");
  const [deleted, setDeleted] = useState("");
  function chipssubmit(e) {
    if(e.target.value==""){
        console.log("empty")
        return{

    }

    }
    if (e.key === "Enter" ) {
      setChips([...chips, e.target.value]);
      setInputval("");
      console.log(chips)
    }
  }

  function deletechip(index) {
    if(chips[index]){
        chips.splice(index,1)
    }
    setChips([...chips])
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        onChange={(e) => setInputval(e.target.value)}
        value={inputval}
        onKeyDown={(e) => chipssubmit(e)}
      />
      <div className="chipsDis">
        {chips.map((c, index) => {
          return (
            <div className="chip">
              <p>{c}</p>
              <button className="x" onClick={()=>deletechip(index)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chipsinput;
