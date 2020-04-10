import React, { useState, useEffect } from "react";
import {
  Wrapper,
  HeaderLeft,
  HeaderRight,
  LogoContainer,
  ElegantText,
  LogoHr,
  LadyText,
} from "./index.style";
import duaImg from "../../../img/headermulti.png";
import flowersImg from "../../../img/headerflower.jpg";

const Header = () => {
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
    </Wrapper>
  );
};

export default Header;
