import styled from "styled-components";

const Wrapper = styled.footer`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const TopFooter = styled.div`
  flex: 1;
`;
const BottomFooter = styled.div`
  flex: 1;
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: cover;
  clip-path: polygon(61% 20%, 100% 0, 100% 100%, 0 100%, 0 0);
`;
export { Wrapper, TopFooter, BottomFooter };
