import { styled } from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 0 30px;
  display: flex;
  color: #ffff;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  .logo-name {
    font-size: 30px;
  }
  .links-container {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .mobile-nav {
    display: none;
    position: absolute;
    right: 0;
    z-index: 2;
    flex-direction: column;
    gap: 20px;
    min-height: 100vh;
    align-items: center;
    padding-top: 100px;
    top: 0;
    color: black;
    width: 50%;
    background: black;
  }
  .hamburger-icon {
    display: none;
  }
  @media (max-width: 800px) {
    .links-container {
      display: none;
    }
    .hamburger-icon {
      display: block;
    }
    .mobile-nav {
      display: flex;
    }
  }
`;
