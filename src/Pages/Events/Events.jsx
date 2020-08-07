import React from "react";
import classes from "./Events.module.css";
import { Button, Grid, Container } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Footer from "../../Components/Footer";

const UpcomingEvent = () => {
  const emoji = "🤸‍♂️🤸‍♀️";
  return (
    <>
      <div className={`${classes.MainEvent}`}>
        <div className={`${classes.eventWrapper}`}>
          <Fade>
            <h1>Upcoming Event Title <span>{emoji}</span></h1>
          </Fade>
          <h2>11:11:11:11</h2>
          {" "}
          <Button
            className="card-btn"
            style={{ backgroundColor: "#ff6d38", outline: "none" }}
            variant="contained"
          >
            Register Now
          </Button>
          <h3 style={{ color: "white", fontSize: "20px" }}>
            <a
              style={{ color: "#ff6d38" }}
              href="https://calendar.google.com/calendar?cid=dm1xaGhjMXBnbWZtaGsxNjRya3MzMmt0dHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
            >
              Add it to the Calender
            </a> 📆💁‍♀️
          </h3>
        </div>
      </div>
    </>
  );
};

const PastEvents = () => (
  <>
    <h1
      className="h2 text-center my-5"
      style={{ paddingTop: "20px" }}
    >
      Our Past events
    </h1>
    <Container component="main" maxWidth="lg">
      <Fade>
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((d) => (
            <Grid item md={3}>
              <div class="card">
                <div class="view overlay">
                  <img
                    class="card-img-top"
                    src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                    alt="Cardimagecap"
                  />
                  <a href=".">
                    <div class="mask rgba-white-slight"></div>
                  </a>
                </div>

                <div class="card-body">
                  <h4 class="card-title">Card title</h4>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="." class="btn btn-primary">Button</a>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Fade>
    </Container>
  </>
);

export const Events = () => {
  return (
    <div className={`${classes.Events}`}>
    <Fade>

    <UpcomingEvent />
      <PastEvents />
      <Footer/>

    </Fade>
     
    </div>
  );
};
