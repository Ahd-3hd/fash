import styled from "styled-components";
import { animated } from "react-spring";
const colors = {
  pink: "#DF9093",
  blue: "#5DCCDB",
  black: "#353535",
  crimson: "#CD5459",
};
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  position: relative;
  background: url(${({ bg }) => bg}) ${colors.pink};
  background-size: cover;
  background-position: center;
  background-blend-mode: screen;

  @media (max-width: 1024px) {
    flex: 0.3;
  }
`;
const RightContainer = styled.div`
  flex: 1;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  transition: background 0.3s ease-out;
  z-index: 2;
`;

const SlidesContainer = styled.div`
  overflow: hidden;
  position: absolute;
  transition: 0.5s;
  padding: 1rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  left: 10%;
  background: #ffffff;
  @media (max-width: 1024px) {
    left: 0;
  }
`;
const MovingSlidesContainer = styled(animated.div)`
  display: flex;
  position: relative;
`;
const SingleSlideContainer = styled.div`
  width: 18vw;
  min-width: 300px;
  height: 18vw;
  min-height: 300px;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  margin: 0 1rem;
  @media (max-width: 1024px) {
    min-width: 150px;
    min-height: 150px;
  }
`;
const SliderButton = styled.button`
  background: ${colors.black + "55"};
  height: 100%;
  border: none;
  font-size: 2rem;
  color: ${colors.crimson + "55"};
  cursor: pointer;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  transition: 0.4s;
  &:hover {
    background: ${colors.black};
    color: ${colors.crimson};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-self: flex-start;
  margin: 1rem;
  @media (max-width: 900px) {
    display: none;
  }
`;
const ElegantText = styled.p`
  margin: 0;
  align-self: flex-start;
  font-size: 5vw;
  font-weight: bolder;
  color: ${colors.black};
  text-shadow: 0px 0px 2px ${colors.black};
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;
const LadyText = styled.p`
  margin: 0;
  align-self: flex-end;
  font-size: 5vw;
  font-weight: bolder;
  color: ${colors.blue};
  text-shadow: 0px 0px 2px ${colors.blue};
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;
const LogoHr = styled.div`
  border: 2px solid ${colors.black};
`;
export {
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
};
