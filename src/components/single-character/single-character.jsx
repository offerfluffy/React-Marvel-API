import {
  SingleCharacterWrapper,
  Name,
  Description,
  Back,
} from "./single-character-styled.js";

import { useParams } from "react-router-dom";
import useMarvelService from "../../services/marvel-service.js";

import { useState, useEffect } from "react";
import Spinner from "../spinner/spinner.jsx";
import ErrorMessage from "../error-message/error-message.jsx";

function SingleCharacter() {
  const { characterId } = useParams();
  const [char, setChar] = useState({});

  const { loading, error, getCharacter, clearError } = useMarvelService();

  useEffect(() => {
    updateInfo();
  }, [characterId]);

  const onInfoLoaded = (char) => {
    setChar(char);
  };

  const updateInfo = () => {
    clearError();
    getCharacter(characterId).then((char) => {
      onInfoLoaded(char);
    });
  };

  return (
    <SingleCharacterWrapper $loading={loading || error}>
      {loading ? (
        <Spinner />
      ) : error ? (
        <ErrorMessage />
      ) : (
        <View char={char} />
      )}
    </SingleCharacterWrapper>
  );
}

function View({ char }) {
  const { name, description, thumbnail } = char;

  return (
    <>
      <img src={thumbnail} alt={name} />
      <div>
        <Name>{name}</Name>
        <Description>
          {description ? description : "No description..."}
        </Description>
      </div>
      <Back to="/">Back to main</Back>
    </>
  );
}

export default SingleCharacter;
