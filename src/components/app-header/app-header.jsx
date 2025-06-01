import { Header, Title, Menu } from "./app-header-styled";

function AppHeader() {
  return (
    <Header>
      <Title>
        <a href="#">
          <span>Marvel</span> information portal
        </a>
      </Title>
      <Menu>
        <ul>
          <li>
            <a href="#">Characters</a>
          </li>
          /
          <li>
            <a href="#">Comics</a>
          </li>
        </ul>
      </Menu>
    </Header>
  );
}

export default AppHeader;
