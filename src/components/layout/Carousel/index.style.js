import styled from "styled-components";
import { animated } from "react-spring";
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;
const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  position: relative;
`;
const RightContainer = styled.div`
  flex: 1;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  transition: background 0.3s ease-out;
`;

const SlidesContainer = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  transition: 0.5s;
  padding: 1rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  left: 10%;
`;
const MovingSlidesContainer = styled(animated.div)`
  display: flex;
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
`;
export {
  Wrapper,
  LeftContainer,
  RightContainer,
  SlidesContainer,
  MovingSlidesContainer,
  SingleSlideContainer,
};
