import React from "react";
import {
  Wrapper,
  LeftSection,
  RightSection,
  LogoContainer,
  LogoTextTop,
  LogoTextBottom,
  TextParagraph,
  CallButton,
  LeftSectionCardsContainer,
  CardOneContainer,
  CardOneImage,
  CardTwoContainer,
  CardTwoImage,
  CardThreeImage,
  CardThreeContainer,
} from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import textBrush from "../../../img/Untitled2.png";
const Promotion = ({ data }) => {
  return (
    <Wrapper>
      <LeftSection>
        <LogoContainer>
          <LogoTextTop>Chique</LogoTextTop>
          <LogoTextBottom>Dresses</LogoTextBottom>
        </LogoContainer>
        <TextParagraph>
          TAILORED SPECIFICALLY TO MAKE YOU THINK YOU’RE WORTH THAN YOU ACTUALLY
          ARE
        </TextParagraph>
        <CallButton href="#">
          Browse Collection
          <FontAwesomeIcon icon={faArrowRight} color="#353535" />
        </CallButton>
        <LeftSectionCardsContainer>
          <CardOneContainer>
            <CardOneImage bg={data[1]} />
          </CardOneContainer>
          <CardTwoContainer>
            <CardTwoImage bg={data[0]} />
          </CardTwoContainer>
        </LeftSectionCardsContainer>
      </LeftSection>
      <RightSection>
        <CardThreeContainer>
          <CardThreeImage bg={data[2]} />
        </CardThreeContainer>
      </RightSection>
    </Wrapper>
  );
};

export default Promotion;
