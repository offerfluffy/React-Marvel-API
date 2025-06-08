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

import MarvelService from "../../services/marvel-service.js";

import { useState, useEffect } from "react";

const CharacterInfo = ({ selectedId }) => {
  const [char, setChar] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const marvelService = new MarvelService();

  useEffect(() => {
    if (selectedId) {
      updateInfo(selectedId);
    }
  }, [selectedId]);

  const onInfoLoaded = (char) => {
    setChar(char);
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const updateInfo = (id) => {
    setLoading(true);
    setError(false);

    marvelService
      .getCharacter(id)
      .then((char) => {
        onInfoLoaded(char);
      })
      .catch(onError);
  };

  const { comics } = char;

  const items = comics
    ?.slice(0, 10) // ?. avoids runtime errors if comics is undefined
    .map((item, i) => <ComicsItem key={i}>{item.name}</ComicsItem>);

  return (
    <CharacterInfoWrapper>
      {loading ? (
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
