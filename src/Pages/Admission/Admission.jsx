import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const { user } = useContext(AuthContext);

  const [collegeName, setCollegeName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  console.log(user);

  const handleCollege = (e) => {
    setCollegeName(e.target.innerText);
    setIsVisible(!isVisible);
  };
  console.log(collegeName);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const candidate_name = form.candidate_name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const dob = form.dob.value;
    const photo = form.photo.value;

    const studentInfo = {
      candidate_name,
      email,
      subject,
      phone,
      address,
      dob,
      photo,
      collegeName,
    };
    console.log(studentInfo);

    axios
      .post("http://localhost:5000/myCollege", studentInfo)
      .then((res) => {
        console.log(res.data);
        navigate(`/my-college/${collegeName}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mt-12">
      <div className="grid md:grid-cols-3 gap-4">
        <button
          onClick={handleCollege}
          className="bg-gray-400 px-4 py-2 rounded-lg font-bold"
        >
          Cedar Heights College
        </button>
        <button
          onClick={handleCollege}
          className="bg-gray-400 px-4 py-2 rounded-lg font-bold"
        >
          Maple Leaf College
        </button>
        <button
          onClick={handleCollege}
          className="bg-gray-400 px-4 py-2 rounded-lg font-bold"
        >
          Greenfield College of Arts and Sciences
        </button>
        <button
          onClick={handleCollege}
          className="bg-gray-400 px-4 py-2 rounded-lg font-bold"
        >
          Oakwood Business School
        </button>
        <button
          onClick={handleCollege}
          className="bg-gray-400 px-4 py-2 rounded-lg font-bold"
        >
          Riverdale University
        </button>
        <button
          onClick={handleCollege}
          className="bg-gray-400 px-4 py-2 rounded-lg font-bold"
        >
          Sunrise Institute of Technology
        </button>
      </div>

      <div className={`my-8 ${isVisible ? "visible" : "invisible"}`}>
        <form
          onSubmit={handleSubmit}
          className=" mx-auto lg:w-2/3 bg-blue-300 p-4 rounded-lg"
        >
          <div className="flex items-center gap-8 w-full ">
            <div className="   w-1/2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your name
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                name="candidate_name"
                id="candidate_name"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 mb-5"
                placeholder="candidate name"
                required
              />
            </div>

            <div className="w-1/2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                defaultValue={user?.email}
                name="email"
                id="email"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 mb-5"
                placeholder="your email"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-8 w-full ">
            <div className="mb-5 w-1/2">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=" Your subject"
                required
              />
            </div>
            <div className="mb-5 w-1/2">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your phone number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=" Your phone number"
                required
              />
            </div>
          </div>

          <div className="flex items-center gap-8 w-full ">
            <div className="mb-5 w-1/2">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=" Your address"
                required
              />
            </div>
            <div className="mb-5 w-1/2">
              <label
                htmlFor="dob"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your date of birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=" Your date of birth"
                required
              />
            </div>
          </div>

          <div className="mb-5 ">
            <label
              htmlFor="photo"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your photo URL
            </label>
            <input
              type="text"
              defaultValue={user?.photoURL}
              name="photo"
              id="photo"
              className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              placeholder=" Your photo URL"
              required
            />
          </div>
          {user && (
            <button
              type="submit"
              className="btn  px-6 bg-[#d35400] text-white border-none   hover:bg-blue-600"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Admission;
