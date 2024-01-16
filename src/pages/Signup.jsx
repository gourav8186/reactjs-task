import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../components/Heading";
import InputFields from "../components/InputFields";
import StyledButton from "../components/Button";
import "../index.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <form>
      <div className="signUp container d-flex flex-column justify-content-between height py-4">
        <div>
          <Heading heading="Create your PopX account" />
          <div className="row mx-auto">
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="text"
                label="Full Name"
                validate="*"
                name="fname"
                placeholder="Enter Your Name"
                required="required"
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="text"
                label="Phone Number"
                validate="*"
                name="fname"
                placeholder="Enter Your Number"
                required="required"
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="email"
                label="Email Address"
                validate="*"
                name="email"
                placeholder="Enter Your Email"
                required="required"
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="password"
                label="Password"
                validate="*"
                name="pass"
                placeholder="Enter Your Password"
                required="required"
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="text"
                label="Company Name"
                validate="*"
                name="cName"
                placeholder="Enter Company Name"
                required="required"
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <div className="askQue p-2">
                <label htmlFor="ask" className="validate">
                  Are you an Agency<span>*</span>
                </label>
                <br />
                <div className="rBtn d-flex align-items-center pt-1">
                  <input type="radio" id="yes" name="ask" />
                  <label htmlFor="yes">Yes</label>
                  <input type="radio" id="no" name="ask" />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-10 col-md-10">
          <Link to="/profile">
            <StyledButton
              hoverColor="#919191"
              buttonType="submit"
              backgroundColor="#6C25FF"
              color="#FFFFFF"
            >
              Create Account
            </StyledButton>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Signup;
