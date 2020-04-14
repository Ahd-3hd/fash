import React from "react";
import {
  Wrapper,
  LogoContainer,
  ElegantText,
  LadyText,
  LogoHr,
  PromotionParagraph,
  ActionButton,
  RotatedBackground,
  LeftContainer,
  RightContainer,
  Card,
  CardMedia,
  CardDesc,
  CardTitle,
  CardParagraph,
  IndicatorCircle,
  IndicatorsContainer,
} from "./index.style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import textBrush from "../../../img/Untitled2.png";
const Promotion = ({ data }) => {
  return (
    <Wrapper bg={textBrush}>
      <LeftContainer>
        <LogoContainer>
          <ElegantText>CHIQUE</ElegantText>
          <LadyText>DRESSES</LadyText>
          <LogoHr />
        </LogoContainer>
        <PromotionParagraph>
          TAILORED SPECIFICALLY TO MAKE YOU THINK YOU’RE WORTH THAN YOU ACTUALLY
          ARE
        </PromotionParagraph>
        <ActionButton>
          Browse Collection <FontAwesomeIcon icon={faArrowRight} />
        </ActionButton>
      </LeftContainer>
      <RightContainer>
        <RotatedBackground bg={data[1]} />
        <Card>
          <CardDesc>
            <CardTitle>TITLE HERE</CardTitle>
            <CardParagraph>
              Lorem ipsum dolor sit amet, consectetu radipiscing elit.
              Pellentesque vulputate lobortis risus et molestie. Vestibulum
              blandit dictum nunc, vitae ullamcorper erat.
            </CardParagraph>
            <IndicatorsContainer>
              <IndicatorCircle active />
              <IndicatorCircle />
              <IndicatorCircle />
            </IndicatorsContainer>
          </CardDesc>
          <CardMedia bg={data[1]} />
        </Card>
      </RightContainer>
    </Wrapper>
  );
};

export default Promotion;
