import React from "react";
import Typography from "@material-ui/core/Typography";
import logo from "../images/logo.png";
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

const useStyles = makeStyles((theme) => ({
  paragraph: {
    fontFamily: "'Dosis', sans-serif",
    fontWeight: "400",
    lineHeight: "30px",
    fontSize: "1.1rem",
    marginTop: "200px",
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

  return (
    <div className="about-wrapper">
      <div className="about">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="about-content">
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
      <div className="about">
        
        <div className="about-content">
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
      
    </div>
  );
}
