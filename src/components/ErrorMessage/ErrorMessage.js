import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./style";

const ErrorMessage = ({ message, buttonLabel, onClick }) => {
  return (
    <>
      <h1>{message}</h1>
      <StyledButton onClick={onClick}>{buttonLabel}</StyledButton>
    </>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func,
};
export default ErrorMessage;
