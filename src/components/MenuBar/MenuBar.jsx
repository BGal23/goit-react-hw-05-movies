import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './menu-bar.module.css';
import { Outlet } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: tomato;
    font-weight: bold;
  }
`;

const MenuBar = () => {
  return (
    <>
      <header className={css.menuBar}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </header>
      <Outlet />
    </>
  );
};
export default MenuBar;
