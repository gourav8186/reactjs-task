import React from "react";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../components/Heading";
import StyledButton from "../components/Button";
import InputFields from "../components/InputFields";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container p-3">
      <Heading
        heading="Signin to your PopX account"
        bottomline="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
      />
      <div className="col-lg-4">
        <form>
          <InputFields
            type="text"
            label="Email Address"
            name="email"
            placeholder="Enter Email Address"
            required="required"
          />
          <InputFields
            type="password"
            name="pass"
            label="Password"
            placeholder="Enter Password"
            required="required"
          />
          <Link to="/profile">
            <StyledButton
              type="submit"
              hoverColor="#6C25FF"
              buttonType="submit"
              backgroundColor="#CBCBCB"
              color="#FFFFFF"
            >
              Login
            </StyledButton>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
