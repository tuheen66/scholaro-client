import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../../components/GoogleSignIn";
import { AuthContext } from "../../providers/AuthProvider";
import GithubSignIn from "../../components/GithubSignIn";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, resetPassword } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result);
        navigate("/");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetPassword = () => {
    resetPassword(email.value)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Password reset mail sent to your email",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="w-full max-w-sm mx-auto text-gray-700 my-12 p-4 bg-orange-200 border border-gray-200  shadow-2xl shadow-slate-600 sm:p-6 md:p-8 d rounded-lg ">
        <form onSubmit={handleSignIn} className="space-y-6" action="#">
          <h5 className="text-2xl font-bold text-gray-700  text-center">
            Sign In
          </h5>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
              className="bg-gray-200 py-2 px-4 w-full mb-2 rounded-lg border-2 border-gray-400"
            />
          </div>

          <div>
            <button type="submit" onClick={handleResetPassword}>
              Forgot Password!
            </button>
          </div>

          <button
            type="submit"
            className="btn w-full px-6 bg-[#d35400] text-white border-none  hover:text-white hover:bg-[#30336b]"
          >
            Sign In
          </button>

          <div className="flex gap-2 items-center">
            <p>Sign in with </p>
            <GoogleSignIn></GoogleSignIn>
            <GithubSignIn></GithubSignIn>
          </div>

          <div className="text-sm font-medium text-gray-500 ">
            Not registered?{" "}
            <Link
              to="/register"
              className="text-[#d35400] hover:underline dark:text-[#d35400]"
            >
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
