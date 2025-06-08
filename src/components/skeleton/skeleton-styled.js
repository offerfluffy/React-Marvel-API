import { keyframes, styled } from "styled-components";

const animation = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const Pulse = styled.div`
  animation: ${animation} 1.5s ease-in-out 0.5s infinite;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 40px auto;
  column-gap: 10px;
  align-items: center;
`;

const Circle = styled(Pulse)`
  width: 40px;
  height: 40px;
  background-color: #c4c4c4;
  border-radius: 100%;
`;

const Mini = styled(Pulse)`
  width: 100%;
  height: 16px;
  background-color: #c4c4c4;
`;

const Block = styled(Pulse)`
  height: 35px;
  width: 100%;
  background-color: #c4c4c4;
  margin-top: 15px;
`;

const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
`;

export { Header, Circle, Mini, Block, Title };
