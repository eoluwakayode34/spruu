import React, {useState} from 'react';
import CustomButton from '../custom-button/custom-button.component';
import EmailInput from "../email-input/email-input.component";
import PasswordInput from "../password-input/password-input.component";
import {Link} from 'react-router-dom'


const SignUp = (props) => {
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
          <PasswordInput
            errors={errors}
            name="confirm-password"
            placeholder="confirm-password"
            value={login.password}
            onChange={handleChange}
          />
  
          <CustomButton type="submit" name='submit'> SIGN UP </CustomButton>
        </form> 
       
           
          </div>
        
    );
  };


export default SignUp;