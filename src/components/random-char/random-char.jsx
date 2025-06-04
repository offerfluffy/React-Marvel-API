import { Component } from "react";

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

import MarvelService from "../../services/marvel-service.js";

class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }

  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = (e) => {
    this.setState({ loading: false, error: true });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (20 - 1) + 1);
    this.marvelService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;

    return (
      <RandomCharWrapper>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <View char={char} />
        )}
        <Static>
          <Title>
            Random character for today!
            <br />
            Do you want to get to know him better?
          </Title>
          <Title>Or choose another one</Title>
          <Button href="#" $type="main">
            <div className="inner">try it</div>
          </Button>
          <Decoration src={mjolnir} alt="mjolnir" />
        </Static>
      </RandomCharWrapper>
    );
  }
}

function View({ char }) {
  const { name, description, thumbnail, homepage, wiki } = char;
  const shorten = (text, max = 100) =>
    text && text.length > max ? text.slice(0, max) + "..." : text;

  return (
    <Dynamic>
      <Image src={thumbnail} alt="Random character" />
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
