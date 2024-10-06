import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const StudentProfile = () => {
  const profile = useLoaderData();

  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const candidate_name = form.candidate_name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const phone = form.phone.value;
    const address = form.address.value;

    const photo = form.photo.value;

    const studentInfo = {
      candidate_name,
      email,
      subject,
      phone,
      address,
      photo,
    };
    console.log(studentInfo);

    const id = profile._id;
    console.log(id);

    axios
      .put(`http://localhost:5000/myColleges/${id}`, studentInfo)
      .then((result) => {
        console.log(result.data);

        if (result.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Update successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      
      <section>
        <div className="md:flex justify-center space-x-20 mt-12">
          <div className="w-56 ">
            <img src={profile.photo} alt="" />
          </div>
          <div className="space-y-2">
            <h2 className="font-bold text-xl">{profile.candidate_name}</h2>
            <p>
              <span className="font-semibold">Email : </span>
              {profile.email}
            </p>
            <p>
              <span className="font-semibold">Phone : </span>
              {profile.phone}
            </p>
            <p>
              <span className="font-semibold">Address : </span>
              {profile.address}
            </p>
            <p>
              <span className="font-semibold">Date of Birth : </span>
              {profile.dob}
            </p>
            <p>
              <span className="font-semibold">Subject : </span>
              {profile.subject}
            </p>
            <p>
              <span className="font-semibold">College : </span>
              {profile.collegeName}
            </p>
          </div>
        </div>
      </section>
      <div className="my-12">
        <form
          onSubmit={handleSubmit}
          className=" mx-auto w-2/3 bg-blue-300 p-4 rounded-lg"
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
                defaultValue={profile.subject}
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
                defaultValue={profile.phone}
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
                defaultValue={profile.address}
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
                defaultValue={profile.dob}
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

          <button
            type="submit"
            className="btn  px-6 bg-[#d35400] text-white border-none   hover:bg-blue-600"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentProfile;
