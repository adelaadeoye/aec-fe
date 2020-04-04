import React, { useEffect } from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { connect } from "react-redux";
import { menuAction } from "../../redux/actions/MenuActions";

export const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  useEffect(() => {
    props.menuAction(open)
  }, [open]);
console.log("I am menu status",props.menuOpen)
  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">💁🏻‍♂️</span>
          About us
        </a>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">💸</span>
          Sectors
        </a>
        <a href="/" tabIndex={tabIndex}>
          <span aria-hidden="true">📩</span>
          Contact
        </a>
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
function mapStateToProps(state) {
  return {
    isFetching: state.menuReducer.isFetching,
    menuOpen: state.menuReducer.menuOpen,
  };
}
export default connect(mapStateToProps, { menuAction })(Menu);
