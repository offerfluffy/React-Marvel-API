import AppHeader from "../app-header/app-header";
import CharacterInfo from "../character-info/character-info";
import CharacterList from "../characters-list/characters-list";
import RandomChar from "../random-char/random-char";
import { Main, CharactersStyled } from "./app-styled";

function App() {
  return (
    <>
      <AppHeader />
      <Main>
        <RandomChar />
        <CharactersStyled>
          <CharacterList />
          <CharacterInfo />
        </CharactersStyled>
      </Main>
    </>
  );
}

export default App;
