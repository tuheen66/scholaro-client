import React from "react";

const QuestionAnswer = () => {
  return (
    <div className="bg-purple-100 border-2 rounded-xl my-8 border-slate-300">
      <section className=" py-8 px-4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">
              1. How do I apply for a college?
            </h3>
            <p className="text-gray-600">
              To apply, simply create an account, fill out the application form,
              and submit it along with the required documents.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">
              2. Is the application process online?
            </h3>
            <p className="text-gray-600">
              Yes, the entire application process is online. You can apply from
              the comfort of your home at any time.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">
              3. What documents are required?
            </h3>
            <p className="text-gray-600">
              Commonly required documents include your academic transcripts, ID
              proof, and any other documents specific to the college.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">
              4. Can I apply to multiple colleges at once?
            </h3>
            <p className="text-gray-600">
              Yes, you can apply to multiple colleges using a single account and
              manage your applications from the dashboard.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-medium mb-2">
              5. How do I track my application status?
            </h3>
            <p className="text-gray-600">
              Once submitted, you can track the status of your application
              through your account dashboard at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuestionAnswer;
