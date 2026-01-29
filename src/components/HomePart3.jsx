import React from "react";
import cloud from "../assets/cloud.svg";

export const HomePart3 = () => {
  return (
    <div className="flex mx-10 my-4 justify-around ">
      <div className=" mx-4 w-3/12">
        <img src={cloud} alt="" className="h-20 w-20" />
        <h3 className="text-white text-xl font-bold mt-4">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="text-gray-400 text-sm font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </p>
      </div>
      <div className=" mx-4 mt-20 w-3/12">
        <img src={cloud} alt="" className="h-20 w-20" />
        <h3 className="text-white text-xl font-bold mt-4">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="text-gray-400 text-sm font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </p>
      </div>
      <div className=" mx-4 w-3/12 mt-40">
        <img src={cloud} alt="" className="h-20 w-20" />
        <h3 className="text-white text-xl font-bold mt-4">
          Lorem ipsum dolor sit amet.
        </h3>
        <p className="text-gray-400 text-sm font-semibold mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorem
          minima sequi sunt neque ipsum ipsam repudiandae, nisi quod itaque!
        </p>
      </div>
    </div>
  );
};
