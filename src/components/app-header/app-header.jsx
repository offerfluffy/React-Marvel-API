import { Header, Title, Menu } from "./app-header-styled";

import { Link, NavLink } from "react-router-dom";

function AppHeader() {
  return (
    <Header>
      <Title>
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </Title>
      <Menu>
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: "#9f0013" }} to="/">
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink exact activeStyle={{ color: "#9f0013" }} to="/comics">
              Comics
            </NavLink>
          </li>
        </ul>
      </Menu>
    </Header>
  );
}

export default AppHeader;
