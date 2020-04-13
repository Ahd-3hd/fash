import styled from "styled-components";
const colors = {
  pink: "#DF9093",
  blue: "#5DCCDB",
  black: "#353535",
  crimson: "#CD5459",
};
const Wrapper = styled.header`
  height: 100vh;
  display: flex;
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
  @media (max-width: 900px) {
    display: none;
  }
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
  HeaderLeft,
  HeaderRight,
  LogoContainer,
  ElegantText,
  LadyText,
  LogoHr,
};
