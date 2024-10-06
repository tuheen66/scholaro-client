import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import CollegeCard from "../../../components/CollegeCard";
import HomeCollegeCard from "../../../components/HomeCollegeCard";
import StudentsGallery from "../../../components/StudentsGallery";
import ReviewCard from "../../../components/ReviewCard";
import CallToAction from "../CallToAction/CallToAction";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import QuestionAnswer from "../Q&A/QuestionAnswer";

const Home = () => {
  const [collegeName, setCollegeName] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const [search, setSearch] = useState({});

  const { data: college = [] } = useQuery({
    queryKey: ["college", collegeName],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/college-name/${collegeName}`
      );

      const result = college.name === collegeName;
      setSearch(res.data);
      return res.data;
    },
  });

  const handleNameSearch = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    setCollegeName(name);
  };
  console.log(collegeName);

  const { data: colleges = [] } = useQuery({
    queryKey: ["colleges"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/colleges");
      return res.data;
    },
  });

  const selectedColleges = colleges.slice(0, 3);

  return (
    <div className="mt-8">
      <div className="flex justify-center">
        <form onSubmit={handleNameSearch}>
          <input
            className=" px-4 py-2 rounded-l-lg bg-gray-200"
            name="name"
            type="text"
            placeholder="search college name"
          />
          <button
            className="py-2 px-6 bg-[#d35400] text-white border-none rounded-r-lg hover:bg-blue-600"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>

      <div>
        {college.name === collegeName && (
          <>
            <div className="w-96 flex flex-col flex-grow card bg-blue-200  shadow-xl shadow-slate-600 h-[550px]">
              <figure>
                <img src={search.image} alt="college" />
              </figure>
              <div className=" flex-grow space-y-4 p-4 ">
                <h2 className="card-title">{search.name}</h2>

                <p className="flex items-center">
                  <span className="font-semibold">Rating :</span>
                  <Rating
                    style={{ maxWidth: 150 }}
                    value={college.rating}
                    readOnly
                  />
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
                <Link className="w-full" to={`/college-details/${search._id}`}>
                  <button className="btn bg-[#d35400] border-none hover:bg-[#30336b] text-white w-full">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="grid  gap-8 my-12">
        {selectedColleges.map((college) => (
          <HomeCollegeCard
            key={college._id}
            college={college}
          ></HomeCollegeCard>
        ))}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-center text-gray-700 my-4">
          Students Gallery
        </h2>
        <StudentsGallery></StudentsGallery>
      </div>

      <div>
        <h2 className="text-xl font-bold text-center text-gray-700 my-4">
          What our students say....
        </h2>
        <ReviewCard></ReviewCard>
      </div>

      <div>
        <h2 className="font-bold text-center text-xl text-gray700">
          Links to some of research papers conducted and written by our students
        </h2>
        <div className="space-y-4 text-center bg-gray-300 py-4 rounded-lg mt-4">
          <Link to="https://drive.google.com/file/d/10l4fyFX3WIIOY4KRXwjKftjyMFnGhPrt/view?usp=sharing">
            <h2 className="font-semibold mb-4 bg-white w-[90%] lg:w-2/3 mx-auto py-2  rounded-lg">
              Artificial Intelligence in Healthcare: Revolutionizing Diagnosis
              and Treatment
            </h2>
          </Link>
          <Link to="https://drive.google.com/file/d/1KZvfKqKTMnz93PB_OjSDHQN-EjAmyLCF/view?usp=sharing">
            <h2 className="font-semibold mb-4 bg-white w-[90%] lg:w-2/3 mx-auto py-2 rounded-lg">
              The Impact of Digital Learning on Academic Performance in Higher
              Education
            </h2>
          </Link>
          <Link to="https://drive.google.com/file/d/1ZmcAI6us4y8Px3cmBrprGjDtrgyDmLbE/view?usp=sharing">
            <h2 className="font-semibold mb-4 bg-white w-[90%] lg:w-2/3 mx-auto py-2 rounded-lg">
              Sustainable Tourism: Balancing Economic Growth with Environmental
              Conservation
            </h2>
          </Link>
        </div>
      </div>

      <div>
        <CallToAction></CallToAction>
      </div>

      <div>
        <KeyFeatures></KeyFeatures>
      </div>

      <div>
        <QuestionAnswer></QuestionAnswer>
      </div>
    </div>
  );
};

export default Home;
