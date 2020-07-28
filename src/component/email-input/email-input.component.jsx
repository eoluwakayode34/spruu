import React from "react";

const EmailInput = (props) => {
    let wrapper = 'form-group'
    
    if(props.errors.email > 0){
        wrapper += " has-error"
    }

  return (
      <>
    <div className={wrapper}>
      <input
        type="email"
        onChange={props.handleChange}
        name={props.name}
        value={props.value.email}
        className="form-input"
        placeholder={props.placeholder}
        required
      />

      {props.error.email && <div className="danger"> {props.error.email} </div> }

    </div>
    </>
  );
};

export default EmailInput;

EmailInput.defaultProps = {
    error: ''
}