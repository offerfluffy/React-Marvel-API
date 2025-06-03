import {
  CharacterInfoWrapper,
  BasicsWrapper,
  ButtonsWrapper,
  Description,
  ComicsLabel,
  ComicsList,
  ComicsItem,
} from "./character-info-styled";
import { Name } from "../random-char/random-char-styled";
import { Button } from "../../styles/button/button-styled.js";

import Skeleton from "../skeleton/skeleton";

import thor from "../../resources/img/thor.jpeg";

function CharacterInfo() {
  return (
    <CharacterInfoWrapper>
      <BasicsWrapper>
        <img src={thor} alt="abyss" />
        <div>
          <Name>thor</Name>
          <ButtonsWrapper>
            <Button href="#" $type="main">
              <div className="inner">homepage</div>
            </Button>
            <Button href="#" $type="secondary">
              <div className="inner">Wiki</div>
            </Button>
          </ButtonsWrapper>
        </div>
      </BasicsWrapper>
      <Description>
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </Description>
      <ComicsLabel>Comics:</ComicsLabel>
      <ComicsList>
        <ComicsItem>All-Winners Squad: Band of Heroes (2011) #3</ComicsItem>
        <ComicsItem>Amazing Spider-Man (1999) #503</ComicsItem>
        <ComicsItem>Amazing Spider-Man (1999) #504</ComicsItem>
        <ComicsItem>
          AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
        </ComicsItem>
        <ComicsItem>
          Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
        </ComicsItem>
        <ComicsItem>
          Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
        </ComicsItem>
        <ComicsItem>Vengeance (2011) #4</ComicsItem>
        <ComicsItem>Avengers (1963) #1</ComicsItem>
        <ComicsItem>Avengers (1996) #1</ComicsItem>
      </ComicsList>
      <Skeleton />
    </CharacterInfoWrapper>
  );
}

export default CharacterInfo;
