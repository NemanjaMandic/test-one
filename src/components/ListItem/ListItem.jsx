import React from "react";
import PropTypes from "prop-types";
import Image from "../Image";
import {
  Wrapper,
  ImageItem,
  ContentItem,
  Paragraph,
  ImageOverlay,
} from "./style";

const ListItem = ({ avatar, active, fileName, onClick, id }) => {
  return (
    <Wrapper id={id} onClick={onClick} active={active}>
      <ImageItem>
        <Image src={avatar} alt={fileName} />
        <ImageOverlay active={active} />
      </ImageItem>
      <ContentItem>
        <Paragraph active={active}>{fileName}</Paragraph>
      </ContentItem>
    </Wrapper>
  );
};

ListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  active: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

export default ListItem;
