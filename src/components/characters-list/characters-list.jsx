import { Grid, Item, Name } from "./characters-list-styled";
import { ButtonLong } from "../../style/button/button-styled";

import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message.jsx";

import MarvelService from "../../services/marvel-service.js";

import { Component } from "react";

class CharacterList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    loadingNewItem: false,
    offset: 291,
    charEnded: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onListLoaded = (res) => {
    let ended = false;
    if (res.length < 9) {
      ended = true;
    }

    this.setState(({ charList, offset }) => ({
      charList: [...charList, ...res],
      loading: false,
      loadingNewItem: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  onListLoading = () => {
    this.setState({ loadingNewItem: true });
  };

  onError = (e) => {
    this.setState({ loading: false, error: true });
  };

  onRequest = (offset) => {
    this.onListLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onListLoaded)
      .catch(this.onError);
  };

  render() {
    const { charList, loading, error, offset, loadingNewItem, charEnded } =
      this.state;
    const { onSelectChar, selectedId } = this.props;

    const items = charList.map(({ id, name, thumbnail }) => {
      const noImage =
        thumbnail ===
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

      return (
        <Item
          className={selectedId === id ? "selected" : ""}
          onClick={() => onSelectChar(id)}
          $fill={noImage}
          key={id}
        >
          <img src={thumbnail} alt={name} />
          <Name>{name}</Name>
        </Item>
      );
    });

    return (
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <Grid>{items}</Grid>
        )}
        {charEnded ? null : (
          <ButtonLong
            onClick={() => this.onRequest(offset)}
            disabled={loadingNewItem}
            $type="main"
          >
            <div className="inner">Load More</div>
          </ButtonLong>
        )}
      </div>
    );
  }
}

export default CharacterList;
