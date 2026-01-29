import gitlogo from "../assets/git-logo.svg";
import styled from "styled-components";

const Styledlist = styled.li`
  font-size: 1.25rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #2b6cb0;
    text-decoration: underline;
  }
`;

export const Navbar = ({ handel }) => {
  function onClick(i) {
    handel(i);
  }

  const navstyle = {
    display: "flex",
    justifyContent: "space-between",
    paddingRight: "3rem",
    paddingLeft: "0.5rem",
    alignItems: "center",
    position: "sticky",
    width: "100%",
    top: "0",
    backgroundColor: "black",
  };
  const imgDivStyle = { display: "flex", alignItems: "center" };
  const ulStyle = { display: "flex", gap: "1rem" };

  return (
    <>
      <nav style={navstyle}>
        <div style={imgDivStyle}>
          <img src={gitlogo} alt="" />
          <h1 className="text-5xl font-bold self-end text-white">GitHub</h1>
        </div>
        <div>
          <ul style={ulStyle}>
            <Styledlist onClick={() => onClick(0)}>Home</Styledlist>
            <Styledlist onClick={() => onClick(1)}>Portfolio</Styledlist>
            <Styledlist onClick={() => onClick(2)}>Team</Styledlist>
            <Styledlist onClick={() => onClick(3)}>Contact</Styledlist>
          </ul>
        </div>
      </nav>
    </>
  );
};