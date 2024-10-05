import { useContext } from "react";
import { Link } from "react-router-dom";
import GoogleSignIn from "../../components/GoogleSignIn";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import GithubSignIn from "../../components/GithubSignIn";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className=" w-[80%] mx-auto items-center justify-center">
        <div className=" lg:w-[50%] bg-orange-200 p-8  mx-auto text-gray-700 my-8 rounded-lg">
          <h2 className="text-center text-3xl font-bold">Please Register</h2>

          <form onSubmit={handleRegister} className="form-action">
            <div className="w-full">
              <label className="pl-4 " htmlFor="name">
                Your name:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
                type="text"
                placeholder="Your name"
                name="name"
                id="name"
              />
            </div>

            <div className="w-full">
              <label className="pl-4 " htmlFor="photo">
                Photo URL:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
                type="text"
                placeholder="photo url"
                name="photo"
                id="photo"
              />
            </div>

            <div className="w-full">
              <label className="pl-4 " htmlFor="email">
                Your email:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
                type="email"
                placeholder="Your email"
                name="email"
                id="email"
              />
            </div>

            <div className="w-full relative">
              <label className="pl-4 " htmlFor="password">
                Password:
              </label>
              <input
                className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
                type="password"
                placeholder="Password"
                name="password"
                id="password"
              />
            </div>

            <input
              className="btn  bg-[#d35400] py-2 w-full border-none text-lg mt-6 text-white rounded-lg hover:bg-[#30336b] "
              type="submit"
              value="Register"
            />
          </form>

          <div className="text-center mt-4 space-y-2">
            <p className="flex justify-center items-center">
              Sign In with
              <span
                //   onClick={handleGoogleSignIn}
                className="text-[#d35400] font-bold mx-2 cursor-pointer hover:underline flex gap-2"
              >
                <GoogleSignIn></GoogleSignIn>
                <GithubSignIn></GithubSignIn>
              </span>
            </p>
            <p>
              Already have and account? Please
              <Link to="/login" className="font-bold ml-2 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
