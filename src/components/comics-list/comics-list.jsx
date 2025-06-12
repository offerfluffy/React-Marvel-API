import {
  ComicsListWrapper,
  Grid,
  Item,
  Name,
  Price,
} from "./comics-list-styled";
import { ButtonLong } from "../../style/button/button-styled";

import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message.jsx";

import useMarvelService from "../../services/marvel-service";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ComicsList(props) {
  const [comicsList, setComicsList] = useState([]);
  const [offset, setOffset] = useState(291);
  const [loadingNewItems, setLoadingNewItems] = useState(false);
  const [comicsEnded, setComicsEnded] = useState(false);

  const { loading, error, getAllComics } = useMarvelService();

  useEffect(() => {
    onRequest(offset, true);
  }, []);

  const onListLoaded = (res) => {
    let ended = false;
    if (res.length < 8) {
      ended = true;
    }

    setComicsList((prevComicsList) => [...prevComicsList, ...res]);
    setLoadingNewItems(false);
    setOffset((prevOffset) => prevOffset + 8);
    setComicsEnded(ended);
  };

  const onRequest = (offset, initial) => {
    initial ? setLoadingNewItems(false) : setLoadingNewItems(true);
    getAllComics(offset).then(onListLoaded);
  };

  const items = comicsList?.map(({ id, title, price, thumbnail }, i) => {
    return (
      <Item key={i}>
        <Link to={`/comics/${id}`}>
          <img src={thumbnail} alt={title} className="comics__item-img" />
          <Name>{title}</Name>
          <Price>{price}$</Price>
        </Link>
      </Item>
    );
  });

  return (
    <ComicsListWrapper>
      {loading && !loadingNewItems ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <View items={items} />
      )}
      {comicsEnded ? null : (
        <ButtonLong
          onClick={() => onRequest(offset, false)}
          disabled={loadingNewItems}
        >
          <div className="inner">load more</div>
        </ButtonLong>
      )}
    </ComicsListWrapper>
  );
}

function View({ items }) {
  return <Grid>{items}</Grid>;
}

export default ComicsList;
