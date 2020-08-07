import React from 'react';
import { NavLink } from "react-router-dom";
import Fade from "react-reveal/Fade";

function Footer() {
    return (
        <div>
        <Fade>
          <footer className="page-footer font-small pt-4" id="footer">

        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6
                className="text-uppercase mb-4 font-weight-bold"
              >
                GirlScript Hubli-Dharwad 👩‍💼
              </h6>
              <p>
              A diversified community which helps in upskilling the knowledge among individuals, Empower students, and motivate them to get started with their desired stream.
              </p>
            </div>
  
            <hr className="w-100 clearfix d-md-none" />
  
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Useful Links
              </h6>
              <p>
                <NavLink to="/">Home</NavLink>
              </p>
              <p>
                <NavLink to="/">About Us</NavLink>
              </p>
              <p>
                <NavLink to="/events">Events</NavLink>
              </p>
              <p>
                <NavLink to="/our-team">Team</NavLink>
              </p>
              <p>
                <NavLink to="/">Pricing</NavLink>
              </p>
            </div>
  
            <hr className="w-100 clearfix d-md-none" />
  
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                Our Community
              </h6>
              <p>
                <NavLink to="/">Chapter Leads</NavLink>
              </p>
              <p>
                <NavLink to="/our-team">Team Members</NavLink>
              </p>
              <p>
                <NavLink to="/">Campus Heros</NavLink>
              </p>
            </div>
  
            <hr className="w-100 clearfix d-md-none" />
  
            <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact Us</h6>
              <p>
                <i className="fas fa-map-marker-alt mr-3"></i>
                GirlScript Hubli-Dharwad
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>
                <a
                  href="girlscripthublidharwad@gmail.com"
                >
                  girlscripthublidharwad@gmail.com
                </a>
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> 72046 32675
              </p>
            </div>
          </div>
  
          <hr />
  
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-left">
                © 2020 Copyright:
                <a href="https://mdbootstrap.com/">
                  <strong>GirlScript Hubli-Dharwad</strong>
                </a>| All rights reserved
              </p>
            </div>
  
            <div className="col-md-5 col-lg-4 ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://m.facebook.com/GirlscriptHD/?ref=bookmarks"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.instagram.com/girlscript_hubli_dwd/"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://chat.whatsapp.com/BSLOoTOuRlD3Fezs9ZLaM6"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      className="btn-floating btn-sm rgba-white-slight mx-1"
                      href="https://www.linkedin.com/in/girlscript-hubli-dharwad-8518281a9/"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer> 
      </Fade>  
        </div>
    )
}

export default Footer


