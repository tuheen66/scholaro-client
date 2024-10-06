import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const CollegeCard = ({ college }) => {





  
  return (
    <div>
      <div className=" flex flex-col flex-grow card bg-blue-200  shadow-xl shadow-slate-600 h-[550px]">
        <figure>
          <img src={college.image} alt="college" />
        </figure>
        <div className=" flex-grow space-y-4 p-4 ">
          <h2 className="card-title">{college.name}</h2>

          <p className="flex items-center">
                  <span className="font-semibold">Rating :</span>
                  <Rating style={{ maxWidth: 150 }} value={college.rating} readOnly />
                </p>
          <p>
            <span className="font-semibold">Admission start : </span>
            {college.admission_dates.start}{" "}
          </p>
          <p>
            <span className="font-semibold">Admission end : </span>
            {college.admission_dates.end}{" "}
          </p>
          <p>
            <span className="font-semibold">No of Research work : </span>
            {college.research_works.length}{" "}
          </p>
        </div>
        <div className="card-actions justify-center p-4 ">
          <Link className="w-full" to={`/college-details/${college._id}`}>
            <button className="btn bg-[#d35400] border-none hover:bg-[#30336b] text-white w-full">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
