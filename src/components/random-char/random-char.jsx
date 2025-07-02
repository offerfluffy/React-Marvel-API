import {
  RandomCharWrapper,
  Dynamic,
  Image,
  Info,
  Name,
  Description,
  ButtonsWrapper,
  Static,
  Title,
  Decoration,
} from "./random-char-styled";
import { Button } from "../../style/button/button-styled.js";

import mjolnir from "../../resources/img/mjolnir.png";

import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message.jsx";

import useMarvelService from "../../services/marvel-service.js";

import { useState, useEffect } from "react";

const RandomChar = () => {
  const [char, setChar] = useState({});

  const { loading, error, getRandomCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
    // const intervalId = setInterval(updateChar, 5000);

    return () => {
      // clearInterval(intervalId);
    };
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const updateChar = () => {
    clearError();
    getRandomCharacter().then(onCharLoaded);
  };

  return (
    <RandomCharWrapper>
      {loading ? <Spinner /> : error ? <ErrorMessage /> : <View char={char} />}
      <Static>
        <Title>
          Random character for today!
          <br />
          Do you want to get to know him better?
        </Title>
        <Title>Or choose another one</Title>
        <Button onClick={updateChar} href="#" $type="main">
          <div className="inner">try it</div>
        </Button>
        <Decoration src={mjolnir} alt="mjolnir" />
      </Static>
    </RandomCharWrapper>
  );
};

function View({ char }) {
  const { name, description, thumbnail, homepage, wiki } = char;

  const shorten = (text, max = 250) =>
    text && text.length > max ? text.slice(0, max) + "..." : text;

  const noImage =
    thumbnail ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

  return (
    <Dynamic>
      <Image src={thumbnail} alt="Random character" $contain={noImage} />
      <Info>
        <Name>{name}</Name>
        <Description>
          {description ? shorten(description) : "No description..."}
        </Description>
        <ButtonsWrapper>
          <Button href={homepage} $type="main">
            <div className="inner">homepage</div>
          </Button>
          <Button href={wiki} $type="secondary">
            <div className="inner">Wiki</div>
          </Button>
        </ButtonsWrapper>
      </Info>
    </Dynamic>
  );
}

export default RandomChar;
