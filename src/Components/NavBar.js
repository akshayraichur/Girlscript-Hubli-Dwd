import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import gs from "../Assets/imgs/gs-hd2.png";
import { NavLink } from "react-router-dom";
import navStyles from "./Navbar.module.css";
import  { useState } from "react";
import useWindowScrollPosition from "window-scroll-position";



const NavBar = () => {


  //  source == https://codesandbox.io/s/change-nav-on-scroll-0koys

  // const [change, setChange] = useState(false);
  // const changePosition = 300;
  // let position = useWindowScrollPosition();
  // //  position == { x: 0, y: 0 }

  // if (position.y > changePosition && !change) {
  //   setChange(true);
    
  // }

  // if (position.y <= changePosition && change) {
  //   setChange(false);
    
  // }


  // const style = {
  //   backgroundColor: change ? "#fff" : "transparent",
  //   transition: "400ms ease",
  //   position: "fixed",
  //   right: 0,
  //   left: 0,
  //   top: 0
   
  // };

  return (
    <>
      <Navbar collapseOnSelect  expand="lg"  variant="dark" fixed="top"  className={navStyles.navBarStyle}  >
        <div className="container">
          <Navbar.Brand>
            <NavLink to="/">
              <span>
                <img
                  src={gs}
                  alt=""
                  className={`img -img-fluid ${navStyles.gs}`}
                  style={{  }}
                />
              </span>
            </NavLink>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" className={`${navStyles.controls}`} />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavLink className={`${navStyles.navLink}`} to="/features">
                Features
              </NavLink>
              <NavLink className={`${navStyles.navLink}`} to="/our-team" >
                Our Team
              </NavLink>
              <NavLink className={`${navStyles.navLink}`} to="/events">
                Events
              </NavLink>
              <NavLink className={`${navStyles.navLink}`} to="/pricing">
                Pricing
              </NavLink>
            </Nav>
          </Navbar.Collapse> */}
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
