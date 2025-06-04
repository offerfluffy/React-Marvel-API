import {
  SingleComicsWrapper,
  Name,
  Description,
  Back,
  Price,
} from "./single-comics-styled";

import xMen from "../../resources/img/x-men.png";

function SingleComics() {
  return (
    <SingleComicsWrapper>
      <img src={xMen} alt="x-men" />
      <div>
        <Name>X-Men: Days of Future Past</Name>
        <Description>
          Re-live the legendary first journey into the dystopian future of 2013
          - where Sentinels stalk the Earth, and the X-Men are humanity's only
          hope...until they die! Also featuring the first appearance of Alpha
          Flight, the return of the Wendigo, the history of the X-Men from
          Cyclops himself...and a demon for Christmas!?
        </Description>
        <Description>144 pages</Description>
        <Description>Language: en-us</Description>
        <Price>9.99$</Price>
      </div>
      <Back href="#">Back to all</Back>
    </SingleComicsWrapper>
  );
}

export default SingleComics;
