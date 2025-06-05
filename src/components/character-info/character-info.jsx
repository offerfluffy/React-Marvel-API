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
    comics: [],
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

  onInfoLoaded = (char, comics) => {
    this.setState({ char, comics, loading: false });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateInfo = (id) => {
    this.setState({ loading: true, error: false });

    Promise.allSettled([
      this.marvelService.getCharacter(id),
      this.marvelService.getComics(id),
    ]).then(([charResult, comicsResult]) => {
      if (
        charResult.status === "fulfilled" &&
        comicsResult.status === "fulfilled"
      ) {
        this.onInfoLoaded(charResult.value, comicsResult.value);
      } else {
        this.onError();
      }
    });
  };
  render() {
    const {
      char: { name, thumbnail, description, homepage, wiki },
      comics,
      loading,
      error,
    } = this.state;

    const items = comics.map(({ id, title }) => (
      <ComicsItem key={id}>{title}</ComicsItem>
    ));

    return (
      <CharacterInfoWrapper>
        {loading ? (
          <Skeleton />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <View
            thumbnail={thumbnail}
            name={name}
            homepage={homepage}
            wiki={wiki}
            description={description}
            items={items}
          />
        )}
      </CharacterInfoWrapper>
    );
  }
}

function View({ thumbnail, name, homepage, wiki, description, items }) {
  return (
    <>
      <BasicsWrapper>
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
      <Description>{description}</Description>
      <ComicsLabel>Comics:</ComicsLabel>
      <ComicsList>{items}</ComicsList>
    </>
  );
}

export default CharacterInfo;
