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
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateList();
  }

  onListLoaded = (res) => {
    this.setState({ charList: res, loading: false });
  };

  onError = (e) => {
    this.setState({ loading: false, error: true });
  };

  updateList = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onListLoaded)
      .catch(this.onError);
  };

  render() {
    const { charList, loading, error } = this.state;
    const { onSelectChar, selectedId } = this.props;

    const items = charList.map(({ id, name, thumbnail }) => (
      <Item
        className={selectedId === id ? "selected" : ""}
        onClick={() => onSelectChar(id)}
        key={id}
      >
        <img src={thumbnail} alt={name} />
        <Name>{name}</Name>
      </Item>
    ));

    return (
      <div>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ErrorMessage />
        ) : (
          <Grid>{items}</Grid>
        )}
        <ButtonLong href="#" $type="main">
          <div className="inner">Load More</div>
        </ButtonLong>
      </div>
    );
  }
}

export default CharacterList;
