import {
  ComicsListWrapper,
  Grid,
  Item,
  Name,
  Price,
} from "./comics-list-styled";
import { ButtonLong } from "../../style/button/button-styled";

import uw from "../../resources/img/UW.png";
import xMen from "../../resources/img/x-men.png";

function ComicsList() {
  return (
    <ComicsListWrapper>
      <Grid>
        <Item>
          <a href="#">
            <img src={uw} alt="ultimate war" class="comics__item-img" />
            <Name>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</Name>
            <Price>9.99$</Price>
          </a>
        </Item>
        <li class="comics__item">
          <a href="#">
            <img src={xMen} alt="x-men" class="comics__item-img" />
            <Name>X-Men: Days of Future Past</Name>
            <Price>NOT AVAILABLE</Price>
          </a>
        </li>
        <li class="comics__item">
          <a href="#">
            <img src={uw} alt="ultimate war" class="comics__item-img" />
            <Name>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</Name>
            <Price>9.99$</Price>
          </a>
        </li>
        <li class="comics__item">
          <a href="#">
            <img src={xMen} alt="x-men" class="comics__item-img" />
            <Name>X-Men: Days of Future Past</Name>
            <Price>9.99$</Price>
          </a>
        </li>
        <li class="comics__item">
          <a href="#">
            <img src={uw} alt="ultimate war" class="comics__item-img" />
            <Name>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</Name>
            <Price>9.99$</Price>
          </a>
        </li>
        <li class="comics__item">
          <a href="#">
            <img src={uw} alt="x-men" class="comics__item-img" />
            <Name>X-Men: Days of Future Past</Name>
            <Price>NOT AVAILABLE</Price>
          </a>
        </li>
        <li class="comics__item">
          <a href="#">
            <img src={uw} alt="ultimate war" class="comics__item-img" />
            <Name>ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB</Name>
            <Price>9.99$</Price>
          </a>
        </li>
        <Item>
          <a href="#">
            <img src={xMen} alt="x-men" class="comics__item-img" />
            <Name>X-Men: Days of Future Past</Name>
            <Price>NOT AVAILABLE</Price>
          </a>
        </Item>
      </Grid>
      <ButtonLong>
        <div className="inner">load more</div>
      </ButtonLong>
    </ComicsListWrapper>
  );
}

export default ComicsList;
