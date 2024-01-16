import React from "react";
import "../index.css";
import StyledButton from "../components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="container height d-flex justify-content-end flex-column py-3">
        <div>
          <Heading
            heading="Welcome to PopX"
            bottomline="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
          />
        </div>
        <div className="btn-section">
          <Link to="/signup">
            <StyledButton
              buttonType="button"
              backgroundColor="#6C25FF"
              color="#FFFFFF"
            >
              Create Account
            </StyledButton>
          </Link>

          <Link to="/login">
            <StyledButton
              buttonType="button"
              backgroundColor="#6C25FF4B"
              color="#1D2226"
            >
              Already Registered? Login
            </StyledButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
