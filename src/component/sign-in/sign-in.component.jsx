import React, { useState } from "react";
import PasswordInput from "../password-input/password-input.component";
import EmailInput from "../email-input/email-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.style.scss";

import { Link } from "react-router-dom";

const SignIn = (props) => {
  const [errors, setErrors] = useState({
      email: "",
      password: ""
  });

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function formIsValid() {
    const _errors = {};

    if (!login.email) _errors.email = "Email is required";
    if (!login.password) _errors.password = "Password is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    if (!formIsValid()) return;
    event.preventDefault();
  }

  function handleChange({ target }) {
    setLogin({ ...login, [target.name]: target.value });
  }

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit} >
        <EmailInput
          errors={errors}
          name="email"
          onChange={handleChange}
          value={login.email}
          placeholder="Email"
        />

        <PasswordInput
          errors={errors}
          name="password"
          placeholder="Password"
          value={login.password}
          onChange={handleChange}
        />

        <CustomButton type="submit" name='submit'> SIGN IN </CustomButton>
      </form>

      <div className="forget-password">
        <div className="b-r flex-1 mt"> Forget my Password? </div>
        <div className="flex-1 mt no-account">
          {" "}
          Don’t have an account?
          <Link to="/signup" className="sign-up-link">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
