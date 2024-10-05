import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // #d35400

  const handleLogOut = () => {
    logOut().then(() => {
      console.log("Logged out successfully");
    });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/colleges"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/admission"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-college"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "600" : "",
              backgroundColor: isActive ? "#d35400" : "",
              textDecorationColor: isActive ? "#a9106b" : "none",
              color: isActive ? "White" : "#374177",
              padding: "6px 12px",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          My College
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-sky-200 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Scholaro</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{navItems}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <div className="flex items-center gap-2">
                <p>{user.displayName}</p>
                <img className="w-14 rounded-full" src={user.photoURL} alt="" />
                <button
                onClick={handleLogOut}
                className="btn px-6 bg-[#d35400] text-white border-none  hover:text-blue-500 hover:bg-orange-400">
                  Log Out
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <Link to={"/login"}>
                  <button className="btn w-full px-6 bg-[#d35400] text-white border-none  hover:text-blue-500 hover:bg-orange-400">
                    Sign In
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
