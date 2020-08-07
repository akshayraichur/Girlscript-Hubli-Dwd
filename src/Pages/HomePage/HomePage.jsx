import React from "react";
import Swiper from "react-id-swiper";
import "swiper/swiper-bundle.css"; //Important for swiper to be responsive
import { Container, Grid, Button, Box } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Jumbotron from "react-bootstrap/Jumbotron"; // This import is just to show the dummy testimonials, to be replaced with original tes
import Footer from "../../Components/Footer.js";
import { NavLink } from "react-router-dom";

import classes from "./Homepage.module.css";

import versioncontrol from "../../Assets/imgs/versioncontrol.gif";
import programming from "../../Assets/imgs/Programming.gif";
import nerd from "../../Assets/imgs/Nerd-amico.png";

import Rashmi from "../../Assets/imgs/core-team/rashmi-.jpg";
import nikhat from "../../Assets/imgs/core-team/Nikhataara.jpeg";

// Testimonials component - (Can also be put in Components directory and import it here)

const rocket = "🚀";
const WelcomePage = () => (
  <>
    <Container component="main" maxWidth="lg" className={`${classes.mainPage}`}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={`${classes.mainTextGrid} my-5`}>
          <Fade>
            <div className={`text-center ${classes.mainHeading}`}>
              Welcome to <br />
              <h1 className="h1">
                GirlScript Hubli-Dharwad <span>{rocket}</span>
              </h1>
            </div>

            <div className={`my-3 text-justify ${classes.mainText}`}>
            GirlScript Hubli-Dharwad is a Non-Profit Organization chapter of GirlScript Foundation India
 A diversified community which helps in upskilling the knowledge among individuals, Empower students, and motivate them to get started with their desired stream. 
We organise Webinars,workshops,events and contests on trending technologies. We bring onboard experts of all fields to help us organise quality events and provide opportunities of networking and connecting to them for future guidance and support.

            </div>

            <Button
              variant="contained"
              color="primary"
              className={`${classes.btn}`}
            >
              Join Now! &nbsp; <span>{rocket}</span>
            </Button>
          </Fade>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={`${classes.imgSection}`}>
            <img
              src={versioncontrol}
              alt="version-control"
              className="img img-fluid"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  </>
);

const AboutUs = () => (
  <>
    <Container component="main" maxWidth="lg">
      <Grid container spacing={4}>
        <Box clone order={{ xs: 3, md: 2 }}>
          <Grid item xs={12} md={6} className="">
            <div className={`${classes.aboutusImg}`}>
              <img
                src={programming}
                alt="version-control"
                className={`img img-fluid`}
              />
            </div>
          </Grid>
        </Box>
        <Box clone order={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={6} className="">
            <Fade>
              <div className={`text-center ${classes.mainHeading} my-5`}>
                About Us <span>{rocket}</span>
              </div>

              <div className={`my-3 text-justify ${classes.mainText}`}>
              GirlScript is a section-8 company registered under government of india on 2nd of june 2017.
 and  GirlScript Technologies Private Limited incorporated on 18th of June 2020.
 GIRLSCRIPT is India's First and biggest Indian origin tech-community. It has been the fastest growing community and has also Won the  BEST EDUCATIONAL START-UP AWARD
Main motto  is to encourage gender equality in technology sector and help beginners to strengthen their fundamentals 

              </div>
            </Fade>
          </Grid>
        </Box>
      </Grid>
    </Container>
  </>
);

const WhatWeDo = () => (
  <>
    <Container component="main" maxWidth="lg" className={`${classes.aboutus}`}>
      <Grid container spacing={4}>
        <Grid item xs={12} className="my-5">
          <div>
            <h1 className={`text-center my-5 ${classes.mainHeading}`}>
              What We Do
            </h1>
            <div
              className="text-center"
            >
              on hover the below elements should expand
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="container">
        <div className="row">
          {[1, 2, 3, 4].map((e) => (
            <div className={`col-md-3 col-sm-6 col-xs-12 my-4`} key={e}>
              <div className={`card ${classes.card}`}>
                <div className="card-body">
                  <div>
                    <img
                      className="img img-fluid card-img"
                      alt=""
                      src={nerd}
                    />
                  </div>
                  <h4 className="card-title text-center">
                    Technology
                  </h4>
                  <h6 className="text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vel accusantium autem libero nulla mollitia illo
                    voluptatibus magnam porro sapiente enim.
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </>
);

const Works = () => (
  <>
    <Fade>
      <div className={`${classes.works}`}>
        <div className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="pr-5">
                  <h1 className={`${classes.worksNumber}`}>50+</h1>
                  <h4 className={`${classes.worksTitle}`}>Meetups</h4>
                </div>
              </div>
              {/* <div style={{ borderLeft: "1px solid #000", height: "80px" }}>
            </div> */}
              <div className="col-4">
                <div className="pr-5">
                  <h1 className={`${classes.worksNumber}`}>50+</h1>
                  <h4 className={`${classes.worksTitle}`}>Active Members</h4>
                </div>
              </div>
              {/* <div style={{ borderLeft: "1px solid #000", height: "80px" }}>
            </div> */}
              <div className="col-4">
                <div className="pr-5">
                  <h1 className={`${classes.worksNumber}`}>50+</h1>
                  <h4 className={`${classes.worksTitle}`}>Programs</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  </>
);

const ChapterLeads = () => (
  <>
    <Fade>
      <h1 className={`${classes.mainHeading} text-center my-5`}>
        Chapter Leads
      </h1>
      <Container component="main" maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} className="pt-5">
            <div className="text-center">
              <img
                src={Rashmi}
                alt=""
                className={`img img-fluid ${classes.chapterLeadsImg}`}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className="my-5">
            <div className="text-justify my-5">
              <h1 className="h1-responsive" style={{ color: "#ff4301" }}>
                Rashmi
                <span className="ml-2 fa-xs">
                  <a href="/" target="_blank" className="">
                    <i className="fab fa-linkedin fa-fw blue-text"></i>
                  </a>
                  <a href="/" target="_blank" className="">
                    <i className="fab fa-github text-dark pl-2"></i>
                  </a>
                </span>
              </h1>
              <h2 className="h4-responsive my-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                facilis, deleniti ab non veniam officiis magni placeat,
                perspiciatis, harum excepturi maxime ut eveniet corrupti
                perferendis inventore cupiditate pariatur dicta tempore at nam
                distinctio! Laborum est cupiditate illum minus rem quisquam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                veniam quae optio, minus quas rem saepe mollitia vel odio
                repellendus.
              </h2>
            </div>
          </Grid>
          <Box clone order={{ xs: 3, md: 2 }} className="my-5">
            <Grid item xs={12} sm={6}>
              <div className="text-justify my-5">
                <h1 className="h1-responsive" style={{ color: "#ff4301" }}>
                  Nikhataara
                  <span className="ml-2 fa-xs">
                    <a href="/" target="_blank" className="">
                      <i className="fab fa-linkedin fa-fw blue-text"></i>
                    </a>
                    <a href="/" target="_blank" className="">
                      <i className="fab fa-github text-dark pl-2"></i>
                    </a>
                  </span>
                </h1>
                <h2
                  className="h4-responsive my-2"
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Atque facilis, deleniti ab non veniam officiis magni placeat,
                  perspiciatis, harum excepturi maxime ut eveniet corrupti
                  perferendis inventore cupiditate pariatur dicta tempore at nam
                  distinctio! Laborum est cupiditate illum minus rem quisquam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  veniam quae optio, minus quas rem saepe mollitia vel odio
                  repellendus.
                </h2>
              </div>
            </Grid>
          </Box>
          <Box clone order={{ xs: 2, md: 3 }} className="pt-5">
            <Grid item xs={12} sm={6}>
              <div className="text-center">
                <img
                  src={nikhat}
                  alt=""
                  className={`img img-fluid ${classes.chapterLeadsImg}`}
                />
              </div>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Fade>
  </>
);

const Testimonials = () => {
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div className="">
      <Container component="main" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1 className="text-center my-5">Testimonials</h1>
          </Grid>
          <Grid item xs={12}>
            <Swiper {...params}>
              <div>
                <Jumbotron className={`${classes.testimonials}`}>
                  <h3>Testimonial 1</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button className={`${classes.tbuttons}`} color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron className={`${classes.testimonials}`}>
                  <h3>Testimonial 2</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button className={`${classes.tbuttons}`} color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron className={`${classes.testimonials}`}>
                  <h3>Testimonial 3</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button className={`${classes.tbuttons}`} color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron className={`${classes.testimonials}`}>
                  <h3>Testimonial 4</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button className={`${classes.tbuttons}`} color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron className={`${classes.testimonials}`}>
                  <h3>Testimonial 5</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button className={`${classes.tbuttons}`} color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>

              <div>
                <Jumbotron className={`${classes.testimonials}`}>
                  <h3>Testimonial 6</h3>
                  <br />
                  <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime cumque porro quod nulla vitae ad quibusdam beatae
                    nostrum iusto fuga?
                  </h6>
                  <br />
                  <Button className={`${classes.tbuttons}`} color="primary">KNOW MORE!</Button>
                </Jumbotron>
              </div>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};


export const HomePage = () => {
  return (
    <div className={`${classes.homePage}`}>
      {/* All the main home page contents will come here. */}
      <WelcomePage />
      <AboutUs />
      <WhatWeDo />
      <Works />
      <ChapterLeads />
      <Testimonials />
      <Footer />
    </div>
  );
};
