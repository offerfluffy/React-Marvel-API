import {
  RandomCharWrapper,
  Dynamic,
  Image,
  Info,
  Name,
  Description,
  ButtonsWrapper,
  Static,
  Title,
  Decoration,
} from "./random-char-styled";
import { Button } from "../../styles/button/button-styled.js";

import thor from "../../resources/img/thor.jpeg";
import mjolnir from "../../resources/img/mjolnir.png";

function RandomChar() {
  return (
    <RandomCharWrapper>
      <Dynamic>
        <Image src={thor} alt="Random character" />
        <Info>
          <Name>Thor</Name>
          <Description>
            As the Norse God of thunder and lightning, Thor wields one of the
            greatest weapons ever made, the enchanted hammer Mjolnir. While
            others have described Thor as an over-muscled, oafish imbecile, he's
            quite smart and compassionate...
          </Description>
          <ButtonsWrapper>
            <Button href="#" $type="main">
              <div className="inner">homepage</div>
            </Button>
            <Button href="#" $type="secondary">
              <div className="inner">Wiki</div>
            </Button>
          </ButtonsWrapper>
        </Info>
      </Dynamic>
      <Static>
        <Title>
          Random character for today!
          <br />
          Do you want to get to know him better?
        </Title>
        <Title>Or choose another one</Title>
        <Button href="#" $type="main">
          <div className="inner">try it</div>
        </Button>
        <Decoration src={mjolnir} alt="mjolnir" />
      </Static>
    </RandomCharWrapper>
  );
}

export default RandomChar;
