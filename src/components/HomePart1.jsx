import React from "react";

export const HomePart1 = () => {
  return (
    <>
      <div className="flex   text-white my-12">
        <div className=" w-3/12 ml-36">
          <h2 className="bg-linear-to-t from-yellow-400 to-red-600 bg-clip-text text-transparent font-bold text-2xl">
            The wealth container platform.
          </h2>
          <h1 className="text-6xl font-bold text-white tracking-wider mt-4">
            The easiest way to launch your funs.
          </h1>
          <div className="my-4">
            <input
              type="text"
              placeholder="Enter Your email"
              className="bg-neutral-800 h-10 rounded-3xl pl-4 text-white outline-0"
            />
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-400 rounded-3xl font-bold capitalize">
              get Early Access
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
