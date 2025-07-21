import { Grid, Item, Name, Wrapper } from "./characters-list-styled";
import { ButtonLong } from "../../style/button/button-styled";

import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message.jsx";

import useMarvelService from "../../services/marvel-service.js";

import PropTypes from "prop-types";

import { useState, useEffect, useRef } from "react";

const CharacterList = (props) => {
  const { loading, error, getAllCharacters, isFallback } = useMarvelService();

  const [charList, setCharList] = useState([]);
  const [loadingNewItem, setloadingNewItem] = useState(false);
  const [offset, setOffset] = useState(291);
  const [charEnded, setCharEnded] = useState(false);

  const { onSelectChar } = props;

  const itemRefs = useRef([]);

  useEffect(() => {
    onRequest(offset, true);
    // Can invoke arrow function because CallBack is invoked after render
  }, []);

  const onListLoaded = (res) => {
    let ended = false;
    if (res.length < 9) {
      ended = true;
    }

    setCharList((prevCharList) => [...prevCharList, ...res]);
    setloadingNewItem(false);
    setOffset((prevOffset) => prevOffset + 9);
    setCharEnded(ended);
  };

  const onRequest = (offset, initial) => {
    initial ? setloadingNewItem(false) : setloadingNewItem(true);
    getAllCharacters(offset).then(onListLoaded);
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
    <Wrapper>
      {loading && !loadingNewItem ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <Grid>{items}</Grid>
      )}
      {charEnded || isFallback ? null : (
        <ButtonLong
          onClick={() => onRequest(offset)}
          disabled={loadingNewItem}
          $type="main"
        >
          <div className="inner">Load More</div>
        </ButtonLong>
      )}
    </Wrapper>
  );
};

CharacterList.propTypes = {
  onSelectChar: PropTypes.func.isRequired,
  selectedId: PropTypes.number.isRequired,
};

export default CharacterList;
