import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';
import css from './menu-bar.module.css';

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
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MenuBar;
