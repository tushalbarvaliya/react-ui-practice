import React from "react";

export const HomePart4 = () => {
  return (
    <div className=" w-full mb-20">
      <h2 className="text-center text-3xl font-bold bg-linear-to-t from-yellow-400 to-red-600 bg-clip-text text-transparent ">
        Contact Us
      </h2>
      <h1 className="text-6xl text-white text-center">
        Get in touch{" "}
        <strong className="font-extrabold bg-linear-to-t from-yellow-400 to-red-600 bg-clip-text text-transparent ">
          With Us
        </strong>
      </h1>
      <p className="text-center mt-4 text-slate-500 font-bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
      <form className="flex flex-col justify-center ">
        <div className="text-white  flex justify-center gap-10 mt-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="bg-neutral-800 h-10 rounded-3xl pl-4 text-white outline-0 w-3/12"
          />
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className=" h-10 rounded-3xl pl-4 text-white outline-0 w-3/12 bg-neutral-800"
          />
        </div>
        <div className="flex justify-center mt-4">
          <input
            type="text"
            placeholder="Enter Your Message here..."
            className="rounded-3xl pl-4 text-white outline-0 w-4/12 bg-neutral-800 h-20"
          />
        </div>
        <div className=" mx-auto">
          <button
            type="submit"
            className="px-4 py-2 rounded-2xl mt-4 text-white bg-blue-700 font-bold text-lg  w-fit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
