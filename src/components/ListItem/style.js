import styled from "styled-components";

const Wrapper = styled("div")`
  display: flex;
  margin-bottom: 10px;
  border-bottom: 1px solid #b4b4b4;
`;

const ImageItem = styled("div")`
  transition: 0.3s ease;
  width: 74px;
  position: relative;
`;

const ContentItem = styled("div")`
  margin-left: 20px;
  display: flex;
  align-self: center;
`;

const Paragraph = styled("h5")`
  color: ${(props) => (props.active ? "#06A9F6" : "#333333")};
  font-size: 0.7rem;
  transition: 0.3s ease;
`;

const ImageOverlay = styled("div")`
  transition: 0.3s ease;
  ${({ active }) => `
    background: ${active && "#303133"};
    opacity: ${active && 0.5};
  `}
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
export { Wrapper, ImageItem, ContentItem, Paragraph, ImageOverlay };
