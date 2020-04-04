import React, { Component } from "react";
import ReactDOM from "react-dom";
import posed, { PoseGroup } from "react-pose";
import SplitText from "react-pose-text";
import { connect } from "react-redux";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import "../style/Home.css";
import BackgroundSlider from "react-background-slider";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
const Modal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    beforeChildren: true,
    staggerChildren: 50,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 },
  },
});

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    default: { duration: 300 },
  },
});

const charPoses = {
  exit: { opacity: 0, x: 20 },
  enter: {
    opacity: 1,
    x: 0,
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
      slides: ["We Bring Your thought to life", "Engineering", "Construction"],
      aec: ["ARCHITECTURE", "ENGINEERING", "CONSTRUCTION"],
      currentSlide: 0,
      slideTimer: 2 * 1000,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.changeSlide();
    }, 5000);
  }
  changeSlide() {
    let { slides, currentSlide } = this.state;
    let nextSlide = slides.length - 1 > currentSlide ? currentSlide + 1 : 0;

    this.setState({ isVisible: false, currentSlide: nextSlide });
    const that = this;
    setTimeout(function () {
      that.setState({ isVisible: true });
    }, 500);
  }

  render() {
    let { isVisible, slides, currentSlide, ace } = this.state;

    return (
      <div className="container">
        <div className="display">
          {this.props.setOpen ? (
            <PoseGroup>
              {isVisible && [
                <BackgroundSlider
                  images={[image1, image2, image3]}
                  duration={3}
                  transition={2}
                  key="shade"
                  className="shade"
                />,
              ]}
            </PoseGroup>
          ) : (
            <PoseGroup>
              {isVisible && [
                <BackgroundSlider
                  images={[image1, image2, image3]}
                  duration={3}
                  transition={2}
                  key="shade"
                  className="shade"
                />,
                <Modal key="modal" className="modal">
                  <p>{this.state.aec[currentSlide]} </p>
                  <h3>
                    <SplitText charPoses={charPoses}>
                      {slides[currentSlide]}
                    </SplitText>
                  </h3>
                </Modal>,
              ]}
            </PoseGroup>
          )}
        </div>
        <div className="socialHandle">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    menuOpen: state.menuReducer.menuOpen,
  };
}
export default connect(mapStateToProps, {})(Home);
