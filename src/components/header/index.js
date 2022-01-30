import { Header as HeaderStyled, Nav, NavLink } from "./styled";
import { useRouteMatch } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyled>
      <Nav>
        <NavLink is_active={useRouteMatch("/movies/:page")} to="/movies/1">
          Movies
        </NavLink>
        <NavLink is_active={useRouteMatch("/favorites")} to="/favorites">
          Favorites
        </NavLink>
      </Nav>
    </HeaderStyled>
  );
};
