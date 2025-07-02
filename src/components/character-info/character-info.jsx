import {
  CharacterInfoWrapper,
  BasicsWrapper,
  ButtonsWrapper,
  Description,
  ComicsLabel,
  ComicsList,
  ComicsItem,
} from "./character-info-styled";
import { Name } from "../random-char/random-char-styled";
import { Button } from "../../style/button/button-styled.js";

import Skeleton from "../skeleton/skeleton";
import ErrorMessage from "../error-message/error-message.jsx";

import PropTypes from "prop-types";

import useMarvelService from "../../services/marvel-service.js";

import { useState, useEffect } from "react";

const CharacterInfo = ({ selectedId }) => {
  const [char, setChar] = useState({});

  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    if (selectedId) {
      updateInfo(selectedId);
    }
  }, [selectedId]);

  const onInfoLoaded = (char) => {
    setChar(char);
  };

  const updateInfo = (id) => {
    clearError();
    getCharacter(id).then((char) => {
      onInfoLoaded(char);
    });
  };

  const { comics } = char;

  const items = comics
    ?.slice(0, 10)
    .map((item, i) => (
      <ComicsItem key={i}>
        {typeof item === "string" ? item : item.name}
      </ComicsItem>
    ));

  return (
    <CharacterInfoWrapper>
      {!items || loading ? (
        <Skeleton />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <View char={char} items={items} />
      )}
    </CharacterInfoWrapper>
  );
};

function View({
  char: { thumbnail, name, homepage, wiki, description },
  items,
}) {
  const noImage =
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

  return (
    <>
      <BasicsWrapper $contain={noImage}>
        <img src={thumbnail} alt="abyss" />
        <div>
          <Name>{name}</Name>
          <ButtonsWrapper>
            <Button href={homepage} $type="main">
              <div className="inner">homepage</div>
            </Button>
            <Button href={wiki} $type="secondary">
              <div className="inner">Wiki</div>
            </Button>
          </ButtonsWrapper>
        </div>
      </BasicsWrapper>
      <Description>
        {description ? description : "No description..."}
      </Description>
      <ComicsLabel>Comics:</ComicsLabel>
      <ComicsList>
        {items && items.length > 0 ? items : "No comics..."}
      </ComicsList>
    </>
  );
}

CharacterInfo.propTypes = {
  selectedId: PropTypes.number.isRequired,
};

export default CharacterInfo;
