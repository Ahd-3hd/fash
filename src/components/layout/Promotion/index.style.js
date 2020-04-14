import styled from "styled-components";
const colors = {
  pink: "#DF9093",
  blue: "#5DCCDB",
  black: "#353535",
  crimson: "#CD5459",
};
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  background: url(${({ bg }) => bg}) no-repeat;
`;
const LeftContainer = styled.div`
  flex: 1;
`;
const RightContainer = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;
const ElegantText = styled.p`
  margin: 0;
  align-self: flex-start;
  font-size: 5vw;
  font-weight: bolder;
  color: ${colors.crimson};
  text-shadow: 0px 0px 2px ${colors.crimson};
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
  margin-left: 3rem;

  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;
const LogoHr = styled.div`
  border: 2px solid ${colors.black};
`;

const PromotionParagraph = styled.p`
  line-height: 22px;
  letter-spacing: 0.1em;
  margin: 1rem;
`;
const ActionButton = styled.button`
  background: transparent;
  border: none;
  text-shadow: 0px 0px 1px ${colors.black};
  color: ${colors.black};
  margin: 1rem;
  font-weight: bold;
  line-height: 22px;
  letter-spacing: 0.15em;
  text-decoration-line: underline;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const RotatedBackground = styled.div`
  background: ${colors.pink} url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  background-blend-mode: soft-light;
  transform: rotateZ(25deg);
  transform-origin: center;
  width: 50%;
  height: 50%;
`;
const Card = styled.div`
  display: flex;
  position: absolute;
  width: 55%;
  height: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CardMedia = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  flex: 1;
  background-size: cover;
  background-position: center;
`;
const CardDesc = styled.div`
  flex: 1;
  background: ${colors.blue};
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: space-around;
`;
const CardTitle = styled.p`
  align-self: flex-end;
  font-weight: bolder;
  color: ${colors.black};
`;
const CardParagraph = styled.p`
  color: ${colors.black};
`;

const IndicatorsContainer = styled.div``;
const IndicatorCircle = styled.button`
  background: ${({ active }) => (active ? colors.black : "#787878")};
  border: none;
  width: 10px;
  height: 10px;
  margin: 0.2rem;
  border-radius: 10px;
  cursor: pointer;
`;
export {
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
};
