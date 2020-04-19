import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../images/logo.png";
import clients from "../images/clients.png";
import { makeStyles } from "@material-ui/core/styles";
import "../style/About.css";
import {
  FaAngleDoubleRight,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdHome, MdAssignmentTurnedIn } from "react-icons/md";
import { Grid } from "@material-ui/core";
import associates from "../images/associates.png";
import built from "../images/built.png";
import engineering from "../images/engineering.png";
import real from "../images/real.png";

const useStyles = makeStyles((theme) => ({
  paragraph: {
    fontFamily: "'Dosis', sans-serif",
    fontWeight: "400",
    lineHeight: "30px",
    fontSize: "1.1rem",
    marginTop: "200px",
  },
  consortium: {
    fontFamily: "'Dosis', sans-serif",
    fontWeight: "400",
    lineHeight: "30px",
    fontSize: "1.1rem",
    marginTop: "200px",
    textAlign: "justify",
  },
  clients: {
    fontFamily: "'Dosis', sans-serif",
    fontWeight: "400",
    lineHeight: "30px",
    fontSize: "2.0rem",
    marginTop: "20px",
  },
  found: {
    marginTop: "30px",
  },
  head: {
    color: "#F92039",
    fontWeight: "bold",
    textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white",
  },
  line: {
    width: "50%",
    border: "2px solid #F92039",
    marginTop: "10px",
  },
  social: {
    width: "40%",
    marginTop: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
export default function About() {
  const classes = useStyles();
  const [navBack, setNavBack] = useState("");
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const backgroundColor = window.scrollY < 400 ? "" : "white";
      setNavBack(backgroundColor);
    });
  }, []);
  console.log(navBack);
  return (
    <div className="about-wrapper">
      <div className="section-one">
        <div className="logo" style={{ backgroundColor: `${navBack}` }}>
          <img src={logo} alt="logo" />
        </div>
        <div className="section-one-content">
          <Grid container spacing={2} className={classes.container}>
            <Grid item xs="12" sm="6">
              <Typography variant="h4">
                {" "}
                [
                <span className="icons">
                  <MdHome />
                </span>
                ] <span className={classes.head}>WHO WE ARE</span>
              </Typography>

              <Typography variant="p" className={classes.paragraph}>
                <span class="firstcharacter">A</span> EC is a major
                interdisciplinary practice of architects, engineers, planners
                and builders, a consortium of professionals which provides a
                single source point for services that include;
                <ul>
                  <li>Architecture, Planning, & Project Management</li>
                  <li>Engineering &Construction</li>
                  <li>Real Estate & Property Development</li>
                </ul>
              </Typography>
              <div className={classes.found}>
                <Typography variant="p" className={classes.paragraph}>
                  Founded in 2003 with offices in Nigeria, United Kingdom and
                  Canada, AEC brings together into a single managed service, all
                  the major and specialist skills involved in the design and
                  construction of great buildings.
                </Typography>
              </div>
              <div className={classes.line}></div>
              <div className={classes.social}>
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </Grid>
            <Grid item xs="12" sm="6">
              <Grid container spacing={2}>
                <Grid item xs="12" sm="12">
                  <Typography variant="h4">
                    [
                    <span className="icons">
                      <FaAngleDoubleRight />
                    </span>
                    ]<span className={classes.head}> APPROACH</span>{" "}
                  </Typography>
                  <Typography variant="p" className={classes.paragraph}>
                    Our work while being inventive and forward-thinking
                    leverages insight gained through our extensive range of
                    prior experiences. AEC is strategically organized to provide
                    our clients specialized expertise through our divisions as
                    well as combining these into an effective integrated
                    solutions package
                  </Typography>{" "}
                </Grid>
                <Grid item xs="12" sm="12">
                  <div className={classes.found}>
                    <Typography variant="h4">
                      {" "}
                      [
                      <span className="icons">
                        <MdAssignmentTurnedIn />
                      </span>
                      ]<span className={classes.head}> BENEFITS</span>
                    </Typography>
                    <Typography variant="p" className={classes.paragraph}>
                      Advantages of AEC’s “Integrated Approach” include:
                      <ul>
                        <li>
                          Singular design team management ensuring no
                          responsibility gaps.
                        </li>
                        <li>Efficient teams with managed interfaces .</li>
                        <li>
                          Execution of projects within agreed cost budgets and
                          time.
                        </li>
                        <li>
                          Deep knowledge of all stages of the build process,
                          from initial briefing to concept design and delivery{" "}
                        </li>
                      </ul>
                    </Typography>{" "}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="section-two">
        <div className="section-two-content">
          <Grid container spacing={2} className={classes.container}>
            <Grid item xs="12" sm="6">
              <Typography variant="h4" className={classes.head}>
                OUR CLIENTS
              </Typography>

              <Typography variant="p" className={classes.paragraph}>
                AEC group has executed numerous projects for clients within and
                Outside Nigeria. These projects span across divers sectors which
                include
                <ul>
                  <li>Eduction</li>
                  <li>Financial Services</li>
                  <li>Telecommunication</li>
                  <li>Housing</li>
                  <li>Corporate Office </li>
                  <li>Health Care </li>
                  <li>Tourism </li>
                </ul>
              </Typography>

              <Typography variant="h5" className={classes.clients}>
                Top clients
              </Typography>

              <img src={clients} alt="clients" className="clients" />
            </Grid>
    
            <Grid item xs="12" sm="6">
              <Grid container spacing={2}>
                <Grid item xs="12" sm="12">
                  <Typography variant="h4" className={classes.head}>
                    CONSORTIUM{" "}
                  </Typography>
                  <Typography variant="p" className={classes.paragraph}>
                    The AEC consortium comprise of the following:
                  </Typography>{" "}
                </Grid>
                <Grid item xs="12" sm="12">
                  <img src={associates} alt="associates" />
                  <br></br>
                  <Typography variant="p" className={classes.consortium}>
                    Anim labore id non pariatur veniam nulla sint occaecat
                    consequat. Elit voluptate fugiat duis et nulla sit. Amet
                    minim dolor officia qui. Tempor ut id est nostrud sunt
                    officia consequat. Non consequat do ipsum Lorem qui nisi.
                    Proident adipisicing nulla qui enim.
                  </Typography>{" "}
                </Grid>
                <Grid item xs="12" sm="12">
                  <img src={engineering} alt="associates" />
                  <br></br>
                  <Typography variant="p" className={classes.consortium}>
                    Anim labore id non pariatur veniam nulla sint occaecat
                    consequat. Elit voluptate fugiat duis et nulla sit. Amet
                    minim dolor officia qui. Tempor ut id est nostrud sunt
                    officia consequat. Non consequat do ipsum Lorem qui nisi.
                    Proident adipisicing nulla qui enim.
                  </Typography>{" "}
                </Grid>
                <Grid item xs="12" sm="12">
                  <img src={built} alt="associates" />
                  <br></br>
                  <Typography variant="p" className={classes.consortium}>
                    Anim labore id non pariatur veniam nulla sint occaecat
                    consequat. Elit voluptate fugiat duis et nulla sit. Amet
                    minim dolor officia qui. Tempor ut id est nostrud sunt
                    officia consequat. Non consequat do ipsum Lorem qui nisi.
                    Proident adipisicing nulla qui enim.
                  </Typography>{" "}
                </Grid>
                <Grid item xs="12" sm="12">
                  <img src={real} alt="associates" />
                  <br></br>
                  <Typography variant="p" className={classes.consortium}>
                    Anim labore id non pariatur veniam nulla sint occaecat
                    consequat. Elit voluptate fugiat duis et nulla sit. Amet
                    minim dolor officia qui. Tempor ut id est nostrud sunt
                    officia consequat. Non consequat do ipsum Lorem qui nisi.
                    Proident adipisicing nulla qui enim.
                  </Typography>{" "}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
