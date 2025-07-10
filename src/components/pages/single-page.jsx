import { useParams } from "react-router-dom";
import useMarvelService from "../../services/marvel-service.js";

import { Wrapper } from "../pages/single-comics/single-comics-styled.js";

import { useState, useEffect } from "react";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../error-message/error-message.jsx";

const SinglePage = ({ Component, dataType }) => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const { loading, error, getComics, getCharacter, clearError } =
    useMarvelService();

  useEffect(() => {
    updateInfo();
  }, [id]);

  const onInfoLoaded = (data) => {
    setData(data);
  };

  const updateInfo = () => {
    clearError();

    switch (dataType) {
      case "comics":
        getComics(id).then(onInfoLoaded);
        break;
      case "character":
        getCharacter(id).then(onInfoLoaded);
        break;
      default:
        return null;
    }
  };

  return (
    <Wrapper $loading={loading || error}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <Component data={data} />
      )}
    </Wrapper>
  );
};

export default SinglePage;
