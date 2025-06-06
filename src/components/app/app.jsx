import AppBanner from "../app-banner/app-banner";
import AppHeader from "../app-header/app-header";
import CharacterInfo from "../character-info/character-info";
import CharacterList from "../characters-list/characters-list";
import ComicsList from "../comics-list/comics-list";
import RandomChar from "../random-char/random-char";
import SingleComics from "../single-comics/single-comics";
import { MainWrapper, CharactersWrapper, Decoration } from "./app-styled";

import vision from "../../resources/img/vision.png";
import { Component } from "react";
import ErrorBoundary from "../error-boundary/error-boundary";
class App extends Component {
  state = {
    selectedId: null,
  };

  onSelectChar = (id) => {
    this.setState({ selectedId: id });
  };

  render() {
    const { selectedId } = this.state;

    return (
      <>
        <AppHeader />
        <MainWrapper>
          <RandomChar />
          <CharactersWrapper>
            <CharacterList
              onSelectChar={this.onSelectChar}
              selectedId={selectedId}
            />
            <ErrorBoundary>
              <CharacterInfo selectedId={selectedId} />
            </ErrorBoundary>
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
}

export default App;
