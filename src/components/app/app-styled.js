import styled from "styled-components";

const AppWrapper = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  position: relative;
`;

const MainWrapper = styled.main`
  margin-top: 50px;
  position: relative;
`;

const CharactersWrapper = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 650px 425px;
  column-gap: 25px;
  align-items: start;
`;

export { AppWrapper, MainWrapper, CharactersWrapper };
