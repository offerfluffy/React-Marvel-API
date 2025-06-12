import {
  SingleComicsWrapper,
  Name,
  Description,
  Back,
  Price,
} from "./single-comics-styled";

import { useParams } from "react-router-dom";
import useMarvelService from "../../services/marvel-service.js";

import { useState, useEffect } from "react";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../error-message/error-message.jsx";

function SingleComics() {
  const { comicsId } = useParams();
  const [comics, setComics] = useState({});

  const { loading, error, getComics, clearError } = useMarvelService();

  useEffect(() => {
    updateInfo();
  }, [comicsId]);

  const onInfoLoaded = (comics) => {
    setComics(comics);
  };

  const updateInfo = () => {
    clearError();
    getComics(comicsId).then((comics) => {
      onInfoLoaded(comics);
    });
  };

  return (
    <SingleComicsWrapper $loading={loading || error}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <View comics={comics} />
      )}
    </SingleComicsWrapper>
  );
}

function View({ comics }) {
  const { title, description, thumbnail, price, language, pages } = comics;

  return (
    <>
      <img src={thumbnail} alt={title} />
      <div>
        <Name>{title}</Name>
        <Description>
          {description ? description : "No description..."}
        </Description>
        <Description>{pages} pages</Description>
        <Description>Language: {language ? language : "en-us"}</Description>
        <Price>{price}$</Price>
      </div>
      <Back to="/comics">Back to all</Back>
    </>
  );
}

export default SingleComics;
