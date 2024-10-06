import React from "react";
import { Link } from "react-router-dom";

const HomeCollegeCard = ({ college }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl shadow-slate-600">
        <figure className="lg:w-1/2 pl-4 ">
          <img
            className="rounded-lg shadow-lg shadow-slate-400"
            src={college.image}
            alt="college"
          />
        </figure>
        <div className="space-y-4 p-8 lg:w-1/2">
          <h2 className="card-title">{college.name}</h2>
          <p>
            <span className="font-semibold">Admission start : </span>
            {college.admission_dates.start}{" "}
          </p>
          <p>
            <span className="font-semibold">Admission end : </span>
            {college.admission_dates.end}{" "}
          </p>
          <div className="md:flex gap-20">
            <div>
              <p className="font-semibold">Events :</p>
              {college.events.map((event) => (
                <li>{event}</li>
              ))}
            </div>
            <div>
              <p className="font-semibold">Sports :</p>
              {college.sports.map((sport) => (
                <li>{sport}</li>
              ))}
            </div>
          </div>
          <p>
            <span className="font-semibold">Research History : </span>
            {college.research_history}{" "}
          </p>

          <div className="card-actions justify-center  ">
            <Link className="w-full" to={`/college-details/${college._id}`}>
              <button className="btn bg-[#d35400] border-none hover:bg-[#30336b] text-white w-full">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCollegeCard;
