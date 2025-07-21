import styled from "styled-components";

const Wrapper = styled.div`
  padding: 25px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  background-color: #fff;

  @media (max-width: 500px) {
    grid-row: 1;
  }
`;

const BasicsWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  column-gap: 25px;

  img {
    width: 150px;
    height: 150px;
    object-fit: ${(props) => (props.$contain ? "contain" : "cover")};
  }
`;

const ButtonsWrapper = styled.div`
  margin-top: 35px;

  a:nth-child(2) {
    margin-top: 10px;
  }
`;

const Description = styled.p`
  margin-top: 15px;
  font-size: 14px;
  line-height: 18px;
`;

const ComicsLabel = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
  margin-top: 10px;
`;

const ComicsList = styled.ul`
  position: relative;
  margin-top: 10px;
`;

const ComicsItem = styled.li`
  width: 100%;
  padding: 0px 10px;
  line-height: 25px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 10px;
`;

export {
  Wrapper,
  BasicsWrapper,
  ButtonsWrapper,
  Description,
  ComicsLabel,
  ComicsList,
  ComicsItem,
};
