import {
  CharacterSearchWrapper,
  Title,
  Input,
} from "./character-search-styled";
import { Button } from "../../style/button/button-styled.js";

const CharacterSearch = () => {
  return (
    <CharacterSearchWrapper>
      <Title>Or find a character by name:</Title>
      <div>
        <form action="">
          <Input type="text" placeholder="Enter name" name="name" />
          <Button as="button" $type="main" type="submit">
            <div className="inner">FIND</div>
          </Button>
        </form>
      </div>
    </CharacterSearchWrapper>
  );
};

export default CharacterSearch;
