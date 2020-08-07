import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import gs from "../Assets/imgs/gs-hd2.png";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  const classes = {
    navLink: {
      textDecoration: "none",
      color: "white",
      paddingRight:"15px",  
      paddingLeft:"15px",
      paddingTop:"5px",
      paddingBottom:"5px",
      
      fontSize:"17px",
      fontWeight:"500",
      margin:"10px",
      borderRadius:"20px",
      border:"1.5px solid #ff6d38"
      
      
    },
    navBarStyle:{

      backgroundColor:"",
      boxShadow:"none",

    },
    

   
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="" variant="light" fixed="top"  style={classes.navBarStyle}   >
        <div className="container">
          <Navbar.Brand>
            <NavLink to="/">
              <span>
                <img
                  src={gs}
                  alt=""
                  className="img img-fluid"
                  style={{ height: "50px", width: "auto" }}
                />
              </span>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavLink style={classes.navLink} to="/features">
                Features
              </NavLink>
              <NavLink style={classes.navLink} to="/our-team" >
                Our Team
              </NavLink>
              <NavLink style={classes.navLink} to="/events">
                Events
              </NavLink>
              <NavLink style={classes.navLink} to="/pricing">
                Pricing
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default NavBar;
