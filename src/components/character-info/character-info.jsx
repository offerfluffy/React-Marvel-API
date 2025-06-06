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

import { Component } from "react";

import MarvelService from "../../services/marvel-service.js";

class CharacterInfo extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidUpdate(prevProps) {
    if (
      this.props.selectedId !== prevProps.selectedId &&
      this.props.selectedId
    ) {
      this.updateInfo(this.props.selectedId);
    }
  }

  onInfoLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateInfo = (id) => {
    this.setState({ loading: true, error: false });

    this.marvelService
      .getCharacter(id)
      .then((char) => {
        this.onInfoLoaded(char);
      })
      .catch(this.onError);
  };

  render() {
    const {
      char,
      char: { comics },
      loading,
      error,
    } = this.state;

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
  }
}

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

export default CharacterInfo;
