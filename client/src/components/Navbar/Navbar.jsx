import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { fleurimondColors } from './theme.js';

export const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  min-height:100vh;
  top: 0;
  left: 0;
  background-color: white;
  color: white;
  font-family: 'Exo 2', sans-serif;
  padding: 1em;
  z-index: 9999999999;
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;

  @media only screen and (max-width: 800px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  color: ${fleurimondColors.roboticRed};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  height: 100%;
  transition: all 0.2s ease;
  &:hover {
    border-color: ${fleurimondColors.white};
    color: ${fleurimondColors.white};
  }
  &:active {
    color: ${fleurimondColors.white};
  }
  &:hover,
  &:active,
  &:focus {
    border-color: ${fleurimondColors.white};
    color: ${fleurimondColors.white};
  }

  @media only screen and (max-width: 800px) {
    display: block;
    padding: 3rem;
    text-align: center;
    transition: all 0.2s ease;
  }
`;

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${fleurimondColors.midnight};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  min-height:100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${fleurimondColors.white};
    }
  }
`;

export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <MenuItem>
        <MenuLink to='/' aria-label='Home Page'>
          Home
        </MenuLink>
      </MenuItem>

      <MenuItem>
        <MenuLink to='/ExamPage' aria-label='Exam Page'>
        Exam Page
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/AdminPage' aria-label='Admin Page'>
        Admin Page
        </MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink to='/AboutPage' aria-label='About Page'>
        About Page
        </MenuLink>
      </MenuItem>
    </StyledMenu>
  );
};

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? fleurimondColors.white : fleurimondColors.white};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
