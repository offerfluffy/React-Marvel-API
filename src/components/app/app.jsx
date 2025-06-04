import AppBanner from "../app-banner/app-banner";
import AppHeader from "../app-header/app-header";
import CharacterInfo from "../character-info/character-info";
import CharacterList from "../characters-list/characters-list";
import ComicsList from "../comics-list/comics-list";
import RandomChar from "../random-char/random-char";
import SingleComics from "../single-comics/single-comics";
import { MainWrapper, CharactersWrapper, Decoration } from "./app-styled";

import vision from "../../resources/img/vision.png";
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
        <Decoration src={vision} />
      </MainWrapper>

      {/* <MainWrapper>
        <AppBanner />
        <ComicsList />
      </MainWrapper>

      <MainWrapper>
        <AppBanner />
        <SingleComics />
      </MainWrapper> */}
    </>
  );
}

export default App;
