import React from "react";

const PasswordInput = (props) => {
  let wrapper = "form-group";
  if (props.errors && props.errors.password.length > 0) {
    wrapper += " has-error";
  }

  return (
      <>
    <div className={wrapper}>
      <input       
        type="password"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-input"
        placeholder={props.placeholder}
        required
      />
    {props.errors.password && (
        <div className="danger">{props.errors.password}</div>
      )}
      
    </div>
    
      </>
  );
};

export default PasswordInput;

PasswordInput.defaultProps = {
  error: "",
};
