import styled from "styled-components";
import { animated } from "react-spring";
const colors = {
  pink: "#DF9093",
  blue: "#5DCCDB",
  black: "#353535",
  crimson: "#CD5459",
};
const MenuButton = styled(animated.button)`
  font-size: 2rem;
  position: fixed;
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
  position: fixed;
  background: ${colors.pink + "aa"};
  width: 100%;
  height: 100vh;
  top: 0;
  bottom: 0;
  backdrop-filter: blur(4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: bold;
  color: ${colors.black};
  transform-origin: center;
  z-index: 998;
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

export { MenuButton, MenuWrapper, MenuLinks };
