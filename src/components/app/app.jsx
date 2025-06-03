import AppHeader from "../app-header/app-header";
import CharacterInfo from "../character-info/character-info";
import CharacterList from "../characters-list/characters-list";
import RandomChar from "../random-char/random-char";
import { MainWrapper, CharactersWrapper } from "./app-styled";

function App() {
  return (
    <>
      <AppHeader />
      <MainWrapper>
        <RandomChar />
        <CharactersWrapper>
          <CharacterList />
          <CharacterInfo />
        </CharactersWrapper>
      </MainWrapper>
    </>
  );
}

export default App;
