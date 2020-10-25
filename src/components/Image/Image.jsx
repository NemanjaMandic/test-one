import React from "react";
import PropTypes from "prop-types";
import { StyledImage } from "./style";

const Image = ({ src, alt }) => {
  return <StyledImage src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
