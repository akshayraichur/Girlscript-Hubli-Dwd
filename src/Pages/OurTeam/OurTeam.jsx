import React from "react";
import { Container, Grid } from "@material-ui/core";
import classes from "./OurTeam.module.css";

import Fade from "react-reveal/Fade";

import akshataKulkarni from "../../Assets/imgs/core-team/AkshataKulkarni.jpg";
import gagan from "../../Assets/imgs/core-team/gagan.jpg";
import afzal from "../../Assets/imgs/core-team/afzal.jpg";
import saloni from "../../Assets/imgs/core-team/saloniSingh.jpg";
import rashmi from "../../Assets/imgs/core-team/rashmi-.jpg";
import suhani from "../../Assets/imgs/core-team/suhani.jpg";
import Akshay from "../../Assets/imgs/core-team/Akshay.jpeg";
import Nischal from "../../Assets/imgs/core-team/Nischal.jpeg";
import shwetashetti from "../../Assets/imgs/core-team/shwetashetti.jpg";
import amiSohil from "../../Assets/imgs/core-team/sohailMalik.jpg";
import nikhat from "../../Assets/imgs/core-team/Nikhataara.jpeg";
import karan from "../../Assets/imgs/core-team/karan.jpg";
import sahana from "../../Assets/imgs/core-team/sahana.jpg";

// Campus Heros imports
import khushi from "../../Assets/imgs/core-team/kushiYagnik.jpg";
import mahalaxmi from "../../Assets/imgs/core-team/Mahalxmi.jpg";
import sampreetha from "../../Assets/imgs/core-team/sampreetha-ch.jpg";
import raksha from "../../Assets/imgs/core-team/Raksha.jpg";
import supriya from "../../Assets/imgs/core-team/supriya.jpeg";
import bhumika from "../../Assets/imgs/core-team/bhumika.jpeg";
import kishan from "../../Assets/imgs/core-team/kishan.jpeg";
import muskan from "../../Assets/imgs/core-team/muskan.jpeg";
import Footer from "../../Components/Footer";

const coreTeam = [
  {
    img: nikhat,
    name: "Nikhataara Jakati",
    socialMedia: [],
    team: "Chapter Lead",
  },
  {
    img: rashmi,
    name: "Rashmi Benni",
    socialMedia: [],
    team: "Chapter Lead",
  },
  {
    img: Akshay,
    name: "Akshay Raichur",
    socialMedia: [
      "https://www.linkedin.com/in/akshay-raichur",
      "https://github.com/akshayraichur",
    ],
    team: "Technical Head",
  },
  {
    img: Nischal,
    name: "Nischal Mudennavar",
    socialMedia: [
      "https://www.linkedin.com/in/nischal-mudennavar/",
      "https://github.com/nischalmudennavar",
    ],
    team: "Graphic Designer",
  },
  {
    img: suhani,
    name: "Suhani Prajapati",
    socialMedia: [
      "https://www.linkedin.com/in/suhani-prajapati-248122174",
      "https://github.com/Suhanip",
    ],
    team: "Content Writer",
  },
  {
    img: sahana,
    name: "Sahana Desai",
    socialMedia: [
      "https://www.linkedin.com/in/sahana-desai-2413711a1",
      "https://github.com/sahana-hub",
    ],
    team: "Social Media Handler",
  },

  {
    img: akshataKulkarni,
    name: "Akshata Kulkarni",
    socialMedia: [
      "https://www.linkedin.com/in/akshata-kulkarni-618047185/",
      "https://github.com/ticklestar",
    ],
    team: "Content Writer",
  },
  {
    img: gagan,
    name: "Gagan Naik",
    socialMedia: [
      "https://www.linkedin.com/in/akshata-kulkarni-618047185/",
      "https://github.com/ticklestar",
    ],
    team: "Graphic Designer",
  },
  {
    img: afzal,
    name: "Afzal Pinjar",
    socialMedia: [
      "https://www.linkedin.com/in/akshata-kulkarni-618047185/",
      "https://github.com/ticklestar",
    ],
    team: "Graphic Designer",
  },
  {
    img: amiSohil,
    name: "Sohail Manik",
    socialMedia: ["", "https://github.com/SohailManik"],
    team: "Content Writer",
  },

  {
    img: karan,
    name: "Karan Rajpurohit",
    socialMedia: [
      "https://www.linkedin.com/in/karansingh-rajpurohit-0ab99a176/",
      "https://github.com/karansinghrajpurohit",
    ],
    team: "Social Media Handler",
  },
];

const campusHeros = [
  {
    img: shwetashetti,
    name: "Shewta Shetti",
    socialMedia: [
      "https://www.linkedin.com/in/shweta-shetti-049bb417a",
      "https://github.com/shwetashetti143",
    ],
  },
  {
    img: saloni,
    name: "Saloni Singh",
    socialMedia: [
      "https://www.linkedin.com/in/suhani-prajapati-248122174",
      "https://github.com/SaloniSingh1601/",
    ],
  },
  {
    img: khushi,
    name: "Khushi Yagnik",
    socialMedia: [],
  },
  {
    img: kishan,
    name: "Kishan Rayanal",
    socialMedia: [],
  },
  {
    img: mahalaxmi,
    name: "Mahalakshmi Athani",
    socialMedia: [],
  },
  {
    img: muskan,
    name: "Muskan Badeghar",
    socialMedia: [],
  },
  {
    img: sampreetha,
    name: "Sampreeta Chitagubbi",
    socialMedia: [],
  },
  {
    img: raksha,
    name: "Raksha Navale",
    socialMedia: [],
  },
  {
    img: bhumika,
    name: "Bhumika Joshi",
    socialMedia: [],
  },
  {
    img: supriya,
    name: "Supriya Karindi",
    socialMedia: [],
  },
];

// All the info about CoreTeam
const CoreTeam = () => (
  <>
    <div className="my-5 pt-4">
      <h2 className="h2 text-center my-5">Core Team Members</h2>

      <Container component="main" maxWidth="lg">
        <Grid container spacing={5} className="my-5">
          {coreTeam.map((ct) => (
            <Grid item xs={12} sm={6} md={3} className="my-3" key={ct.name}>
              <img
                src={ct.img}
                className={`img img-fluid text-center ${classes.img}`}
                alt=""
              />
              <hr />
              <h1 className={`h3 text-center ${classes.name}`}>{ct.name}</h1>
              <h4 className="h4 text-center">{ct.team}</h4>
              <h5 className="h5 text-center">
                <span className="ml-2 fa-lg">
                  <a
                    href={ct.socialMedia[0]}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin fa-fw "></i>
                  </a>
                  <a
                    href={ct.socialMedia[1]}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fab fa-github  pl-2"></i>
                  </a>
                </span>
              </h5>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  </>
);

// All the info about Campus Hero
const CampusHeros = () => (
  <>
    <div className="pt-2">
      <h2 className="h1 text-center  pt-2">Campus Heros</h2>

      <Container component="main" maxWidth="lg">
        <Grid container spacing={4} className="my-5">
          {campusHeros.map((a, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <img
                  src={a.img}
                  className={`${classes.img} img img-fluid`}
                  alt=""
                />
                <hr />
                <h1 className={`h3 text-center ${classes.name}`}>{a.name}</h1>
                <h5 className="h5 text-center">Social Media Icons</h5>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  </>
);

export const OurTeam = () => {
  return (
    <div className={`${classes.team}`}>
      <Fade>
        <CoreTeam />
        <CampusHeros />
        <Footer />
      </Fade>
    </div>
  );
};
