import React from "react";
import gitlogo from "../assets/git-logo.svg";
export const Navbar = () => {
  const navstyle = {
    // display:'flex',
    // backgroundColor:'#013db5'
  };

  const imgStyle = {};
  const imgDivStyle = {};

  const ulStyle = {};
  const liStyle = {};
  return (
    <>
      <nav
        style={navstyle}
        className="flex justify-between mx-12 items-center "
      >
        <div style={imgDivStyle} className="flex items-center">
          <img src={gitlogo} alt="" style={imgStyle} />
          <h1 className="text-5xl font-bold self-end text-white">GitHub</h1>
        </div>
        <div>
          <ul style={ulStyle} className="flex gap-4">
            <li
              style={liStyle}
              className="text-xl text-white font-semibold hover:text-blue-800 hover:underline"
            >
              Home
            </li>
            <li
              style={liStyle}
              className="text-xl text-white font-semibold hover:text-blue-800 hover:underline"
            >
              Portfolio
            </li>
            <li
              style={liStyle}
              className="text-xl text-white font-semibold hover:text-blue-800 hover:underline"
            >
              Team
            </li>
            <li
              style={liStyle}
              className="text-xl text-white font-semibold hover:text-blue-800 hover:underline"
            >
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
