import React from 'react';
import './form-container.style.scss'

const FormContainer = ({children, ...otherProps }) => (
        <div className="form-container" {...otherProps}>
            {children}
        </div>

);

export default FormContainer;
