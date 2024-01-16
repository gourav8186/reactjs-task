import styled from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
  type: props.buttonType || "button",
}))`
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  border: none;
  margin: 3px 0px;
  color: ${(props) => props.color};
  text-align: center;
  font-weight: 600;
  letter-spacing: 0px;
  text-decoration: none;
  width: 100%;
  border-radius: 6px;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s ease-in;
  font-size: clamp(2.5rem, 1.077rem + 3.7936, 5.65251);
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
export default StyledButton;
