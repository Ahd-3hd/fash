import React, { useState, useEffect } from "react";
import {
  Wrapper,
  HeaderLeft,
  HeaderRight,
  LogoContainer,
  ElegantText,
  LogoHr,
  LadyText,
  MenuButton,
  MenuWrapper,
  MenuLinks,
} from "./index.style";
import duaImg from "../../../img/headermulti.png";
import flowersImg from "../../../img/headerflower.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSpring, config } from "react-spring";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const animateMenu = useSpring({
    transform: toggleMenu ? "scale(0)" : "scale(1)",
    config: config.default,
  });
  const animateButton = useSpring({
    transform: toggleMenu ? "rotateZ(0deg)" : "rotateZ(90deg)",
    color: toggleMenu ? "#353535" : "#CD5459",
    config: config.gentle,
  });
  return (
    <Wrapper>
      <HeaderLeft bg={flowersImg}>
        <LogoContainer>
          <ElegantText>ELEGANT</ElegantText>
          <LogoHr />
          <LadyText>LADY</LadyText>
        </LogoContainer>
      </HeaderLeft>
      <HeaderRight bg={duaImg}></HeaderRight>
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
    </Wrapper>
  );
};

export default Header;
