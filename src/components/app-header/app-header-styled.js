import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;

  span {
    color: #9f0013;
  }
`;

const Menu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;

    li {
      margin: 0 8px;
    }

    li a:hover {
      color: #9f0013;
    }
  }
`;

export { Header, Title, Menu };
