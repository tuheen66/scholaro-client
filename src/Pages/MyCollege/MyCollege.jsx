import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
// import { Rating } from "@smastrom/react-rating";
// import "@smastrom/react-rating/style.css";

const MyCollege = () => {
  const colleges = useLoaderData();
  const { user } = useContext(AuthContext);

  console.log(user.email);

  const { data: college = [] } = useQuery({
    queryKey: ["college", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/colleges/${user?.email}`
      );

      return res.data;
    },
  });

  // const name = college.collegeName;

  const eventKeys = Object.keys(colleges.event_details);
  const eventValues = Object.values(colleges.event_details);

  const sportsKeys = Object.keys(colleges.sports_categories);
  const sportsValues = Object.values(colleges.sports_categories);

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const review = e.target.review.value;
    const rating = e.target.rating.value;

    const reviewInfo = {
      review,
      rating,
      collegeName: college.collegeName,
      studentName: user?.displayName,
      studentImage: user?.photoURL,
    };
    console.log(reviewInfo);

    axios
      .post("http://localhost:5000/reviews", reviewInfo)
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <section>
          <div className="md:flex justify-center space-x-20 mt-12">
            <div className="w-56 mx-auto mb-4">
              <img src={college.photo} alt="" />
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-xl">{college.candidate_name}</h2>
              <p>
                <span className="font-semibold">Email : </span>
                {college.email}
              </p>
              <p>
                <span className="font-semibold">Phone : </span>
                {college.phone}
              </p>
              <p>
                <span className="font-semibold">Address : </span>
                {college.address}
              </p>
              <p>
                <span className="font-semibold">Date of Birth : </span>
                {college.dob}
              </p>
              <p>
                <span className="font-semibold">Subject : </span>
                {college.subject}
              </p>
              <p>
                <span className="font-semibold">College : </span>
                {college.collegeName}
              </p>
            </div>
          </div>
        </section>

        <hr className=" border-b-2 border-gray-400 my-8" />

        <section>
          <h2 className="my-8 text-center text-3xl font-bold text-gray-700">
            {colleges.name}
          </h2>
          <div className="mb-8 lg:w-1/2 mx-auto">
            <img className="mx-auto rounded-lg" src={colleges.image} alt="" />
          </div>
        </section>

        {/* <div className="flex justify-center">
          <Rating style={{ maxWidth: 300 }} value={colleges.rating} readOnly />
        </div> */}

        <div className="lg:flex gap-12 ">
          <section className="flex-1">
            <h2 className="text-xl font-bold text-center text-gray-700 my-4">
              Admission Process
            </h2>
            <div className=" mb-4 space-y-4 text-center">
              <h2 className="bg-green-200 p-4 rounded-lg">
                {" "}
                <span className="font-semibold">Admission starts :</span>{" "}
                {colleges?.admission_dates?.start}
              </h2>
              <h2 className="bg-green-200 p-4 rounded-lg">
                {" "}
                <span className="font-semibold">Admission ends :</span>{" "}
                {colleges?.admission_dates?.end}
              </h2>
            </div>
            <div className=" mx-auto ">
              <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-left bg-gray-300">
                  Step 1
                </div>
                <div className="collapse-content bg-gray-200">
                  <p className="font-normal text-left">
                    {colleges?.admission_process.step1}
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-left bg-gray-300">
                  Step 2
                </div>
                <div className="collapse-content bg-gray-200">
                  <p className="font-normal text-left">
                    {colleges?.admission_process.step2}
                  </p>
                </div>
              </div>

              <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-left bg-gray-300">
                  Step 3
                </div>
                <div className="collapse-content bg-gray-200">
                  <p className="font-normal text-left">
                    {colleges?.admission_process.step3}
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-left bg-gray-300">
                  Step 4
                </div>
                <div className="collapse-content bg-gray-200">
                  <p className="font-normal text-left">
                    {colleges?.admission_process.step4}
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-base-200 mb-2">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium text-left bg-gray-300">
                  Step 5
                </div>
                <div className="collapse-content bg-gray-200">
                  <p className="font-normal text-left">
                    {colleges?.admission_process.step5}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flex-1">
            <h2 className="text-xl font-bold text-center text-gray-700 mb-8">
              Research Works
            </h2>
            <div className="my-8 bg-slate-300 p-4 rounded-lg">
              <h2>
                <span className="font-semibold">Research History : </span>
                {colleges.research_history}
              </h2>
              <div>
                <h2 className="font-semibold mt-4">Research works :</h2>
                {colleges?.research_works.map((item) => (
                  <li>{item} </li>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-xl font-bold text-center text-gray-700 my-8">
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-green-200 shadow-xl shadow-slate-600">
              <h2 className="text-lg font-semibold text-center">
                {eventKeys[0]}
              </h2>
              <p className="text-justify">{eventValues[0]}</p>
            </div>
            <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-green-200 shadow-xl shadow-slate-600">
              <h2 className="text-lg font-semibold text-center">
                {eventKeys[1]}
              </h2>
              <p className="text-justify">{eventValues[1]}</p>
            </div>
            <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-green-200 shadow-xl shadow-slate-600">
              <h2 className="text-lg font-semibold text-center">
                {eventKeys[2]}
              </h2>
              <p className="text-justify">{eventValues[2]}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-center text-gray-700 my-8">
            Sports Categories
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-blue-200 shadow-xl shadow-slate-600">
              <div className="w-16 mx-auto mb-2"></div>
              <h2 className="text-lg font-semibold text-center">
                {sportsKeys[0]}
              </h2>
              <p className="text-justify">{sportsValues[0]}</p>
            </div>
            <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-blue-200 shadow-xl shadow-slate-600">
              <div className="w-16 mx-auto mb-2"></div>
              <h2 className="text-lg font-semibold text-center">
                {sportsKeys[1]}
              </h2>
              <p className="text-justify">{sportsValues[1]}</p>
            </div>
            <div className="flex flex-col border-2 border-slate-400 rounded-lg p-4 bg-blue-200 shadow-xl shadow-slate-600">
              <div className="w-16 mx-auto mb-2"></div>
              <h2 className="text-lg font-semibold text-center">
                {sportsKeys[2]}
              </h2>
              <p className="text-justify">{sportsValues[2]}</p>
            </div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-xl font-bold text-center text-gray-700 my-8">
            Review
          </h2>
          <div>
            <form
              onSubmit={handleReviewSubmit}
              className=" lg:w-1/2 mx-auto  bg-blue-300 p-4 rounded-lg"
            >
              <div>
                <label
                  htmlFor="review"
                  className="block mb-2 text-sm font-medium text-gray-900e"
                >
                  Your review
                </label>
                <textarea
                  id="review"
                  name="review"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 mb-4 "
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="rating"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your rating
                </label>
                <input
                  type="text"
                  name="rating"
                  id="rating"
                  className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block  p-2.5 "
                />
              </div>
              <button className="btn px-6 bg-[#d35400] text-white border-none   hover:bg-blue-600">
                Submit
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyCollege;
