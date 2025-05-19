import React from "react";
import "../css/Card.css";
import VanillaTilt from "vanilla-tilt";

function Bcard({ image, title, episodes, status, rating, rank }) {
  const cardRef = React.useRef(null);

  React.useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 10,
        speed: 200,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);
  function string (){
    const a = title.length;
    let b =0
    if(a>25){
    return b = title.slice(25);
    }
  }
  const d= string()

  return (
    <div className="anime-card" ref={cardRef}>
      <img src={image} alt={title} className="anime-image"></img>

      <div className="anime-info">
        <p className="anime-status">{status}</p>
        <p className="anime-episodes">{episodes} episodes</p>
        <h4 className="anime-title">{title.replaceAll(d,"...")}</h4>
        <div className="anime-meta">
          <span className="anime-rating">⭐ {rating}</span>
          <span className="anime-rank">| # {rank} Ranking</span>
        </div>
      </div>
    </div>
  );
}

export default Bcard;
