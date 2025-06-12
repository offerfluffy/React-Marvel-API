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
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
              to="/"
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
              to="/comics"
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </Menu>
    </Header>
  );
}

export default AppHeader;
