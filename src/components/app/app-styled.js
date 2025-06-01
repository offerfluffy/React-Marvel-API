import styled from "styled-components";

const AppStyled = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  position: relative;
`;

const Main = styled.main`
  margin-top: 50px;
  position: relative;
`;

const CharactersStyled = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 650px 425px;
  column-gap: 25px;
  align-items: start;
`;

export { AppStyled, Main, CharactersStyled };
