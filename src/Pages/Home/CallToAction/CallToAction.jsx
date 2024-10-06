import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div>
      <section className="bg-blue-300 text-white py-8 px-4 text-center rounded-lg my-8">
        <h2 className="text-2xl font-semibold mb-4">
          Apply Today for Your Dream College
        </h2>
        <p className="text-lg mb-6">
          Don't miss out on securing your spot. Apply now for a seamless
          admission process.
        </p>
        <Link to="/admission"
          
          className="btn  px-6 bg-[#d35400] text-white border-none   hover:bg-blue-600"
        >
          Start Application
        </Link>
      </section>
    </div>
  );
};

export default CallToAction;
