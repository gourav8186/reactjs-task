import styled from "styled-components";

const StyledHOne = styled.h1`
  font-size: clamp(2rem, 1.077rem + 3.7936, 5.65251);
  font-weight: bolder;
`;
const StyledPara = styled.p`
  font-size: clamp(2rem, 1.077rem + 3.7936, 5.65251);
  opacity: 40%;
  font-weight: 600;
`;
const Heading = (props) => {
  return (
    <div className="heading py-2">
      <StyledHOne>{props.heading}</StyledHOne>
      <StyledPara>{props.bottomline}</StyledPara>
    </div>
  );
};
export default Heading;
