import React from "react";
import "./Row.css";
import {Link} from 'react-router-dom'

const Row = ({ data }) => {

  // console.log(data);

  return (
    <Link  style={{textDecoration:'none',color:'black'}} to={`/${data.id}`} >
    <div className="row">
      <div className="row-items">
        
        <p>
          <span>Code  </span><span className=".span">:</span> {data.code}
        </p>
        <p>
          <span>Description</span><span className=".span">:</span> {data.description}
        </p>
        <p>
          <span>Size</span> <span className=".span">:</span>{data.size}
        </p>
        <p>
          <span>MRP</span><span className=".span">:</span> {data.mrp}
        </p>
        <div>
          <img src={data.imagetwo} alt="image" />
        </div>
        {/* <img src="https://drive.google.com/uc?export=view&id=132T9XLWAGJluoS6v2U6if8YqyQZvKHpL" alt="image" /> */}
        
      </div>
      {/* <div className="line"></div> */}
    </div>
    </Link>
  );
};

export default Row;
