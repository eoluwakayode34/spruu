import React from "react";
import "./form-input.style.scss";

const FormInput = (props) => {
  let wrapper = "group";
  if (props.error.length > 0) {
    wrapper += " has-error";
  }

  return (
    <div className={wrapper}>
      <input
        type={props.type}
        value={props.value}
        name={props.name}
        className="form-input"
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
      
    </div>
  );
};

export default FormInput;

FormInput.defaultProps = {
  error: "",
};
