import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 50px;
  display: ${(props) => (props.$loading ? "block" : "grid")};
  grid-template-columns: 293px 550px auto;
  column-gap: 50px;
  align-items: start;

  img {
    width: 293px;
    height: 450px;
    object-fit: cover;
  }
`;

const Name = styled.h2`
  font-weight: bold;
  font-size: 22px;
  line-height: 29px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-top: 25px;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #9f0013;
  margin-top: 25px;
`;

const Back = styled(Link)`
  justify-self: end;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`;

export { Wrapper, Name, Description, Price, Back };
