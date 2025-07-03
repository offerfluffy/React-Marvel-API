import { useState, useEffect, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
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
import "./random-char.css";
import mjolnir from "../../resources/img/mjolnir.png";
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message.jsx";
import useMarvelService from "../../services/marvel-service.js";

const RandomChar = () => {
  const [char, setChar] = useState(null); // Initialize as null
  const [transitionKey, setTransitionKey] = useState(0);
  const nodeRef = useRef(null);

  const { loading, error, getRandomCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateChar();
    // const intervalId = setInterval(updateChar, 5000);
    // return () => clearInterval(intervalId);
  }, []);

  const onCharLoaded = (char) => {
    setChar(char);
    setTransitionKey((prev) => prev + 1);
  };

  const updateChar = () => {
    clearError();
    getRandomCharacter().then(onCharLoaded);
  };

  return (
    <RandomCharWrapper>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={loading ? "loading" : error ? "error" : transitionKey}
          timeout={200}
          classNames="char"
          nodeRef={nodeRef}
        >
          <div ref={nodeRef}>
            {loading ? (
              <Spinner />
            ) : error ? (
              <ErrorMessage />
            ) : (
              <View
                char={char}
                animation={{ transitionKey, loading, error, nodeRef }}
              />
            )}
          </div>
        </CSSTransition>
      </SwitchTransition>
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

function View({ char, animation }) {
  const { name, description, thumbnail, homepage, wiki } = char || {};

  const shorten = (text, max = 250) =>
    text && text.length > max ? text.slice(0, max) + "..." : text;

  const noImage =
    thumbnail &&
    thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

  return (
    <Dynamic>
      <Image src={thumbnail || ""} alt="Random character" $contain={noImage} />
      <Info>
        <Name>{name || "Unknown"}</Name>
        <Description>
          {description ? shorten(description) : "No description..."}
        </Description>
        <ButtonsWrapper>
          <Button href={homepage || "#"} $type="main">
            <div className="inner">homepage</div>
          </Button>
          <Button href={wiki || "#"} $type="secondary">
            <div className="inner">Wiki</div>
          </Button>
        </ButtonsWrapper>
      </Info>
    </Dynamic>
  );
}

export default RandomChar;