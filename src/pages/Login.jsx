import React from "react";
import Heading from "../components/Heading";
import StyledButton from "../components/Button";
import InputFields from "../components/InputFields";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const initialValues = { useremail: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const InputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const error = {};
    const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    if (!values.useremail) {
      error.useremail = "User Email is required!";
    } else if (!regex.test(values.useremail)) {
      error.useremail = "Please enter a valid email address.";
    }
    if (!values.password) {
      error.password = "Password is required!";
    } else if (values.password.length < 6) {
      error.password = "Password must be at least 6 characters long";
    } else {
      navigate("/profile");
    }

    return error;
  };

  return (
    <div className="container p-3">
      <Heading
        heading="Signin to your PopX account"
        bottomline="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
      />
      <div className="col-lg-4">
        <form onSubmit={FormSubmit}>
          <InputFields
            type="text"
            label="Email Address"
            name="useremail"
            placeholder="Enter Email Address"
            value={formValues.useremail}
            onChange={InputChange}
            error={formErrors.useremail}
          />
          <InputFields
            type="password"
            name="password"
            label="Password"
            placeholder="Enter Password"
            value={formValues.password}
            onChange={InputChange}
            error={formErrors.password}
          />

          <StyledButton
            type="submit"
            buttonType="submit"
            backgroundColor="#CBCBCB"
            color="#FFFFFF"
          >
            Login
          </StyledButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
