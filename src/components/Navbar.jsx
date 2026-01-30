import gitlogo from "../assets/git-logo.svg";
import styled from "styled-components";


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 3rem 0.75rem 0.5rem;
  position: sticky;
  top: 0;
  width: 100%;
  background-color: black;
  z-index: 100;

  /* Tablet */
  @media (max-width: 1024px) {
    padding: 0.75rem 1.5rem;
  }

  /* Mobile */
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: white;
  }

  /* Mobile */
  @media (max-width: 640px) {
    h1 {
      font-size: 2rem;
    }

    img {
      width: 32px;
      height: 32px;
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  /* Mobile */
  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
  }
`;

const StyledList = styled.li`
  font-size: 1.25rem;
  color: white;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #2b6cb0;
    text-decoration: underline;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    font-size: 1.1rem;
  }

  /* Mobile */
  @media (max-width: 640px) {
    font-size: 1rem;
  }
`;


export const Navbar = ({ handel }) => {
  function onClick(i) {
    handel(i);
  }

  return (
    <Nav>
      <LogoWrapper>
        <img src={gitlogo} alt="GitHub Logo" />
        <h1>GitHub</h1>
      </LogoWrapper>

      <NavList>
        <StyledList onClick={() => onClick(0)}>Home</StyledList>
        <StyledList onClick={() => onClick(1)}>Portfolio</StyledList>
        <StyledList onClick={() => onClick(2)}>Team</StyledList>
        <StyledList onClick={() => onClick(3)}>Contact</StyledList>
      </NavList>
    </Nav>
  );
};
