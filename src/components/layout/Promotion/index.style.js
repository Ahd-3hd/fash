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
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;
const RightSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  font-size: 4rem;
  font-weight: bold;
  padding: 1rem;
  @media (max-width: 500px) {
    font-size: 2rem;
    padding: 0;
  }
`;
const LogoTextTop = styled.p`
  align-self: flex-start;
  margin: 0;
  color: #cd5459;
`;
const LogoTextBottom = styled.p`
  align-self: flex-end;
  margin: 0;
  color: #20abe7;
`;
const TextParagraph = styled.p`
  letter-spacing: 0.12em;
  padding: 1rem;
  max-width: 460px;
  line-height: 1.5rem;
  margin: 0;
  font-weight: 500;
  color: ${colors.black};
`;

const CallButton = styled.a`
  padding: 1rem;
  color: ${colors.black};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: bold;
  text-decoration: underline;
  max-width: 200px;
  > * {
    margin-left: 1rem;
  }
`;
const LeftSectionCardsContainer = styled.div`
  justify-self: flex-end;
  display: flex;
  padding: 5rem;
  height: 100%;
  align-items: flex-end;
  @media (max-width: 1024px) {
    padding: 1rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
const CardOneContainer = styled.div`
  align-self: center;
  background: ${colors.pink};
  margin: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CardOneImage = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 20vw;
  height: 20vw;
  min-width: 200px;
  min-height: 300px;
  position: relative;
  left: -1rem;
  bottom: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const CardTwoContainer = styled.div`
  background: ${colors.pink};
  margin: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CardTwoImage = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 20vw;
  height: 20vw;
  min-width: 200px;
  min-height: 300px;
  position: relative;
  left: -1rem;
  bottom: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CardThreeImage = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  background-position: center;
  width: 20vw;
  height: 20vw;
  min-width: 250px;
  min-height: 450px;
  position: relative;
  left: -1rem;
  bottom: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const CardThreeContainer = styled.div`
  background: ${colors.pink};
  margin: 1rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export {
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
};
