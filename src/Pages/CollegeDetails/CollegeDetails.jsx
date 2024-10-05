import React from "react";
import { useLoaderData } from "react-router-dom";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

import pic1 from "../../assets/images/basket_ball.png";
import pic2 from "../../assets/images/cricket.png";
import pic3 from "../../assets/images/atheletics.png";
import pic4 from "../../assets/images/tech.png";
import pic5 from "../../assets/images/culture.png";
import pic6 from "../../assets/images/alumni.png";

const CollegeDetails = () => {
  const colleges = useLoaderData();

  return (
    <div>
      <section>
        <h2 className="my-8 text-center text-3xl font-bold text-gray-700">
          {colleges.name}
        </h2>
        <div className="mb-8">
          <img className="mx-auto rounded-lg" src={colleges.image} alt="" />
        </div>
      </section>

      <div className="flex justify-center">
        <Rating style={{ maxWidth: 300 }} value={colleges.rating} readOnly />
      </div>
      <section>
        <h2 className="text-xl font-bold text-center text-gray-700 my-4">
          Admission Process
        </h2>
        <div className="flex gap-8 justify-center mb-4">
          <h2 className="bg-green-200 p-4 rounded-lg">
            {" "}
            <span className="font-semibold">Admission starts :</span>{" "}
            {colleges.admission_dates.start}
          </h2>
          <h2 className="bg-green-200 p-4 rounded-lg">
            {" "}
            <span className="font-semibold">Admission ends :</span>{" "}
            {colleges.admission_dates.end}
          </h2>
        </div>
        <div className="w-[60%] mx-auto ">
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium text-left bg-gray-300">
              {Object.keys(colleges.admission_process)[0]}
            </div>
            <div className="collapse-content bg-gray-200">
              <p className="font-normal text-left">
                {Object.values(colleges.admission_process)[0]}
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium text-left bg-gray-300">
              {Object.keys(colleges.admission_process)[1]}
            </div>
            <div className="collapse-content bg-gray-200">
              <p className="font-normal text-left">
                {Object.values(colleges.admission_process)[1]}
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium text-left bg-gray-300">
              {Object.keys(colleges.admission_process)[2]}
            </div>
            <div className="collapse-content bg-gray-200">
              <p className="font-normal text-left">
                {Object.values(colleges.admission_process)[2]}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium text-left bg-gray-300">
              {Object.keys(colleges.admission_process)[3]}
            </div>
            <div className="collapse-content bg-gray-200">
              <p className="font-normal text-left">
                {Object.values(colleges.admission_process)[3]}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium text-left bg-gray-300">
              {Object.keys(colleges.admission_process)[4]}
            </div>
            <div className="collapse-content bg-gray-200">
              <p className="font-normal text-left">
                {Object.values(colleges.admission_process)[4]}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-center text-gray-700 my-8">
          Research Works
        </h2>
        <div className="my-8 bg-slate-300 p-4 rounded-lg">
          <h2>
            <span className="font-semibold">Research History : </span>
            {colleges.research_history}
          </h2>
          <div>
            <h2 className="font-semibold mt-4">Research works :</h2>
            {colleges.research_works.map((item) => (
              <li>{item} </li>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-center text-gray-700 my-8">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-3 gap-8 ">
          <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-green-200 shadow-xl shadow-slate-600">
            <h2 className="text-lg font-semibold text-center">
              {Object.keys(colleges.event_details)[0]}
            </h2>
            <p className="text-justify">
              {Object.values(colleges.event_details)[0]}
            </p>
          </div>
          <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-green-200 shadow-xl shadow-slate-600">
            <h2 className="text-lg font-semibold text-center">
              {Object.keys(colleges.event_details)[1]}
            </h2>
            <p className="text-justify">
              {Object.values(colleges.event_details)[1]}
            </p>
          </div>
          <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-green-200 shadow-xl shadow-slate-600">
            <h2 className="text-lg font-semibold text-center">
              {Object.keys(colleges.event_details)[2]}
            </h2>
            <p className="text-justify">
              {Object.values(colleges.event_details)[2]}
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-bold text-center text-gray-700 my-8">
          Sports Categories
        </h2>
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-blue-200 shadow-xl shadow-slate-600">
            <div className="w-16 mx-auto mb-2"></div>
            <h2 className="text-lg font-semibold text-center">
              {Object.keys(colleges.sports_categories)[0]}
            </h2>
            <p className="text-justify">
              {Object.values(colleges.sports_categories)[0]}
            </p>
          </div>
          <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-blue-200 shadow-xl shadow-slate-600">
            <div className="w-16 mx-auto mb-2"></div>
            <h2 className="text-lg font-semibold text-center">
              {Object.keys(colleges.sports_categories)[1]}
            </h2>
            <p className="text-justify">
              {Object.values(colleges.sports_categories)[1]}
            </p>
          </div>
          <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-blue-200 shadow-xl shadow-slate-600">
            <div className="w-16 mx-auto mb-2"></div>
            <h2 className="text-lg font-semibold text-center">
              {Object.keys(colleges.sports_categories)[2]}
            </h2>
            <p className="text-justify">
              {Object.values(colleges.sports_categories)[2]}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeDetails;
