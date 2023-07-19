import { StyledNavbar } from "./Navbar.styles";
import { StyledNavlink } from "../../GlobalStyles";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
export const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <StyledNavbar>
      <span className="logo-name">SpaceX</span>
      <div className="links-container">
        <StyledNavlink to="/">ROCKETS</StyledNavlink>
        <StyledNavlink to="/">CAPSULES</StyledNavlink>
        <StyledNavlink to="/">STARSHIP</StyledNavlink>
        <StyledNavlink to="/">RIDESHARE</StyledNavlink>
        <StyledNavlink to="/">STARLINK</StyledNavlink>
      </div>
      <div className="hamburger-icon">
        <GiHamburgerMenu
          onClick={() => setShowDrawer(true)}
          color="white"
          size="22"
          style={{ cursor: "pointer" }}
        />
      </div>
      {showDrawer && (
        <div className="mobile-nav">
          <RxCross2
            onClick={() => setShowDrawer(false)}
            color="white"
            size="22"
            style={{ cursor: "pointer" }}
          />
          <StyledNavlink to="/">ROCKETS</StyledNavlink>
          <StyledNavlink to="/">CAPSULES</StyledNavlink>
          <StyledNavlink to="/">STARSHIP</StyledNavlink>
          <StyledNavlink to="/">RIDESHARE</StyledNavlink>
          <StyledNavlink to="/">STARLINK</StyledNavlink>
        </div>
      )}
    </StyledNavbar>
  );
};
