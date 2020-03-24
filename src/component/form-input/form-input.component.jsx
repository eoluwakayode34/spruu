import React from 'react';
import './form-input.style.scss';

const FormInput = ({handleChange, label, ...OtherProps }) => (
    <div className="group">
        <input type="text" className='form-input' onChange={handleChange} {...OtherProps} />
    </div>

)

export default FormInput;