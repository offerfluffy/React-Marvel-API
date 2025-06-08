import { Grid, Item, Name } from "./characters-list-styled";
import { ButtonLong } from "../../style/button/button-styled";

import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message.jsx";

import MarvelService from "../../services/marvel-service.js";

import PropTypes from "prop-types";

import { useState, useEffect, useRef } from "react";

const CharacterList = (props) => {
  const [charList, setCharList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingNewItem, setloadingNewItem] = useState(false);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(291);
  const [charEnded, setCharEnded] = useState(false);

  const { onSelectChar } = props;

  const itemRefs = useRef([]);

  const marvelService = new MarvelService();

  useEffect(() => {
    onRequest(); 
    // Can invoke arrow function because CallBack is invoked after render
  }, []);

  const onListLoaded = (res) => {
    let ended = false;
    if (res.length < 9) {
      ended = true;
    }

    setCharList((prevCharList) => [...prevCharList, ...res]);
    setLoading(false);
    setloadingNewItem(false);
    setOffset((prevOffset) => prevOffset + 9);
    setCharEnded(ended);
  };

  const onListLoading = () => {
    setloadingNewItem(true);
  };

  const onError = (e) => {
    setLoading(false);
    setError(true);
  };

  const onRequest = (offset) => {
    onListLoading();
    marvelService.getAllCharacters(offset).then(onListLoaded).catch(onError);
  };

  const items = charList.map(({ id, name, thumbnail }, index) => {
    const noImage =
      thumbnail ===
      "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg";

    // ref is not recommended because of declarative style of react
    // className={selectedId === id ? "selected" : ""} is better
    return (
      <Item
        ref={(el) => (itemRefs.current[index] = el)}
        onClick={() => {
          onSelectChar(id);
          itemRefs.current.forEach((ref) => ref?.classList.remove("selected"));
          itemRefs.current[index]?.classList.add("selected");
        }}
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
      {loading ? <Spinner /> : error ? <ErrorMessage /> : <Grid>{items}</Grid>}
      {charEnded ? null : (
        <ButtonLong
          onClick={() => onRequest(offset)}
          disabled={loadingNewItem}
          $type="main"
        >
          <div className="inner">Load More</div>
        </ButtonLong>
      )}
    </div>
  );
};

CharacterList.propTypes = {
  onSelectChar: PropTypes.func.isRequired,
  selectedId: PropTypes.number.isRequired,
};

export default CharacterList;
