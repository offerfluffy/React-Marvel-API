import { Grid, Item, Selected, Name } from "./characters-list-styled";
import { ButtonLong } from "../../styles/button/button-styled";

import abyss from "../../resources/img/abyss.jpg";

function CharacterList() {
  return (
    <div>
      <Grid>
        <Item>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Item>
        <Selected>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Selected>
        <Item>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Item>
        <Item>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Item>
        <Item>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Item>
        <Item>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Item>
        <Item>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Item>
        <Item>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Item>
        <Item>
          <img src={abyss} alt="abyss" />
          <Name>Abyss</Name>
        </Item>
      </Grid>
      <ButtonLong href="#" $type="main">
        <div className="inner">Load More</div>
      </ButtonLong>
    </div>
  );
}

export default CharacterList;
