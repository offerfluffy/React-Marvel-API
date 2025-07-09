import RandomChar from "../random-char/random-char";
import CharacterInfo from "../character-info/character-info";
import CharacterList from "../characters-list/characters-list";
import ErrorBoundary from "../error-boundary/error-boundary";

import {
  CharactersWrapper,
  Decoration,
  CharacterInfoWrapper,
} from "../app/app-styled.js";

import vision from "../../resources/img/vision.png";

import { useState } from "react";
import CharacterSearch from "../character-search/character-search.jsx";

function MainPage() {
  const [selectedId, setSelectedId] = useState(null);

  const onSelectChar = (id) => {
    setSelectedId(id);
  };

  return (
    <>
      <RandomChar />
      <CharactersWrapper>
        <CharacterList onSelectChar={onSelectChar} />
        <CharacterInfoWrapper>
          <ErrorBoundary>
            <CharacterInfo selectedId={selectedId} />
          </ErrorBoundary>
          <ErrorBoundary>
            <CharacterSearch />
          </ErrorBoundary>
        </CharacterInfoWrapper>
      </CharactersWrapper>
      <Decoration src={vision} />
    </>
  );
}

export default MainPage;
