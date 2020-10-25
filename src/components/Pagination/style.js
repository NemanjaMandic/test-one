import styled from "styled-components";

const StyledButton = styled("button")`
  background: #ffffff;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.2 : 1)};
  margin-right: 15px;
  width: 30px;
  border: 1px solid #b4b4b4;
`;

export { StyledButton };
