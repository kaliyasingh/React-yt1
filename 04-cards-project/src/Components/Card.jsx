import React from "react";
import { Bookmark } from "lucide-react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <div>
        <div className="top">
          <img src={data.brandLogo} alt={data.company} />

          <button>
            <Bookmark size={18} />
          </button>
        </div>

        <div className="center">
          <h3>
            {data.company} <span>{data.posted}</span>
          </h3>

          <h2>{data.position}</h2>

          <div className="tag">
            <h4>{data.tag1}</h4>
            <h4>{data.tag2}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{data.pay}</h3>
          <p>{data.location}</p>
        </div>

        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;