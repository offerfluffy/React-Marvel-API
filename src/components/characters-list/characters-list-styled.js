import styled from "styled-components";
import { Name as NameSuper } from "../random-char/random-char-styled";

const Wrapper = styled.div`
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    grid-row: 2;
  }
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  column-gap: 25px;
  row-gap: 30px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 150px);
  }
`;

const Item = styled.li`
  width: 200px;
  height: 318px;
  background-color: #232222;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
  padding: 15px;
  cursor: pointer;
  transition: 0.3s transform;

  img {
    width: 200px;
    height: 200px;
    object-fit: ${(props) => (props.$fill ? "fill" : "cover")};
    transform: translate(-15px, -15px);

    @media (max-width: 500px) {
      width: 150px;
    }
  }

  &.selected {
    box-shadow: 0 5px 20px #9f0013;
    transform: translateY(-8px);
  }

  @media (max-width: 500px) {
    height: auto;
    width: 150px;
  }
`;

const Name = styled(NameSuper)`
  color: #fff;
`;

export { Grid, Item, Name, Wrapper };
