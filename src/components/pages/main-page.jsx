import RandomChar from "../random-char/random-char";
import CharacterInfo from "../character-info/character-info";
import CharacterList from "../characters-list/characters-list";
import ErrorBoundary from "../error-boundary/error-boundary";

import { CharactersWrapper, Decoration } from "../app/app-styled.js";

import vision from "../../resources/img/vision.png";

import { useState } from "react";

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
        <ErrorBoundary>
          <CharacterInfo selectedId={selectedId} />
        </ErrorBoundary>
      </CharactersWrapper>
      <Decoration src={vision} />
    </>
  );
}

export default MainPage;
