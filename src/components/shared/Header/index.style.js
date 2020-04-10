import styled from "styled-components";
import { animated } from "react-spring";
const colors = {
  pink: "#DF9093",
  blue: "#5DCCDB",
  black: "#353535",
  crimson: "#CD5459",
};
const Wrapper = styled.header`
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const HeaderLeft = styled.div`
  flex: 1;
  background: ${colors.pink} url(${({ bg }) => bg}) no-repeat;
  background-blend-mode: multiply;
  background-size: 50vh;
  background-position: center;
  background-position-y: top;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeaderRight = styled.div`
  flex: 1;
  background: ${colors.blue} url(${({ bg }) => bg}) no-repeat;
  background-blend-mode: multiply;
  background-size: cover;
  background-position-x: left;
  background-position-y: top;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-self: center;
`;
const ElegantText = styled.p`
  margin: 0;
  align-self: flex-start;
  font-size: 5vw;
  font-weight: bolder;
  color: ${colors.black};
`;
const LadyText = styled.p`
  margin: 0;
  align-self: flex-end;
  font-size: 5vw;
  font-weight: bolder;
  color: ${colors.blue};
`;
const LogoHr = styled.div`
  border: 2px solid ${colors.black};
`;

const MenuButton = styled(animated.button)`
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  z-index: 999;
  color: ${colors.black};
  cursor: pointer;
  transform-origin: center;
`;

const MenuWrapper = styled(animated.div)`
  position: absolute;
  background: ${colors.pink + "aa"};
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${colors.black};
  transform-origin: center;
`;

const MenuLinks = styled.a`
  display: inline-block;
  margin: 1rem 0;
  cursor: pointer;
  transition: color 0.3s ease-in;
  &:hover {
    color: ${colors.crimson};
  }
`;
export {
  Wrapper,
  HeaderLeft,
  HeaderRight,
  LogoContainer,
  ElegantText,
  LadyText,
  LogoHr,
  MenuButton,
  MenuWrapper,
  MenuLinks,
};
