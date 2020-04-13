import React, { useState, useRef, useEffect } from "react";
import {
  Wrapper,
  LeftContainer,
  RightContainer,
  SlidesContainer,
  MovingSlidesContainer,
  SingleSlideContainer,
  SliderButton,
  LogoContainer,
  ElegantText,
  LadyText,
  LogoHr,
} from "./index.style";
import { useSpring } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import brushed from "../../../img/brushed.png";
const Carousel = ({ data, reverse, text }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [totalSlidesSteps, setTotalSlidesSteps] = useState(0);

  const handleSlidePosition = () => {
    if (activeSlide < data.length - 1) {
      setTotalSlidesSteps(totalSlidesSteps + slideWidth);
      setActiveSlide(activeSlide + 1);
    } else {
      setActiveSlide(0);
      setTotalSlidesSteps(0);
    }
  };
  const animateSlide = useSpring({
    transform: `translateX(-${totalSlidesSteps}px)`,
    transition: "0.2s ease-out",
  });

  const slideRef = useRef();

  useEffect(() => {
    setSlideWidth(slideRef.current.clientWidth);
  }, []);
  return (
    <Wrapper reverse={reverse}>
      <LeftContainer bg={brushed}>
        <LogoContainer>
          <ElegantText>{text.first_word}</ElegantText>
          <LogoHr />
          <LadyText>{text.second_word}</LadyText>
        </LogoContainer>
        <SlidesContainer>
          <SliderButton onClick={handleSlidePosition}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </SliderButton>
          <MovingSlidesContainer style={animateSlide}>
            {data.map((item, i) => {
              return <SingleSlideContainer bg={item} key={i} ref={slideRef} />;
            })}
          </MovingSlidesContainer>
        </SlidesContainer>
      </LeftContainer>
      <RightContainer bg={data[activeSlide]}></RightContainer>
    </Wrapper>
  );
};

export default Carousel;
