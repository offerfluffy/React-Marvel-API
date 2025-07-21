import styled from "styled-components";

const RandomCharWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
  overflow-x: hidden;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ButtonsWrapper = styled.div`
  a:nth-child(1) {
    margin-right: 30px;
  }

  @media (max-width: 500px) {
    a:nth-child(1) {
      margin-bottom: 10px;
    }
  }
`;

const Dynamic = styled.div`
  padding: 40px 35px;
  display: grid;
  grid-template-columns: 180px auto;
  column-gap: 30px;

  @media (max-width: 500px) {
    padding: 20px 20px;
    align-items: center;
  }
`;

const Static = styled.div`
  padding: 40px 35px;
  background-color: #232222;
  position: relative;
`;

const Image = styled.img`
  width: 180px;
  height: 180px;
  object-fit: ${(props) => (props.$contain ? "contain" : "cover")};
`;

const Decoration = styled.img`
  position: absolute;
  bottom: 14px;
  right: -37px;
  z-index: 2;
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: minmax(29px, auto) 90px 38px;
  row-gap: 10px;
  padding-top: 3px;

  @media (max-width: 500px) {
    grid-template-rows: 3fr;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 22px;
  line-height: 29px;
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 18px;
`;

const Title = styled.p`
  position: relative;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.045em;
  color: #ffffff;
  z-index: 3;

  &:nth-child(2) {
    margin: 20px 0;
  }
`;

export {
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
};
