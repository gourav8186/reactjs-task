import React from "react";
import StyledButton from "../components/Button";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div className="home container mx-auto height d-flex flex-column py-3">
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
