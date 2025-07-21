import styled from "styled-components";

const AppWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 0 50px 0;
  position: relative;

  @media (max-width: 500px) {
    padding: 50px 10px 50px 10px;
  }
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

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const CharacterInfoWrapper = styled.div`
  position: sticky;
  top: 10px;
  z-index: 5;

  @media (max-width: 500px) {
    position: relative;
    overflow-x: hidden;
  }
`;

const Decoration = styled.img`
  position: absolute;
  right: -174px;
  bottom: -70px;
  z-index: -1;

  @media (max-width: 500px) {
    display: none;
  }
`;

export {
  AppWrapper,
  MainWrapper,
  CharactersWrapper,
  Decoration,
  CharacterInfoWrapper,
};
