import React from "react";
import Heading from "../components/Heading";
import InputFields from "../components/InputFields";
import StyledButton from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Signup = () => {
  const initialValues = {
    fullname: "",
    phonenumber: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const InputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const error = {};
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const phRegex = /^[6-9]\d{9}$/;
    if (!values.fullname) {
      error.fullname = "Please enter your full name";
    }
    if (!values.phonenumber) {
      error.phonenumber = "Please enter your phone number";
    } else if (values.phonenumber.length < 10) {
      error.phonenumber = "Mobile number should be 10 digits";
    } else if (!phRegex.test(values.phonenumber)) {
      error.phonenumber = "Please enter valid mobile number";
    }
    if (!values.email) {
      error.email = "User Email is required!";
    } else if (!regex.test(values.email)) {
      error.email = "Please enter a valid email address.";
    }
    if (!values.password) {
      error.password = "Password is required!";
    } else if (values.password.length < 6) {
      error.password = "password must be at least 6 characters long";
    }
    if (!values.company) {
      error.company = "Please enter company name";
    }
    if (!values.agency) {
      error.agency = "Please Choose the one answer";
    } else {
      navigate("/profile");
    }

    return error;
  };
  return (
    <form onSubmit={FormSubmit}>
      <div className="signUp container d-flex flex-column justify-content-between height py-4">
        <div>
          <Heading heading="Create your PopX account" />
          <div className="row mx-auto">
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="text"
                label="Full Name"
                validate="*"
                name="fullname"
                placeholder="Enter Your Name"
                value={formValues.fullname}
                onChange={InputChange}
                error={formErrors.fullname}
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="text"
                label="Phone Number"
                validate="*"
                name="phonenumber"
                placeholder="Enter Your Number"
                value={formValues.phonenumber}
                onChange={InputChange}
                error={formErrors.phonenumber}
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="email"
                label="Email Address"
                validate="*"
                name="email"
                placeholder="Enter Your Email"
                value={formValues.email}
                onChange={InputChange}
                error={formErrors.email}
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="password"
                label="Password"
                validate="*"
                name="password"
                placeholder="Enter Your Password"
                value={formValues.password}
                onChange={InputChange}
                error={formErrors.password}
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <InputFields
                type="text"
                label="Company Name"
                validate="*"
                name="company"
                placeholder="Enter Company Name"
                value={formValues.company}
                onChange={InputChange}
                error={formErrors.company}
              />
            </div>
            <div className="col-lg-6 col-sm-10 col-md-10 px-1">
              <div className="askQue p-2">
                <label htmlFor="ask" className="validate">
                  Are you an Agency<span>*</span>
                </label>
                <br />
                <div className="rBtn d-flex align-items-center pt-1">
                  <input
                    type="radio"
                    id="yes"
                    name="agency"
                    value="yes"
                    checked={formValues.agency === "yes"}
                    onChange={InputChange}
                    error={formErrors.agency}
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    id="no"
                    name="agency"
                    value="no"
                    checked={formValues.agency === "no"}
                    onChange={InputChange}
                  />
                  <label htmlFor="no">No</label>
                </div>
                <p style={{ color: "red" }}>{formErrors.agency}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-10 col-md-10">
          <StyledButton
            hoverColor="#919191"
            buttonType="submit"
            backgroundColor="#6C25FF"
            color="#FFFFFF"
          >
            Create Account
          </StyledButton>
        </div>
      </div>
    </form>
  );
};

export default Signup;
