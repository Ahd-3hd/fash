import React, { useState, useEffect } from "react";
import { MenuButton, MenuWrapper, MenuLinks } from "./index.style";
import { useSpring, config } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const animateMenu = useSpring({
    transform: toggleMenu ? "scale(0)" : "scale(1)",
    config: config.default,
  });
  const animateButton = useSpring({
    transform: toggleMenu ? "rotateZ(0deg)" : "rotateZ(90deg)",
    color: toggleMenu ? "#353535" : "#CD5459",
    config: config.default,
  });
  return (
    <>
      <MenuButton
        style={animateButton}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <FontAwesomeIcon icon={faBars} />
      </MenuButton>
      <MenuWrapper style={animateMenu}>
        <MenuLinks>HOME</MenuLinks>
        <MenuLinks>CREATE POST</MenuLinks>
        <MenuLinks>GALLERY</MenuLinks>
        <MenuLinks>ABOUT</MenuLinks>
      </MenuWrapper>
    </>
  );
};

export default Nav;
