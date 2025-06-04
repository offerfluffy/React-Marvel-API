import styled from "styled-components";

const ComicsListWrapper = styled.div`
  margin-top: 45px;
`;

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  justify-content: space-between;
  row-gap: 55px;
`;
const Item = styled.li`
  transition: 0.3s -webkit-transform;
  transition: 0.3s transform;
  transition: 0.3s transform, 0.3s -webkit-transform;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25);
    width: 225px;
    height: 345px;
    object-fit: cover;
  }
`;
const Name = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
`;

const Price = styled.div`
  margin-top: 5px;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.6);
`;

export {ComicsListWrapper, Grid, Item, Name, Price}