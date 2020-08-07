import React from "react";

import styled from 'styled-components';
import snav from "../Components/SideMenu.module.css"

import "../App.css"



const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ff6d38;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  
  
  top: 0;
  right: 0;
  z-index:70;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open} className={`${snav.menu}`} >
    <a href="/">
        <span role="img" aria-label="events">🏡</span>
        Home
      </a>
      <a href="/Events">
        <span role="img" aria-label="events">💁🏻‍♂️</span>
        Events
      </a>
      <a href="/our-team">
        <span role="img" aria-label="team">💸</span>
       Team 
        </a>
      <a href="#footer">
        <span role="img" aria-label="contact">📩</span>
        Contact
        </a>
    </StyledMenu>
  )
}
 const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 100;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)} className={`${snav.burger}`}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
};

const  SideMenu =()=>
{


    // const useOnClickOutside = (ref, handler) => {
    //     React.useEffect(() => {
    //       const listener = event => {
    //         if (!ref.current || ref.current.contains(event.target)) {
    //           return;
    //         }
    //         handler(event);
    //       };
    //       document.addEventListener('mousedown', listener);
      
    //       return () => {
    //         document.removeEventListener('mousedown', listener);
    //       };
    //     },
    //     [ref, handler],
    //     );
    //   };
    const [open, setOpen] = React.useState(false);
    const node = React.useRef();
   return (     
    <div>
     <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
   )
}


export default SideMenu;