import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";
import prevIcon from "./icons/left-arrow.png";
import nextIcon from "./icons/next.png";
import { StyledButton } from "./style";

const Pagination = ({ prev, next, disabled }) => {
  return (
    <>
      <StyledButton onClick={prev} disabled={disabled}>
        <Image src={prevIcon} alt="previous icon" />
      </StyledButton>
      <StyledButton onClick={next}>
        <Image src={nextIcon} alt="next icon" />
      </StyledButton>
    </>
  );
};

Pagination.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  disabled: PropTypes.bool,
};
export default Pagination;
